function Fibo(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return Fibo(n - 1) + Fibo(n - 2);
}
console.log(Fibo(4));

function Power(x, n) {
  if (n === 0) {
    return 1;
  }
  return Power(x, n - 1) * x;
}
console.log(Power(5, 2));

function reverse(str) {
  if (str.length === 1) {
    return str;
  }
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}
console.log(reverse("hello"));

function IsPalindrome(str) {
  const reversedWord = reverse(str);

  if (str === reversedWord) {
    console.log(`"${str}" est un palindrome.`);
  } else {
    console.log(`"${str}" n'est pas un palindrome.`);
  }
}

IsPalindrome("lune");

function Ticket(age) {
  if (age <= 12) {
    console.log("ticket is 10$");
  } else if (age > 12 && age < 18) {
    console.log("ticket is 15$");
  } else {
    console.log("ticket is 20$");
  }
}

Ticket(7);
Ticket(13);
Ticket(20);
Ticket(18);

function LeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}
LeapYear(2000);
LeapYear(2024);
LeapYear(2025);
