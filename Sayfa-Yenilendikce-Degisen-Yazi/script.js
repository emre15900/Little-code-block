var random1 = Math.random() + ""
var randomProverbs = random1.charAt(5)

proverbs = new Array

proverbs[1] = "You can't judge a book by its cover"
proverbs[2] = "A leopard can't change its spots."
proverbs[3] = "Two wrongs don't make a right."
proverbs[4] = "The pen is mightier than the sword."
proverbs[5] = "When in Rome, do as the Romans."
proverbs[6] = "The squeaky wheel gets the grease."
proverbs[7] = "Fortune favors the bold."
proverbs[8] = "Hope for the best, but prepare for the worst."
proverbs[9] = "Better late than never."
proverbs[0] = "Birds of a feather flock together."

var proverb = proverbs[randomProverbs]
document.write(proverb);