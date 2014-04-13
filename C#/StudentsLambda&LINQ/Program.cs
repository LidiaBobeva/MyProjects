using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3StudentsLINQ
{
    class Program
    {
        static void Main(string[] args)
        {
            //1.	Напишете клас Student със следните свойства: първо име, фамилия и възраст. 
            //Напишете метод, който по даден масив от студенти намира всички студенти, на които името им е по-малко лексикографски от фамилията. 
            //Използвайте LINQ заявка. 
            //2.	Напишете LINQ заявка, която намира първото име и фамилията на всички студенти, които са на възраст между 18 и 24 години включително. 
            //Използвайте класа Student от предната задача. 
            //3.	Като използвате разширяващите методи OrderBy(…) и ThenBy(…) с ламбда израз, сортирайте списък от студенти 
            //по първо име и по фамилия в намаляващ лексикографски ред. Напишете същата функционалност, използвайки LINQ заявка. 

            List<Student> students = new List<Student>();
            students.Add(new Student("Ivan", "Georgiev", 19));
            students.Add(new Student("Petar", "Antonov", 18));
            students.Add(new Student("Anton", "Ivanov", 22));
            students.Add(new Student("Georgi", "Vasilev", 25));
            students.Add(new Student("Ivan", "Petrov", 27));

            var someStudents =
                from student in students
                where string.Compare(student.FirstName, student.LastName, true) == 1
                select student;

            Console.WriteLine("Student, which last name is lexicographically earlier than first name:\n");
            foreach (var student in someStudents)
            {
                Console.WriteLine(student);
            }
            Console.WriteLine();

            var studentsBetween18And24 = students.FindAll(x => x.Age >= 18 && x.Age <= 24);

            Console.WriteLine("Students with age between 18 and 24 /first solution/:\n");
            foreach (var student in studentsBetween18And24)
            {
                Console.WriteLine("{0} {1}", student.FirstName, student.LastName);
            }
            Console.WriteLine();

            //Solution number 2
            var studentsBetween18And24s2 =
                from student in students
                where student.Age >= 18 && student.Age <= 24
                select new { FirstName = student.FirstName, LastName = student.LastName };

            Console.WriteLine("Students with age between 18 and 24 /second solution/:\n");
            foreach (var student in studentsBetween18And24s2)
            {
                Console.WriteLine(student);
            }
            Console.WriteLine();

            //Ordered students with lambda expressions
            var sortedStudentsByName = students
                .OrderByDescending(x => x.FirstName)
                .ThenByDescending(x => x.LastName);

            Console.WriteLine("Ordered students with lambda expressions:\n");
            foreach (var student in sortedStudentsByName)
            {
                Console.WriteLine(student);
            }

            Console.WriteLine();

            //Ordered students with LINQ
            var sortedStudentsByName2 =
                from student in students
                orderby student.FirstName descending, student.LastName descending
                select student;

            Console.WriteLine("Ordered students with LINQ:\n");
            foreach (var student in sortedStudentsByName2)
            {
                Console.WriteLine(student);
            }

            Console.WriteLine();
        }
    }
}
