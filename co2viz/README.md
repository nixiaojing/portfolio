# Visualizing Global CO_2 Emission Trends


### ANLY-503-01, Team 18
* Xiaojing Ni xn19@georgetown.edu
* Conrado Arroyo ca829@georgetown.edu
* Yu Tao yt560@georgetown.edu
* Aanchal Dusija akd73@georgetown.edu

## Executive summary

Greenhouse gases are gases in the earth's atmosphere that trap heat. They emitted by human activities strengthen the greenhouse effect, contributing to climate change (U.S.Environmental Protection Agency). Carbon dioxide (CO2) is the primary greenhouse gas emitted through human activities. Our group applied several exploratory data analysis and visualization techniques on data sets related to GDP, global tonnes of CO2 emissions (tCO2) / Greenhouse Gas emissions (GHG), forest coverage, and energy use, both globally and by country. 

In this project, we developed new insights about the relationships between CO2 emission trends and other topics such as forest cover, GDP, and energy use, as well as to better understand their behavior over time through the use of advanced data visualization techniques. 

## Repository structure

```.
├── README.md
├── code/
├── data/
├── img/
├── webstie/
```

## Description of files

#### Code Files

* The `code/` directory contains all code files of data processing and data visualization
	* `pie_chart_v1.Rmd` is the markdown file made by Aanchal, which contains the pie charts analysis on emissions by fuel for countries: USA, Brazil, Canada, China and Russia. 
	* `pie_chart_v2.Rmd` is the markdown file made by Xiaojing, which contains the final pie charts of emission by fuel type, revised from `pie_chart_v1.Rmd`. 
	* `choropleth_time_series.ipynb`, made by Xiaojing, contains the code to generate linked choropleth plot. 
	* `eda.qmd` was made by Xiaojing. It contains EDA of percent forest cover, emissions, and gdp for several countries over time.
	* `scatter_income_group.ipynb` was made by Yu. It contains the code to generate the linked GDP bubble plot / bar charts for GHG emissions and GHG emissions per capita for several countries over time, as well as some analysis on emissions vs. income group.
	* `forest_and_sector_plots.qmd` is the markdown file made by Conrado, which contains all of the code for the joint forest cover and emission time series plots, as well as the data table and the emission by the sector bar chart. None of the analyses for these plots was completed in the code file.
	*  `map_timeseries_viz_data_processing.qmd` is the data processing code for `pie_chart_v2.Rmd`.



#### Data Files

* The `data/` directory contains all data files used in this study and the code files.
	* `CO2-by-source.csv` contains data on CO2 emission by fuel source for different countries.
	* `ForestArea.csv` contains time series data on square kilometers of forest cover for different countries.
	* `ForestPct.csv` contains time series data on the percent of land covered by forest for different countries.
	* `Metadata_Indicator_API_AG.LND.FRST.K2_DS2_en_csv_v2_5362273.csv` contains metadata for energy use by country.
	* `annual-co2-emissions-per-country.csv` contains a cleaned time series data set on CO2 emissions by country.
	* `energy_use.csv` contains a cleaned time series data set on energy use by country (kilograms of oil equivalent).
	* `gdp-per-capita-worldbank.csv` contains time series data on GDP per capita by country.
	* `ghg-emissions-by-sector.csv` contains time series data on Greenhouse Gas emissions by country.
	* `map_timeseries.csv` contains a cleaned and merged time series data set that includes percent forest cover, GDP, emissions, energy use, and average emissions by country (average emissions are the average over each country's respective time period).
	* `per-capita-ghg-emissions.csv` contains time series data on GHG emissions per capita by country.
	* `population and demography.csv` contains time series data on general population statistics by country.
	* `world-banks-income-groups.csv` contains time series data on income classification by country.
	
#### Image 
* The `img/` directory contains the images used in the website

#### Website 
* The `website/` directory contains the webpage and its' dependencies as the final product of this project













