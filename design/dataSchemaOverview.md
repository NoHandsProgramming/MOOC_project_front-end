# Data Storage Schema
For a more detailed view of how data will be stored in the database, please check [here](https://sqldbm.com/Project/MySQL/Edit/p14622).

## Basic Overview
The way the system will work is focused on two main components: *users*, and *skills*. Anyone who joins the site is recorded as a user, and is given a display name. On the other hand, all projects, threads, articles, and anything else will be categorized primarily by a set of skills that are the focus of that item.

Below is a brief visualization of the structure of the data. Each main list point represents a table, and any sub-lists describe related tables.

## Schema

* Users
	* Skills
* Skills
* Projects
	* Participants
	* Skills
	* Tags
* Forum Threads
	* Posts
		* votes
	* Skills
* Articles
	* Thread
* Groups
	* Users
* Courses
	* Skills
	* Sections