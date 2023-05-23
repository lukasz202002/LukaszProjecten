#include <iostream>
#include <string>

using namespace std;

string spelerRondje;
string spelerKruisje;
int maxAantal;

char arr[3][3];
bool wieBegint = false;

string controleWinnaar(char item) {
    // Rijen controleren
    for (int i = 0; i < 3; i++) {
        if (arr[i][0] == item && arr[i][1] == item && arr[i][2] == item)
            return string(1, item);
    }

    // Kolommen controleren
    for (int j = 0; j < 3; j++) {
        if (arr[0][j] == item && arr[1][j] == item && arr[2][j] == item)
            return string(1, item);
    }

    // Diagonalen controleren
    if (arr[0][0] == item && arr[1][1] == item && arr[2][2] == item)
        return string(1, item);
    if (arr[0][2] == item && arr[1][1] == item && arr[2][0] == item)
        return string(1, item);

    return "";
}

void verwerkSpelersnamen() {
    cout << "Welkom bij Kruisje, Rondje!" << endl;
    cout << "Voer de naam van speler 1 in (Rondje): ";
    cin >> spelerRondje;
    cout << "Voer de naam van speler 2 in (Kruisje): ";
    cin >> spelerKruisje;

    while (spelerRondje == spelerKruisje) {
        cout << "De namen mogen niet hetzelfde zijn. Voer de naam van speler 2 in (Kruisje): ";
        cin >> spelerKruisje;
    }
}

void startSpel() {
    maxAantal = 0;
    wieBegint = false;

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            arr[i][j] = '-';
        }
    }
}

void toonSpeelveld() {
    cout << "  1 2 3\n";
    for (int i = 0; i < 3; i++) {
        cout << i + 1 << " ";
        for (int j = 0; j < 3; j++) {
            cout << arr[i][j] << " ";
        }
        cout << "\n";
    }
}

void invoerData() {
    int rij, kolom;
    string speler;

    if (!wieBegint) {
        speler = spelerRondje;
        wieBegint = true;
    } else {
        speler = spelerKruisje;
        wieBegint = false;
    }

    cout << speler << ", voer een rijnummer in (1-3): ";
    cin >> rij;
    while (rij < 1 || rij > 3) {
        cout << "Ongeldige invoer. Voer een rijnummer in (1-3): ";
        cin >> rij;
    }

    cout << speler << ", voer een kolomnummer in (1-3): ";
    cin >> kolom;
    while (kolom < 1 || kolom > 3) {
        cout << "Ongeldige invoer. Voer een kolomnummer in (1-3): ";
        cin >> kolom;
    }

    if (arr[rij - 1][kolom - 1] != '-') {
        cout << "Dit veld is al bezet. Kies een ander veld.\n";
        invoerData();
    } else {
        arr[rij - 1][kolom - 1] = (wieBegint ? 'O' : 'X');
        maxAantal++;
    }
}

void eindespel(char winnaar) {
    cout << "De winnaar is: " << winnaar << endl;
}

bool controleEindeSpel() {
    if (maxAantal >= 5) {
        string winnaar;

        if (maxAantal == 9) {
            cout << "Het spel eindigt in een gelijkspel.\n";
            return true;
        }

        winnaar = controleWinnaar('X');
        if (!winnaar.empty()) {
            eindespel('X');
            return true;
        }

        winnaar = controleWinnaar('O');
        if (!winnaar.empty()) {
            eindespel('O');
            return true;
        }
    }

    return false;
}

bool vraagOpnieuwSpelen() {
    char keuze;
    cout << "Willen jullie nog een keer spelen? (j/n): ";
    cin >> keuze;
    return (keuze == 'j' || keuze == 'J');
}

int main() {
    bool opnieuwSpelen = true;

    while (opnieuwSpelen) {
        verwerkSpelersnamen();
        startSpel();

        while (true) {
            toonSpeelveld();
            invoerData();

            if (controleEindeSpel())
                break;
        }

        opnieuwSpelen = vraagOpnieuwSpelen();
    }

    return 0;
}

