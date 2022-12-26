# Custom code specifically for parsing Bram Stoker's Dracula
# Public Domain txt File acquired from gutenberg.org
# Page seperation added manually by going looking at the page split of the actual book
    # Thankfully, I only used a few pages so this was easy

f = open("dracula.txt", "r", encoding="utf-8")
outfile = open("dracula_lines.txt", "w", encoding="utf-8")

pages = f.read().split(":::")

pageNumber = 4


outfile.write("[\n{ \"Title\": \"Dracula\",\n\"ISBN\": \"9781530681037\",\n\"Content\":[\n")

for page in pages:
    page = page.split("\n")

    lineNumber = 0
    for line in page:
        # prevent bad text
        if (line != "﻿       " and line != " "):
            outfile.write("{\n")
            outfile.write("\t\"Page\": "+str(pageNumber)+",\n\t\"Line\": "+str(lineNumber + 1)+",\n\t\"Text\": \""+line.replace("       ","")+"\"")
            lineNumber += 1
            outfile.write("\n},\n")

    pageNumber += 1

outfile.write("]}]\n")

f.close()
outfile.close()