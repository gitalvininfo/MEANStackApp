import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Issue from './models/Issue';
import Character from './models/character';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/issues', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});


//Route for displaying issues
router.route('/issues').get((req, res) => {
    Issue.find((err, issues) => {
        if (err)
            console.log(err);
        else
            res.json(issues);
    });
});

// Route for accessing the specific issue
router.route('/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    });
});

// Route for creating new issue
router.route('/issues/add').post((req, res) => {
    let issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added Successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create a new record');
        });
});

// Route for updating specific issue
router.route('/issues/update/:id').post((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if(!issue)
            return next(new Error('Could not load document'));
        else {
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;


            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

// Route for delete specific issue
router.route('/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json('Remove Successfully');

    });
});

// Route for displaying all characters
router.route('/characters').get((req, res) => {
    Character.find((err, characters) => {
        if (err)
            console.log(err);
        else
            res.json(characters);
    });
});

// Route for displaying specific character
router.route('/characters/:id').get((req, res) => {
    Character.findById(req.params.id, (err, character) => {
        if (err)
            console.log(err);
        else
            res.json(character);
    });
});

// Route for creating character
router.route('/characters/add').post((req, res) => {
    let character = new Character(req.body);
    character.save()
        .then(character => {
            res.status(200).json({'issue': 'Added Successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create a new record');
        });
});

// Route for updating specific character
router.route('/characters/update/:id').post((req, res) => {
    Character.findById(req.params.id, (err, character) => {
        if(!character)
            return next(new Error('Could not load document'));
        else {
            character.name = req.body.name;
            character.gender = req.body.gender;

            character.save().then(character => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

// Route for deleting specific character
router.route('/characters/delete/:id').get((req, res) => {
    Character.findByIdAndRemove({_id: req.params.id}, (err, character) => {
        if (err)
            console.log(err);
        else
            res.json('Remove Successfully');

    });
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));
