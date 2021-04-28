const Member = require('../models/member.js');

// Create and Save a new member
exports.create = (req, res) => {
    console.log("new member");

    // Validate request
    if(!req.body.name || !req.body.email || !req.body.birthDate || !req.body.address || !req.body.phoneNumber ) {
        return res.status(400).send({
            message: "Member content can not be empty"
        });
    }

    // Create a member
    const mem = new Member({
        name:req.body.name,
        email:req.body.email,
        birthDate:req.body.birthDate,
        address:req.body.address,
        phoneNumber:req.body.phoneNumber,
    });

    // Save member in the database
    mem.save()
    .then(data => {
        //res.send(data);
        res.status(200).redirect('/member');
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the new member."
        });
    });
};

// Retrieve and return all members from the database.
exports.findAll = (req, res) => {
    Members.find()
    .then(members => {
        res.send(200).send(members);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving new member."
        });
    });
};


/*THIS IS WHERE THE UPDATE STARTS 
// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "member content can not be empty"
        });
    }

    // Find note and update it with the request body
    Member.findByIdAndUpdate(req.params.memberId, {
        name:req.body.name,
        email:req.body.email,
        birthDate:req.body.birthDate,
        address:req.body.address,
        phoneNumber:req.body.phoneNumber,
    }, {new: true})
    .then(member => {
        if(!member) {
            return res.status(404).send({
                message: "member not found with id " + req.params.memberId
            });
        }
        res.send(member);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "member not found with id " + req.params.memberId
            });                
        }
        return res.status(500).send({
            message: "Error updating member with id " + req.params.memberId
        });
    });
};
THIS IS WHERE UPDATE ENDS */




// Delete a member with the specified Id in the request
/*THIS IS WHERE ORIGINAL STARTS 

exports.delete = (req, res) => {
    Member.findByIdAndRemove(req.params.memberId)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: `can not delete id=${id}` + req.params.noteId
            });
        } else {
            res.send({message: "Note deleted successfully!"});
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete member with id " + req.params.noteId
        });
    });
};

THIS IS WHERE IT ENDS */

exports.delete = (req, res) => {
    const id = req.params.id._id;

    Member.findByIdAndRemove(id)
    .then(data => {
        if(!data) {
            res.status(404).send({
                message: `can not delete id=${id}.`
            });
        } else {
            res.send({
                message: "Member was deleted successfully!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete member with id " + id
        });
    });
};

