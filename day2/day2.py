# day 2 1st star yo

input = open('input.txt', 'r')
linesInput = input


def validPassWordFunction(lines):
    validPasswords = []

    for line in lines:
        policy = line.rstrip().split(' ')
        lowLim, highLim = map(int, policy[0].split('-'))
        letter = policy[1][0]

        password = policy[2]

        if lowLim <= password.count(letter) <= highLim:
            validPasswords.append(password)

    return len(validPasswords)


def validPassWordFunction2(lines):
    validPasswords = []

    for line in lines:
        policy = line.rstrip().split(' ')
        lowLim, highLim = map(int, policy[0].split('-'))
        letter = policy[1][0]

        password = policy[2]

        print("password", password)
        print("password at lower lim", password[lowLim-1])

        if password[lowLim-1] == letter and password[highLim-1] == letter:
            print("do not add both match")
        elif password[lowLim-1] == letter or password[highLim-1] == letter:
            validPasswords.append(password)

    return len(validPasswords)


print(validPassWordFunction2(linesInput))
test1 = ['1-3 a: abcde',
         '1-3 b: cdefg',
         '2-9 c: ccccccccc']
# print(validPassWordFunction(test1))
