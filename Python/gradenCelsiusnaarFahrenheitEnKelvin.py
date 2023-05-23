print('Omzetten van graden Celsius naar Fahrenheit, Kelvin en vice versa')
optie = input('Wat wil je doen? Voor C -> F, gebruik 1. Voor F -> C, gebruik 2. Voor C -> K, gebruik 3.')

if optie == '1':
    print('Omzetten C -> F')
    waarde = float(input('Geef de waarde in graden Celsius: '))
    resultaat = (waarde * 9/5) + 32
    print(f'{waarde} C = {resultaat:.2f} F')
elif optie == '2':
    print('Omzetten F -> C')
    waarde = float(input('Geef de waarde in graden Fahrenheit: '))
    resultaat = (waarde - 32) * 5/9
    print(f'{waarde} F = {resultaat:.2f} C')
elif optie == '3':
    print('Omzetten C -> K')
    waarde = float(input('Geef de waarde in graden Celsius: '))
    resultaat = waarde + 273.15
    print(f'{waarde} C = {resultaat} K')
else:
    print('Ik weet niet wat je wilt doen')
    quit()
    print('Einde')