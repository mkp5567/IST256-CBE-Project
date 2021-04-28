/**
 * Member controller - REST logic goes here
 */
const e = require("express");
const Member = require("../models/member");

/**
 * this method to create a member
 */
exports.create = (req, res) => {
    console.log("Create was called");

    /**
     * validation request
     */
    // Validate request
    if(!req.body.name || !req.body.email || !req.body.birthDate || !req.body.address || !req.body.phoneNumber ) {
        return res.status(400).send({
            message: "Member content can not be empty"
        });
    }

    /**
     * Create a member
     */
    const mem = new Member({
        name: req.body.name,
        email: req.body.email,
        birthDate: req.body.birthDate,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
    })

    /**
     * save program to database
     */
    mem.save().then((data) => {
        console.log("Response data: " + data);
        res.status(200).redirect('/member');
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the member",
        });
    });
};

/**
 * find all members
 */
exports.findAll = (req, res) => {
    Member.find().then((members) => {
        console.log("findAll called");
        res.status(200).send(members);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Error Occurred",
        });
    });
};

/**
 * delete
 */
exports.delete = (req, res) => {
    const id = req.params._id;
    console.log("ID to delete: " + id);

    Member.findByIdAndRemove(id)
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: `Cannot delete Member with id=${id}. Maybe Tutorial was not found!`
                });
            } else {
                res.send({
                    message: "Member was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Member with id=" + id
            });
        });
};