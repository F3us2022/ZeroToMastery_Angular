// fn main() {
//     println!("Hello, world!");
// }

//------------------------------------------------------------------- DATA TYPES -----------------------------------------------------------------------------

// fn add(num_one:i32 , num_two:i32) -> i32 {
//     num_one+num_two
// }
//     fn main(){
//         let foo = add(10,2);
//         // println!("{0}",foo);
//         println!("{:?}",foo);
//     }

//------------------------------------------------------------------ CONTROL FLOW ---------------------------------------------------------------------------

// fn add(num_one:i32 , num_two:i32) -> i32 {
//     num_one+num_two
// }
//     fn main(){
//         let foo = add(10,35);
//         if foo > 50{
//             println!("You qualify for free shipping.");
//         }
//         else if foo > 25
//         {
//             println!("If you add more items, You will qualify for free shipping.");
//         }
//         else {
//             println!("No free Shipping.");
//         }
//     }


//------------------------------------------------------------------ MATCH EXPRESSION ---------------------------------------------------------------------------

// fn add(num_one:i32 , num_two:i32) -> i32 {
//     num_one+num_two
// }
//     fn main(){
//         let mut total:i32;
//         let  free_shipping=false;
//         total = add(10,3);
//         if total > 50{
//             println!("You qualify for free shipping.");
//         }
//         else if total > 25
//         {
//             println!("If you add more items, You will qualify for free shipping.");
//         }
//         else {
//             println!("No free Shipping.");
//         }

//         // match free_shipping{
//         //     true=> total = total + 0,
//         //     false=> total = total + 5
//         // }

//         total =  match free_shipping{
//             true=> total + 0,
//             false=> total + 5
//         };
//         match total{
//             1 => println!("1"),
//             2 => println!("2"),
//             _ => println!("No match foud!")
//         }
//         println!("{0}",total);
//     }


//------------------------------------------------------------------ ARRAYS ----------------------------------------------------------------------

    // fn main(){
    //     let arr:[i32;5] = [1,2,3,4,5];
    //     println!("{:?}",arr);
    // }

//------------------------------------------------------------------ VECTOR ----------------------------------------------------------------------

    
    // fn main(){
    //     let vector_items = vec![1,2,3,4,5];
    //     let mut vector_items_2 = Vec::new();
    //     vector_items_2.push(1);
    //     vector_items_2.push(2);
    //     vector_items_2.push(3);
    //     vector_items_2.push(4);
    //     vector_items_2.push(5);
     
    //     println!("{:?}",vector_items);
    //     println!("{:?}",vector_items_2);
    // }

//------------------------------------------------------------------ STRUCTURE ----------------------------------------------------------------------

// struct BankAccount {
//     balance:i32,
//     verified:bool
// }
// fn main(){

//     let my_account = BankAccount{
//         balance:2000,
//         verified:true
//     };

//     println!("{:?}",my_account.balance);
//     println!("{:?}",my_account.verified)
// }


//------------------------------------------------------------------ OWNERSHIP ----------------------------------------------------------------------

// struct BankAccount {
//     balance:i32,
//     verified:bool
// }


// Below code wont run for function print_verified as the ownership of struct was with print_balance and got destroy once wen function is over.

// fn print_balance(account:BankAccount){
//         println!("{:?}",account.balance);
// }

// fn print_verified(account:BankAccount){
//         println!("{:?}",account.verified);
// }


// fn main(){

//     let my_account = BankAccount{
//         balance:2000,
//         verified:true
//     };

//     print_balance(my_account);
//     print_verified(my_account)
// }

// to make the above code work and make the ownership shareable we use "&"

// fn print_balance(account:&BankAccount){
//         println!("{:?}",account.balance);
// }

// fn print_verified(account:&BankAccount){
//         println!("{:?}",account.verified);
// }


// fn main(){

//     let my_account = BankAccount{
//         balance:2000,
//         verified:true
//     };

//     print_balance(&my_account);
//     print_verified(&my_account)
// }

//------------------------------------------------------------------ RESULTS ----------------------------------------------------------------------

// struct BankAccount {
//     balance:i32,
//     verified:bool
// }


// fn is_verified(account:&BankAccount) -> Result<bool,bool>{
//     return match    account.verified {
//         true => Ok(true),
//         false => Err(false)
//     }
// }


// fn main(){

//     let my_account = BankAccount{
//         balance:2000,
//         verified:false
//     };   

//     // let verification_status = is_verified(& my_account).unwrap();
//     let verification_status = is_verified(& my_account).expect("Unable to unwrap result!");
    
//     println!("{:?}",verification_status)
// }

//------------------------------------------------------------------ RESULTS ----------------------------------------------------------------------

fn main(){}