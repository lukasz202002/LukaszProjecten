#include <iostream>
#include <fstream>
#include <string>

using namespace std;

bool LoggingIn()
{
    string username, password, user, pass;

    cout << "Enter Username: "; cin >> username;
    cout << "Enter Password: "; cin >> password;

    ifstream read(username + ".txt");
    getline(read, user);
    getline(read, pass);

    if (user == username && pass == password)
    {
        return true;
    }
    else    
    {
        return false;
    }
}

int main()
{
    int choice;
    cout << "Kiez een optie!\n1: Registreren\n2 Login\n Uw keuze:"; 
    cin >> choice;
    if (choice ==1) 
    {
        string username, password;
        cout << "Select a username: "; cin >> username;
        cout << "Select a password: "; cin >> password;

        ofstream file; 
        file.open(username + ".txt"); 
        file << username << endl << password; 
        file.close();

        main ();

    }

    else if (choice ==2)
    {
        bool status = LoggingIn(); 
        if (!status)
        {
            cout << "Incorrect Information, Try again" << endl; 
            system("PAUSE");
            return 0; 
        }
        else
        {
            cout << "Login Successful!" << endl; 
            system("PAUSE");
            return 1;   
        }
    }
}