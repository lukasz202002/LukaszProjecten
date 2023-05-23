#include <iostream>
#include <fstream>
#include <string>

using namespace std;

bool LoggingIn()
{
    string username, password, user, pass;

    cout << "Enter Username: "; cin >> username; //Geef de gebruikersnam in
    cout << "Enter Password: "; cin >> password; //Geef de wachtwoord in

    ifstream read(username + ".txt"); // open het bestand met de gebruikersnaam
    getline(read, user); // lees de gebruikersnaam in het bestand
    getline(read, pass); // lees het wachtwoord in het bestand

    if (user == username && pass == password) // controleer of alles klopt
    {
        return true; // alles klopt? dan krijg je toegang
    }
    else    
    {
        return false; // klopt er iets niet? geen toegang
    }
}

int main() // terug naar de hoofmenu 
{
    int choice;
    cout << "Kies een optie!\n1: Registreren\n2 Login\n Uw keuze:"; 
    cin >> choice;
    if (choice ==1) 
    {
        string username, password;
        cout << "Select a username: "; cin >> username; // kies een gebruikersnaam
        cout << "Select a password: "; cin >> password; // kies een wachtwoord

        ofstream file; 
        file.open(username + ".txt"); // Maak een nieuw bestand aan met de gebruikersnaam als naam
        file << username << endl << password; // Schrijf de gebruikersnaam en het wachtwoord naar het bestand
        file.close();

        main ();

    }

    else if (choice ==2)
    {
        bool status = LoggingIn(); // probeer in te loggen
        if (!status)
        {
            cout << "Incorrect Information, Try again" << endl; // // verkerde gegevens, probeer opnieuw
            system("PAUSE"); // Pauzeer het programma
            return 0; // Stop het programma
        }
        else
        {
            cout << "Login Successful!" << endl; // Succesvol ingelogd
            system("PAUSE"); // Pauzeer het programma
            return 1;   // Stop het programma
        }
    }
}