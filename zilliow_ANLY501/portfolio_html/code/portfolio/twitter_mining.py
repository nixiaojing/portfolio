#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Jun 19 19:34:45 2021

@author: xiaojingni
"""


# Mining Twitter


## This session used the code from Dr. Gates website.

# TwitterMining.py
## Using the Twitter API and Tweepy to
## gather Twitter data and place tweets to file

## USAGE ##
## This program will OUTPUT a file called:
## hfilename="file_"+nohashname+".txt"
## For example, if you input #womensrights, it will
## create a file called file_womensrights.txt
## where the tweets will be placed.
## From here you can call the next program called
## TweepyJSONReader.py


###Packages-----------------------

import tweepy
from tweepy import OAuthHandler
import json
from tweepy import Stream
from tweepy.streaming import StreamListener

###-----------------------------------------


## Create all the keys and secrets that you get
## from using the Twitter API-------------------------------------
consumer_key = '5tTC4P1ZN5ynSwQaBIQCf0W5W'
consumer_secret = 'qlEX0LW9x7aoqnp4UF6PPKuAPSyhOgApid4BRGBmub94YX8yRi'
access_token = '1412508061680517122-GhU7MeGmYfix3JqTexJ81kPofTnlbG'
access_secret = 'Gz4wPaIjxM0wxRo0wGU2Zl4RBdGyyHBJ9DsM7Mt8QGVlk'

auth = OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_secret)

api = tweepy.API(auth)

class Listener(StreamListener):
    print("In Listener...")
    tweet_number = 0

    # __init__ runs as soon as an instance of the class is created
    def __init__(self, max_tweets, hfilename, rawfile):
        self.max_tweets = max_tweets
        self.hfilename = hfilename
        self.rawfile = rawfile
        print(self.max_tweets)
        # on_data() is a function of StreamListener as is on_error and on_status

    def on_data(self, data):
        self.tweet_number += 1
        print("In on_data", self.tweet_number)
        try:
            print("In on_data in try")
            with open(self.hfilename, 'a') as f:
                with open(self.rawfile, 'a') as g:
                    tweet = json.loads(data)
                    tweet_text = tweet["text"]
                    print(tweet_text, "\n")
                    f.write(tweet_text)  # the text from the tweet
                    json.dump(tweet, g)  # write the raw tweet
        except BaseException:
            print("NOPE")
            pass
        if self.tweet_number >= self.max_tweets:
            ## instead of original code ask system exit, simple return allows
            ## user continue to use other functions of the program
            return False

    # method for on_error()
    def on_error(self, status):
        print("ERROR")
        if (status == 420):
            print("Error ", status, "rate limited")
            return False


# TweepyJSONReader.py
##Reads JSON files of tweets that Tweepy collects
# Gates

##This program will read a .txt file
## that was created by TwitterMining.py
## Set the filename correctly

## This program will create two files:
## "TwitterResultsRaw.txt" which is all the words
## "TwitterWordFrq.txt" which is each word and its frequency

def TweepyJSONRreader(hfilename):
    import json
    from nltk.tokenize import word_tokenize
    from nltk.tokenize import TweetTokenizer
    import re
    # https://docs.python.org/3/library/re.html

    hashcount = 0
    wordcount = 0
    BagOfWords = []
    BagOfHashes = []
    BagOfLinks = []

    ### SET THE FILE NAME ###

    tweetsfile = hfilename

    ###################################

    with open(tweetsfile, 'r') as file:
        for line in file:
            # print(line,"\n")
            tweetSplitter = TweetTokenizer(strip_handles=True, reduce_len=True)
            WordList = tweetSplitter.tokenize(line)
            # WordList2=word_tokenize(line)
            # linecount=linecount+1
            # print(WordList)
            # print(len(WordList))
            # print(WordList[0])
            # print(WordList2)
            # print(len(WordList2))
            # print(WordList2[3:6])
            # print("NEXT..........\n")
            regex1 = re.compile('^#.+')
            regex2 = re.compile('[^\W\d]')  # no numbers
            regex3 = re.compile('^http*')
            regex4 = re.compile('.+\..+')
            for item in WordList:
                if (len(item) > 2):
                    if ((re.match(regex1, item))):
                        # print(item)
                        newitem = item[1:]  # remove the hash
                        BagOfHashes.append(newitem)
                        hashcount = hashcount + 1
                    elif (re.match(regex2, item)):
                        if (re.match(regex3, item) or re.match(regex4, item)):
                            BagOfLinks.append(item)
                        else:
                            BagOfWords.append(item)
                            wordcount = wordcount + 1
                    else:
                        pass
                else:
                    pass

    # print(linecount)
    # print(BagOfWords)
    # print(BagOfHashes)
    # print(BagOfLinks)
    BigBag = BagOfWords + BagOfHashes

    # list of words I have seen
    seenit = []
    # dict of word counts
    WordDict = {}
    Rawfilename = "TwitterResultsRaw.txt"
    Freqfilename = "TwitterWordFrq.txt"

    # FILE=open(Freqfilename,"w")
    # FILE2=open(Rawfilename, "w")
    R_FILE = open(Rawfilename, "w")
    F_FILE = open(Freqfilename, "w")
    ## add "covid19" as I used #covd19 to run the program
    IgnoreThese = ["and", "And", "AND", "THIS", "This", "this", "for", "FOR", "For",
                   "THE", "The", "the", "is", "IS", "Is", "or", "OR", "Or", "will",
                   "Will", "WILL", "God", "god", "GOD", "Bible", "bible", "BIBLE",
                   "CanChew", "Download", "free", "FREE", "Free", "will", "WILL",
                   "Will", "hits", "hit", "within", "steam", "Via", "via", "know", "Study",
                   "study", "unit", "Unit", "always", "take", "Take", "left", "Left",
                   "lot", "robot", "Robot", "Lot", "last", "Last", "Wonder", "still", "Still",
                   "ferocious", "Need", "need", "food", "Food", "Flint", "MachineCredit",
                   "Webchat", "luxury", "full", "fifdh17", "New", "new", "Caroline",
                   "Tirana", "Shuayb", "repro", "attempted", "key", "Harrient",
                   "Chavez", "Women", "women", "Mumsnet", "Ali", "Tubman", "girl", "Girl",
                   "CSW61", "IWD2017", "Harriet", "Great", "great", "single", "Single",
                   "tailoring", "ask", "Ask", "covid19", "COVID19"]
    ###Look at the words
    for w in BigBag:
        if (w not in IgnoreThese):
            rawWord = w + " "
            R_FILE.write(rawWord)
            if (w in seenit):
                # print(w, seenit)
                WordDict[w] = WordDict[w] + 1  # increment the times word is seen
            else:
                ##add word to dict and seenit
                seenit.append(w)
                WordDict[w] = 1

    # print(WordDict)
    # print(seenit)
    # print(BagOfWords)

    for key in WordDict:
        # print(WordDict[key])
        if (WordDict[key] > 1):
            if (key not in IgnoreThese):
                # print(key)
                Key_Value = key + "," + str(WordDict[key]) + "\n"
                F_FILE.write(Key_Value)

    # FILE.close()
    # FILE2.close()
    R_FILE.close()
    F_FILE.close()


##WordCloud.py
##Gates
## This program uses the file called
## TwitterResultsRaw.txt from
## TweepyJSONReader.py

def wordcloud():
    from os import path
    import matplotlib.pyplot as plt
    ##install wordcloud
    from wordcloud import WordCloud

    Rawfilename = "TwitterResultsRaw.txt"
    d = path.dirname(Rawfilename)

    # Rawfilename="RawWordsStock.txt"
    # Freqfilename="BagOfWords.txt"
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


### This function is revised to add wordcloud figure and eliminate the input function.

hashname="homebuying"
numtweets = 100
nohashname=hashname
hashname="#"+hashname
## New york geocode https://developer.twitter.com/en/docs/twitter-api/v1/tweets/filter-realtime/guides/basic-stream-parameters
#location = [-74,40,-73,41]

#Create a file for any hash mine
hfilename="file_"+nohashname+".txt"
rawfile="file_rawtweets_"+nohashname+".txt"
twitter_stream = Stream(auth, Listener(numtweets, hfilename, rawfile))
#twitter_stream.filter(track=['#womensrights'])
twitter_stream.filter(track=[hashname,"#homeprices"], languages=["en"])
TweepyJSONRreader(hfilename)
wordcloud()
