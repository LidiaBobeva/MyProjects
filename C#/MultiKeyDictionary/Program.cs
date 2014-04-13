using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _6HashSetMoreThanOneValue
{
    class Program
    {
        static void Main(string[] args)
        {
            //Реализирайте хеш-таблица, която позволява по даден ключ да съхраняваме повече от една стойност.
            //Ползвайте Dictionary<K, ArrayList<V>>.

            Dictionary<int, List<string>> dict = new Dictionary<int, List<string>>();
            string endEnteringData = "y";

            while (true)
            {
                if (endEnteringData == "n")
                {
                    Console.WriteLine("In your dictionary you enter: ");
                    break;
                }
                if (endEnteringData == "y")
                {
                    Console.WriteLine("Please enter key (number): ");
                    int key = 0;
                    bool parseSuccess = int.TryParse(Console.ReadLine(), out key);

                    if (parseSuccess)
                    {
                        Console.WriteLine("Please enter value (word): ");
                        string value = Console.ReadLine();

                        if (!dict.ContainsKey(key))
                        {
                            List<string> values = new List<string>();
                            dict.Add(key, values);
                            values.Add(value);
                        }
                        else
                        {
                            dict[key].Add(value);
                        }
                    }
                    else
                    {
                        Console.WriteLine("The key is not valid!");
                        continue;
                    }
                }
                else
                {
                    Console.WriteLine("Please enter valid command.");
                }
                Console.WriteLine("\nHave you more keys and values to enter: for \"yes\" -> y, for \"no\" -> n");
                endEnteringData = Console.ReadLine();
                Console.WriteLine();
            }

            foreach (var item in dict)
            {
                Console.Write("{0} -> ", item.Key);
                string resultValuesComma = string.Join(", ", item.Value);
                Console.Write(resultValuesComma);
                Console.WriteLine();
            }

            Console.WriteLine();
        }
    }
}
