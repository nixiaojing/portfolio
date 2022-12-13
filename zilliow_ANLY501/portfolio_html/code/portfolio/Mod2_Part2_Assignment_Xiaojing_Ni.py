#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Jun 19 19:34:45 2021

@author: xiaojingni
"""

#%% Part 1: Web Scraping
"""
1) Write Python code that asks a User to enter a stock ticker (symbol). For 
example, the User might enter AAPL for Apple Stock, or TWTR for Twitter Stock 
etc.
2) The program will directly scrape https://finance.yahoo.com/ and will return 
the current price of the stock entered by the User.
3) To do this, you will NOT use an API. You will scrape the site, use regular 
expressions and data cleaning as needed, and will return the current stock 
price. This will force you to read in very dirty data and get the value you 
want out of the data.
4) If you cannot access https://finance.yahoo.com/ you can use any other stock 
price site.
5) Your Python program will loop and will allow the User to continue to enter 
stock tickers and to get the current
stock price. The User will choose whether to end or continue.
6) Your program will print out the ticker that the User entered and the current 
price for each ticker that the User chooses until the User quits.
"""

### Define a function using beautifulsoup to find key words of the concerned session .
## e.g. To find the price, use session div, class = 'D(ib) Va(m) Maw(65%) Ov(h)'
## then find the session "span" to get the price. Same for finding the stock full name
 
def GetPrice(url): 
    from bs4 import BeautifulSoup
    import requests
    page = requests.get(url)      
    soup = BeautifulSoup(page.text, "html.parser") 
    ## find stock price session
    section_price = soup.findAll("div", {'class': 'D(ib) Va(m) Maw(65%) Ov(h)'})
    ## find stock full name session
    section_stock = soup.findAll("div", {'class': 'D(ib) Mt(-5px) Mend(20px) Maw(56%)--tab768 Maw(52%) Ov(h) smartphone_Maw(85%) smartphone_Mend(0px)'})
    if len(section_price) != 0:
        ## get stock price
        price = section_price[0].find('span').text
        ## get stock full name
        stock = section_stock[0].find('h1').text
    ## if stock if not found, assign empty to price and stock
    else: price,stock = [],[]
    return(price,stock)

### This function is a interactive session. First, ask user if he/she want to 
### continue the inquiry, and then using the function above to find stock price
### and full name, and then print them out. 
def PriceInquiry():        
    isquit = "continue"
    while isquit.lower() == "continue":
        isquit = input('If you want to stop stock price inquiry and go back to main inquiry, please enter "Quit". Otherwise, please enter "Continue".')
        if isquit.lower() == "continue":
            symbol = input("What is the stock ticker of the stock you want to get the price of? ")
            url="https://finance.yahoo.com/quote/"+symbol+"?p="+symbol
            price,stock = GetPrice(url)
            if price == []:
                print("\n", 'There is no stock with ticker of "',symbol,'". Please try another one.')
            else:
                print("\n","The current price of", stock,"is : ", price,"USD")
        elif isquit.lower() == "quit" :
            break
        ### if the user input other words besides "quit" and "continue", ask
        ### user to input again
        else: 
            print('\n','Wrong command.')
            isquit = "Continue"
            
#%% Part 2: Using an API.
"""
1) Write Python code and uses either urllib or requests (I prefer requests). 
I also recommend using JSON. Use the AirNow API as well as the correct URL and 
GET/POST.
2) Access the AirNow data for ANY zip code that the User chooses. 
So, your Python code will ask the User to enter a zip code and will then print 
AND write the results. The results will be written to Part2_OUTFILE.txt. 
For each zipcode the User chooses, you will again print the results 
(as a clean dataframe) AND will append the results to the Part2_OUTFILE.txt. 
You can test your code on the following zip codes: 20002, 90210, and 80302.
3) Clean up the data so that your program writes (and prints) the results to 
a file (OUTFILE.txt) and shows in the results the zipcode, the date, the 
state, the city, and the AQI results. It is recommended that you create a 
dataframe of the results. Results should be easy to read and to understand.
4) The User can enter as many zip codes as they wish and will choose to quit 
when they wish.
Remember – this Part if one function in a larger program. So, when the User quits entering zip code, your program does not end. Rather, it returns to Function 0 and asks the User which Part they want to run next or if they want to quit all together. You will need to really think about the “control” in this overall program.
"""

### this function use requests to get json file from AirNow. And then convert it
### to dataframe
def GetAQI(BaseURL, URLPost):
    #Uses request library
    import requests
    import pandas as pd
    
    response=requests.get(BaseURL, URLPost)
    jsontxt = response.json()
    df = pd.DataFrame(jsontxt)
    return(df)

### This function is a interactive session. First, ask user if he/she want to 
### continue the inquiry, and then ask user to input zip code and date. 
### Finaly, using the function above to get information of asking from AirNow.

def AQIInquiry():
    from datetime import datetime
    import pandas as pd
    pd.set_option("display.max_columns", 100)
    pd.set_option('display.expand_frame_repr', False)
    isquit = "continue"
    while isquit.lower() == "continue":
        isquit = input('If you want to stop AQI inquiry and go back to main inquiry, please enter "Quit". Otherwise, please enter "Continue".')
        if isquit.lower() == "continue":
            ### Ask user to input a zip code
            zipCode = input("What is the zip code you want to get the AQI of? ")
            ### Ask user to input a date
            date = input("Please input the date you want to get the AQI of, in YYYY-MM-DD format.")
            ### convert date format
            date1 = date + "T00-0000"
            BaseURL="http://www.airnowapi.org/aq/observation/zipCode/historical/"
            URLPost = {'API_KEY': '959454E6-8B63-4A9E-926B-69C192253D22',
                    'zipCode': zipCode, 
                    'date': date1,
                    'distance': '25',
                    'format': 'application/json'}
            ### if input error, ask user to input valid values
            try:
                df = GetAQI(BaseURL, URLPost)                
                if not df.empty:
                    df["zipCode"] = zipCode
                    ## arrange the dataframe 
                    cln_df = df[['zipCode', 'DateObserved', 'StateCode', 'ReportingArea',\
                                 'ParameterName','AQI']]
                    ## print dataframe information to sentences.
                    for index, row in cln_df.iterrows():
                        AQIType = cln_df.iloc[index]['ParameterName']
                        City=cln_df.iloc[index]['ReportingArea']
                        AQIValue=cln_df.iloc[index]['AQI']
                        format_date = datetime.strptime(date,'%Y-%m-%d').strftime('%b %d, %Y')
                        print("On",format_date,", for location", City, "with zip code of",\
                              zipCode, ", the AQI for", AQIType, "is ", AQIValue, ". \n")
                        
                        txt_file = open("Part2_OUTFILE.txt","a")
                        txt_file. writelines(\
                        "---------------------------------------------------------- \n"+
                        "On "+str(format_date)+", for location "+ str(City)+ " with zip code of "+\
                                  str(zipCode)+ ", the AQI for "+ str(AQIType)+ " is "+\
                                  str(AQIValue)+ ". The table below shows the results. \n")
                        ### write dataframe to text file
                        cln_df.to_string(txt_file,index=False)
                        txt_file. writelines(\
                        "\n ---------------------------------------------------------- \n")
                        txt_file.close()
                ## if df is empty, which means the data was not found. Ask user to 
                ## try another zip code or date.
                else:
                    print('\n','Please enter a valid zip code and a valid date.')
                    isquit = "Continue"
            except:
                print('\n','Please enter a valid zip code and a valid date.')
                isquit = "Continue"

        elif isquit.lower() == "quit" :
            break
        else: 
            print('\n','Wrong command.')
            isquit = "Continue" 

#%% Part 3: Mining Twitter
## This session used the code from Dr. Gates website.
            
#TwitterMining.py
## Using the Twitter API and Tweepy to 
## gather Twitter data and place tweets to file

## USAGE ##
## This program will ask for a "#something" such as #womensrights
## or #stockmarket. 
## It will then ask for the number of tweets you want to get
## It will OUTPUT a file called:
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
##-----------------------------------------------------------------
#Other Tweepy options - FYI
#for status in tweepy.Cursor(api.home_timeline).items(10):
#Process a single status
 #   print(status.text) 
#   
#def Gather(tweet):
 #   print(json.dumps(tweet))
#for friend in tweepy.Cursor(api.friends).items():
 #   Gather(friend._json)
#--------------------------------------------------------------

class Listener(StreamListener):
    print("In Listener...") 
    tweet_number=0
    #__init__ runs as soon as an instance of the class is created
    def __init__(self, max_tweets, hfilename, rawfile):
        self.max_tweets=max_tweets
        self.hfilename = hfilename
        self.rawfile = rawfile
        print(self.max_tweets)     
    #on_data() is a function of StreamListener as is on_error and on_status    
    def on_data(self, data):
        self.tweet_number+=1 
        print("In on_data", self.tweet_number)
        try:
            print("In on_data in try")
            with open(self.hfilename, 'a') as f:
                with open(self.rawfile, 'a') as g:
                    tweet=json.loads(data)
                    tweet_text=tweet["text"]
                    print(tweet_text,"\n")
                    f.write(tweet_text) # the text from the tweet
                    json.dump(tweet, g)  #write the raw tweet
        except BaseException:
            print("NOPE")
            pass
        if self.tweet_number>=self.max_tweets:
            ## instead of original code ask system exit, simple return allows
            ## user continue to use other functions of the program
            return False
    #method for on_error()
    def on_error(self, status):
        print("ERROR")
        if(status==420):
            print("Error ", status, "rate limited")
            return False
#TweepyJSONReader.py
##Reads JSON files of tweets that Tweepy collects
#Gates

##This program will read a .txt file
## that was created by TwitterMining.py
## Set the filename correctly

## This program will create two files:
## "TwitterResultsRaw.txt" which is all the words
## "TwitterWordFrq.txt" which is each word and its frequency

def textmining(hfilename):
    import json
    from nltk.tokenize import word_tokenize
    from nltk.tokenize import TweetTokenizer
    import re
    #https://docs.python.org/3/library/re.html
    
    hashcount=0
    wordcount=0
    BagOfWords=[]
    BagOfHashes=[]
    BagOfLinks=[]
    
    ### SET THE FILE NAME ###
    
    tweetsfile=hfilename
    
    ###################################
    
    with open(tweetsfile, 'r') as file:
        for line in file:
            #print(line,"\n")
            tweetSplitter = TweetTokenizer(strip_handles=True, reduce_len=True)
            WordList=tweetSplitter.tokenize(line)
            #WordList2=word_tokenize(line)
            #linecount=linecount+1
            #print(WordList)
            #print(len(WordList))
            #print(WordList[0])
            #print(WordList2)
            #print(len(WordList2))
            #print(WordList2[3:6])
            #print("NEXT..........\n")
            regex1=re.compile('^#.+')
            regex2=re.compile('[^\W\d]') #no numbers
            regex3=re.compile('^http*')
            regex4=re.compile('.+\..+')
            for item in WordList:
                if(len(item)>2):
                    if((re.match(regex1,item))):
                        #print(item)
                        newitem=item[1:] #remove the hash
                        BagOfHashes.append(newitem)
                        hashcount=hashcount+1
                    elif(re.match(regex2,item)):
                        if(re.match(regex3,item) or re.match(regex4,item)):
                            BagOfLinks.append(item)
                        else:
                            BagOfWords.append(item)
                            wordcount=wordcount+1
                    else:
                        pass
                else:
                    pass
                
        
            
           
    #print(linecount)            
    #print(BagOfWords)
    #print(BagOfHashes)
    #print(BagOfLinks)
    BigBag=BagOfWords+BagOfHashes
    
    
    
    
    #list of words I have seen
    seenit=[]
    #dict of word counts
    WordDict={}
    Rawfilename="TwitterResultsRaw.txt"
    Freqfilename="TwitterWordFrq.txt"
    
    
    #FILE=open(Freqfilename,"w")
    #FILE2=open(Rawfilename, "w")
    R_FILE=open(Rawfilename,"w")
    F_FILE=open(Freqfilename, "w")
    ## add "covid19" as I used #covd19 to run the program
    IgnoreThese=["and", "And", "AND","THIS", "This", "this", "for", "FOR", "For", 
                 "THE", "The", "the", "is", "IS", "Is", "or", "OR", "Or", "will", 
                 "Will", "WILL", "God", "god", "GOD", "Bible", "bible", "BIBLE",
                 "CanChew", "Download", "free", "FREE", "Free", "will", "WILL", 
                 "Will", "hits", "hit", "within", "steam", "Via", "via", "know", "Study",
                 "study", "unit", "Unit", "always", "take", "Take", "left", "Left",
                 "lot","robot", "Robot", "Lot", "last", "Last", "Wonder", "still", "Still",
                 "ferocious", "Need", "need", "food", "Food", "Flint", "MachineCredit",
                 "Webchat", "luxury", "full", "fifdh17", "New", "new", "Caroline",
                 "Tirana", "Shuayb", "repro", "attempted", "key", "Harrient", 
                 "Chavez", "Women", "women", "Mumsnet", "Ali", "Tubman", "girl","Girl",
                 "CSW61", "IWD2017", "Harriet", "Great", "great", "single", "Single", 
                 "tailoring", "ask", "Ask", "covid19","COVID19"]
    ###Look at the words
    for w in BigBag:
        if(w not in IgnoreThese):
            rawWord=w+" "
            R_FILE.write(rawWord)
            if(w in seenit):
                #print(w, seenit)
                WordDict[w]=WordDict[w]+1 #increment the times word is seen
            else:
                ##add word to dict and seenit
                seenit.append(w)
                WordDict[w]=1
        
    #print(WordDict)  
    #print(seenit)
    #print(BagOfWords)
    
    
    
    for key in WordDict:
        #print(WordDict[key])
        if(WordDict[key]>1):
            if(key not in IgnoreThese):
                #print(key)
                Key_Value=key + "," + str(WordDict[key]) + "\n"
                F_FILE.write(Key_Value)
    
    
    #FILE.close()
    #FILE2.close()
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
    
    Rawfilename="TwitterResultsRaw.txt"
    d = path.dirname(Rawfilename)
    
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
    
### This function is revised based this assignment. First, it asks user if he/she
### want to continue the inquiry and then ask the hashtag and max tweet the user
### want to get. After searching the tweets,runing textmining() and wordcloud()
### function defined above to get figure. NOTE: only when the whole program ended,
### the figure will show.
### After finishing twitter mining, the program ask user if he/she wants to continue
### mining or return to main inquiry.
def Twittermining():
    isquit = "continue"
    while isquit.lower() == "continue":
        isquit = input('If you want to stop twitter mining and go back to main inquiry, please enter "Quit". Otherwise, please enter "Continue".')
        if isquit.lower() == "continue":            
            hashname=input("Enter the hash name, such as #womensrights: ") 
            numtweets=eval(input("How many tweets do you want to get?: "))
            if(hashname[0]=="#"):
                nohashname=hashname[1:] #remove the hash
            else:
                nohashname=hashname
                hashname="#"+hashname
            
            #Create a file for any hash mine    
            hfilename="file_"+nohashname+".txt"
            rawfile="file_rawtweets_"+nohashname+".txt"
            twitter_stream = Stream(auth, Listener(numtweets, hfilename, rawfile))
            #twitter_stream.filter(track=['#womensrights'])
            ### added language filter, only tweets with english are shown
            twitter_stream.filter(track=[hashname],languages=["en"])
            textmining(hfilename)
            wordcloud()
        elif isquit.lower() == "quit" :
            break
        else: 
            print('\n','Wrong command.')
            isquit = "Continue"
    



#%% Main
            
### This function is an interactive session asking user what inquiry he/she wants
### to do. The user will have three options. 1. stock price inquiry, 2. AQI inquiry
### 3. twitter mining inquiry.
def GeneralInquiry():    
    isquit = "continue"
    while isquit.lower() == "continue":
        isquit = input('Welcome to main inquiry, you will have three options. If you want to stop this inquiry, please enter "Quit". Otherwise, please enter "Continue".')
        if isquit.lower() == "continue":
            option = input('What information you want to get today? Please enter "0" for stock price inquiry, "1" for air quality inquiry, and "2" for Twitter mining. ')
            if option == "0":
                PriceInquiry()
            elif option == "1":
                AQIInquiry()
            elif option == "2":
                Twittermining()

            else:
                print('\n','Wrong command.')
                
        elif isquit.lower() == "quit" :
            break
        else: 
            print('\n','Wrong command.')
            isquit = "Continue"

### run the program           
GeneralInquiry()



                    
    

    
