// //Mongo dB

const { type } = require('os')

// DB server -> data base => collections => documents => BSON

//             SQL                        noSQL

//             tables                  collections
//             rows                    documents
//             columns                 fields
//             primary key             _id
//             foreign key             reference
//             joins                   embedded documents
//             schema                  schema less
//             transactions             no transactions
//             ACID                     BASE
//             structured               semi-structured
//             vertical scaling         horizontal scaling
//             expensive                  cheap
//             rigid                      flexible
//             fixed                      dynamic
//             predefined                 dynamic
//             data integrity             no data integrity
//             data security              no data security
//             data consistency        no data consistency
//             data availability       no data availability
//             data durability          no data durability
//             data redundancy          no data redundancy
//             data integrity           no data integrity
//             data security            no data security
//             data consistency         no data consistency


require('dotenv').config()
console.log(process.env.DB_PASSWORD)