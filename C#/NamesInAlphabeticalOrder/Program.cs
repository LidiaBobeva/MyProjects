using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace _6NamesListInAlphabetOrder
{
    class Program
    {
        static void Main(string[] args)
        {
            //Напишете програма, която чете списък от имена от текстов файл, подрежда ги по азбучен ред и ги запазва в друг файл. 
            //Имената са записани по едно на ред. 
            StreamReader reader = new StreamReader("UnorderedListWithNames.txt");
            using (reader)
            {
                string line = reader.ReadLine();
                List<string> nameList = new List<string>();
                while (line != null)
                {
                    nameList.Add(line);
                    line = reader.ReadLine();
                }
                nameList.Sort();
                StreamWriter writer = new StreamWriter("OrderedListWithNames.txt");
                using (writer)
                {
                    foreach (string name in nameList)
                    {
                        writer.WriteLine(name);
                    }
                }
            }
        }
    }
}
