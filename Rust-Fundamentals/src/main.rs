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

fn add(num_one:i32 , num_two:i32) -> i32 {
    num_one+num_two
}
    fn main(){
        let mut total:i32;
        let  free_shipping=false;
        total = add(10,3);
        if total > 50{
            println!("You qualify for free shipping.");
        }
        else if total > 25
        {
            println!("If you add more items, You will qualify for free shipping.");
        }
        else {
            println!("No free Shipping.");
        }

        // match free_shipping{
        //     true=> total = total + 0,
        //     false=> total = total + 5
        // }

        total =  match free_shipping{
            true=> total + 0,
            false=> total + 5
        };
        match total{
            1 => println!("1"),
            2 => println!("2"),
            _ => println!("No match foud!")
        }
        println!("{0}",total);
    }