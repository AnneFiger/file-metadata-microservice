# File Metadata Microservice

This is the final project for the FCC Back End certification following requirements at https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice. 

Note: Strictly fulfilling the requirements above does not involve using a database or multer-gridfs-storage but given this was a very simple problem and I wanted to work with a slightly more realistic scenario I implemented the solution with these. For multer-gridfs-storage see documentation at https://www.npmjs.com/package/multer-gridfs-storage. 

For a real life implementation with CRUD operations we'd also look at using https://www.npmjs.com/package/gridfs-stream, method-override for delete requests, and crypto and path for file name implementation.

Boilerplate code for the basic node app as well as the UI was provided. Connection to the MongoDB database (hosted on Atlas) and POST request implementation with Multer and GridFsStorage is handled by code I've written. 

This project is hosted on https://file-metadata-microservice-pa1l.onrender.com. 
