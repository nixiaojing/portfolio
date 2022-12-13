#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jun 16 08:46:12 2021

@author: xiaojingni
"""

# -*- coding: utf-8 -*-
"""
Created on Thu Mar  9 19:28:14 2017

@author: Ami
"""

##WordCloud.py
##Gates
## This program uses the file called
## TwitterResultsRaw.txt from
## TweepyJSONReader.py

from os import path
import matplotlib.pyplot as plt
##install wordcloud
from wordcloud import WordCloud, STOPWORDS

d = path.dirname(__file__)
Rawfilename="file_rawtweets_homebuying.txt"

#Rawfilename="RawWordsStock.txt"
#Freqfilename="BagOfWords.txt"
# Read the whole text.
text = open(path.join(d, Rawfilename)).read()
print(text)
## --OR --
##with open("constitution.txt") as f:
##    lines f.readlines()                                                                            
##text = "".join(lines) 
##---------
wordcloud = WordCloud().generate(text)
# Open a plot of the generated image.
plt.imshow(wordcloud)
plt.axis("off")
plt.show()
