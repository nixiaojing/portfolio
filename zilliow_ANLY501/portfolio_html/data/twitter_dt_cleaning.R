## this session include the data processing of twitter data for decision tree
## analysis

library(rtweet)
library(twitteR)
library(ROAuth)
library(jsonlite)
library(tokenizers)
library(stopwords)
library(tm)
library(arules)


## read my API keys 
## users should have their own keys
filename="Twitter_API_keys.txt"
(tokens<-read.csv(filename, header=TRUE, sep=","))


(consumerKey=as.character(tokens$consumerKey))
consumerSecret=as.character(tokens$consumerSecret)
access_Token=as.character(tokens$access_Token)
access_Secret=as.character(tokens$access_Secret)


requestURL='https://api.twitter.com/oauth/request_token'
accessURL='https://api.twitter.com/oauth/access_token'
authURL='https://api.twitter.com/oauth/authorize'

setup_twitter_oauth(consumerKey,consumerSecret,access_Token,access_Secret)

token <- create_token(
  consumer_key = consumerKey,
  consumer_secret = consumerSecret,
  access_token = access_Token,
  access_secret = access_Secret)

## seach and eliminate retweets
Search1<-search_tweets("#homebuying -filter:retweets",n=5000, lang = "en", 
                       include_rts = FALSE, token=token)
Search_text <- Search1$text
head(Search_text)

########## Place Tweets in a new file, named homebuying ###################
FName = "homebuying_tweets.txt"
## Start the file
MyFile <- file(FName)
## Write Tweets to file
cat(unlist(Search_DF2), " ", file=MyFile, sep="\n")
close(MyFile)