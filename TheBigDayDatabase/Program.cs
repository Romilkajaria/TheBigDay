bool exit = false;

while (exit == false)
{
    Console.WriteLine("Database Helper - pick one");
    Console.WriteLine("1. Create New Database");
    Console.WriteLine("2. Upgrade Database");
    Console.WriteLine("3. Delete Database");
    Console.WriteLine("4. Exit");


    string input = Console.ReadLine();
    if(input == "")
    {
        input = "-1";
    }
    int option = Convert.ToInt32(input);

    switch (option)
    {
        case 1:
            Console.WriteLine("option 1 selected");
            break;
        case 2:
            Console.WriteLine("option 2 selected");
            break;
        case 3:
            Console.WriteLine("option 3 selected");
            break;
        case 4:
            exit = true;
            break;
        default:
            Console.WriteLine("invalid input! Try again");
            break;
    }
}
Console.WriteLine("Closing App...");
Thread.Sleep(5000);
