#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>

using namespace eosio;

class talentaction : public eosio::contract {
private:
    struct action {
        uint64_t prim_key;    // primary key
        uint64_t timestamp;   // the store the last update block time
        account_name sender;      // account name for the sender
        account_name recipient;   // account name for the recipient
        uint64_t object;      // the object id
        std::string action;      // the action name

        uint64_t primary_key() const { return prim_key; }
        uint64_t by_object() const { return object; }
    };

    // create a multi-index table and support secondary key
    typedef eosio::multi_index<N(actions), action,
            indexed_by < N(byobject), const_mem_fun < action, uint64_t, &notestruct::by_object> >
    >
    action_table;

    action_table _actions;
};

// specify the contract name, and export a public action: update
EOSIO_ABI( talentaction, (update)
)
