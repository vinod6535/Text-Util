#include <iostream>
#include <stack>
#include <string>

bool isBalanced(const std::string& exp) {
    std::stack<char> brackets;

    for (char c : exp) {
        if (c == '(' || c == '{' || c == '[') {
            brackets.push(c);
        } else if (c == ')' || c == '}' || c == ']') {
            if (brackets.empty()) {
                return false;
            } else if ((c == ')' && brackets.top() == '(') ||
                       (c == '}' && brackets.top() == '{') ||
                       (c == ']' && brackets.top() == '[')) {
                brackets.pop();
            } else {
                return false;
            }
        }
    }

    return brackets.empty();
}

int main() {
    std::string exp;
    std::cout << "Enter an expression: ";
    std::getline(std::cin, exp);

    if (isBalanced(exp)) {
        std::cout << "Balanced" << std::endl;
    } else {
        std::cout << "Not Balanced" << std::endl;
    }

    return 0;
}
