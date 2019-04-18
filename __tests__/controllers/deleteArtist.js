const mongoose = require('mongoose');
const path = require('path');
const httpMocks = require('node-mocks-http');
const events = require('events');
const { deleteArtist } = require('../../controllers/Artist');
const Artist = require('../../models/Artist');

require('dotenv').config({
    path: path.join(__dirname, '../../settings.env'),
});

describe('GET Artist endpoint', () => {
    beforeAll((done) => {
        mongoose.connect(process.env.TEST_DATABASE_CONN, done);
    });

    it ('Should create a new Artist record',(done) => {
        const artist = new Artist({ name: 'The Streets', genre: 'Garage' });
        artist.save((err, artistCreated) => {
            const artistId = artistCreated.id;
            const request = httpMocks.createRequest({
                method: 'deleteArtist',
                URL: '/Artist/42',
                params: {
                    artistId: artistCreated._id,
                },
            });
            const response = httpMocks.createResponse({
            eventEmitter: events.EventEmitter,
            });
            deleteArtist(request, response);
    
            response.on('end', () => {
                Artist.findById(artistCreated._id, (err, noSuchArtist) => {
                    expect(noSuchArtist).toBe(null);
                    done();
                });
            });
            

    });

    afterEach((done) => {
        Artist.collection.drop((e) => {
          if (e) {
            console.log(e);
          }
          done();
        });
      });
    
      afterAll(() => {
        mongoose.connection.close();
      });
    });
});