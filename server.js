'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let api = require('./api/index.js');

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
  	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
}); 

app.use(bodyParser.json());

app.get('/', (req,res) => {
	res.send('Hi');
});

//Topics
app.get('/v1/topic',api.topic.getTopics);
app.post('/v1/topic',api.topic.createTopic);
app.get('/v1/topic/:topicId',api.topic.getTopic);
app.put('/v1/topic/:topicId',api.topic.updateTopic);
app.delete('/v1/topic/:topicId',api.topic.removeTopic);

//Exercises
app.get('/v1/exercise',api.exercise.getExercises);
app.post('/v1/exercise',api.exercise.createExercise);
app.get('/v1/exercise/:exerciseId',api.exercise.getExercise);
app.put('/v1/exercise/:exerciseId',api.exercise.updateExercise);
app.delete('/v1/exercise/:exerciseId',api.exercise.removeExercise);

//Lessons
app.get('/v1/lesson',api.lesson.getLessons);
app.post('/v1/lesson',api.lesson.createLesson);
app.get('/v1/lesson/:lessonId',api.lesson.getLesson);
app.put('/v1/lesson/:lessonId',api.lesson.updateLesson);
app.delete('/v1/lesson/:lessonId',api.lesson.removeLesson);
app.put('/v1/lesson/:lessonId/topic/:topicId',api.lesson.addTopic);
app.delete('/v1/lesson/:lessonId/topic/:topicId',api.lesson.removeTopic);

//Courses 
app.post('/v1/course/template',api.course.createTemplate);
app.get('/v1/course/template',api.course.getTemplates);
app.get('/v1/course/template/:id',api.course.getTemplate);
app.put('/v1/course/template/:id',api.course.updateTemplate);
app.delete('/v1/course/template/:id',api.course.removeCourse);
app.get('/v1/course',api.course.getCourses);
app.post('/v1/course',api.course.createCourse);
app.get('/v1/course/:id',api.course.getCourse);
app.put('/v1/course/:id',api.course.updateCourse);
app.delete('/v1/course/:id',api.course.removeCourse);
app.put('/v1/course/:courseId/lesson/:lessonId',api.course.addLesson);
app.delete('/v1/course/:courseId/lesson/:lessonId',api.course.removeLesson);

//Announcements
app.post('/v1/announcement',api.announcement.createAnnouncement);
app.get('/v1/announcement',api.announcement.getAnnouncements);
app.get('/v1/announcement/:id',api.announcement.getAnnouncement);
app.put('/v1/announcement/:id',api.announcement.updateAnnouncement);
app.delete('/v1/announcement/:id',api.announcement.removeAnnouncement);

app.listen('3200');
console.log('App listening on port 3200');



