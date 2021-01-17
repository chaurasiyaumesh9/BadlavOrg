const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PetitionSchema = new Schema({
    title: {
        type: String
    },
    vote_count: {
        type: Number
    },
    body: {
        type: String
    },
    banner: {
        type: String
    },
    date_created: {
        type: Date    
    },
    petitioner_name: {
        type: String
    },
    petitioner_contact: {
        type: Number
    },
    petitioner_email: {
        type: String
    },
    date_modified: {
        type: Date    
    },
    active: {
       type: Boolean
    }
}, {
   collection: 'petitions'
})

PetitionSchema.pre('save', function(next) {
    
    this.active = true; 
    
    const currentDate = new Date();
    
    this.date_modified = currentDate;
       
    if (!this.date_created)
    {
        this.date_created = currentDate;
    }     
  
    next();

});
  
const Petition = mongoose.model('Petition', PetitionSchema, 'Petition');

module.exports = Petition;