# avi-scheduler
A basic react app meant for loading local html files created by Avimark® to render a table displaying all appointments and subsequent details in the web browser.

## How to Use
Open a file dialog by clicking the open file button. Select a .html file that has been created from the Avimark® schedule. When a file has been selected, click the load button load the parsed data onto the table.
**Update 2/3/21**: There is now only one button that allows for multiple file selection. Upon opening file(s), the schedule is automatically loaded without the need to click a second button.

![alt text](https://github.com/DuBrowski/avi-scheduler/blob/main/src/img/aviSchedHead.PNG?raw=true)

The patient name, appointment time, and appointment description are received from the file and placed in the columns as shown. The resulting table can be pasted into a Google Docs table while maintaining table cell partitioning.
Some columns exist only as a placeholder for a value to be given later (dr, rm).


## Author
Kyle DuBray
