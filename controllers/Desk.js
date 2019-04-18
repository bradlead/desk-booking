const Desk = require('../models/Desk');

exports.post = (req, res) => {
    const desk = new Desk({ code: req.body.code, status: req.body.status });
    Desk.save((err, deskCreated) => {
        res.json(deskCreated);
    });
};

exports.list = (req, res) => {
    Desk.find({}, (err, desks) => {
        if (err) {
            res.json('Something went wrong');
        }
        res.json(desks);
   });
};

exports.get = (req, res) => {
    Desk.findById(req.params.deskId, (err, desk) => {
        if (err) {
            res.json('Something went wrong');
        }
        res.json(desks);
    });
};

exports.put = (req, res) => {
    Desk.findById(req.params.deskId, (err, desk) => {
      if (err) {
        res.json('Something went wrong');
      }
  
      desk.set({ code: req.body.code });
      desk.set({ status: req.body.status });
  
      desk.save((updateErr, deskUpdated) => {
        if (updateErr) {
          res.json('Could not update');
        }
  
        res.json(deskUpdated);
      });
    });
};
exports.deleteDesk = (req, res) => {
    Promise.resolve().then(() => {
        res.json('not implemented yet');
    });
    
Desk.findByIdAndRemove(req.params.deskId, deleteErr => {
        if (deleteErr) {
        res.json('Could not delete');
        }

        res.json('Deleted');
    });
};

