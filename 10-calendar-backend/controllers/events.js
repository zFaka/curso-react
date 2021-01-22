//{ok:true, 
//msg:'obtener eventos'}

const Event = require("../models/Event");



const getEvent = async(req, res) => {

        // 'user' is a ref for 
        // mern_calendar.user
        //.populate('user', 'name pass email')
        const events = await Event
                .find()
                .populate('user', 'name')

        res.json({
                ok: true, 
                events
        })
};



const createEvent = async(req, res) => {

        const event = new Event(req.body); 

        try {
                event.user = req.uid
                const eventSaved = await event.save();
                res.json({
                        ok: true, 
                        event:eventSaved
                })

        } catch (error) {
                console.log(error)
                res.status(500).json({
                        ok: false, 
                        msg:'Talk with the admin' 
                })
        }

};



const updateEvent = async(req, res) => {

        const eventId = req.params.id;
        const uid = req.uid;

        try {

                const event = await Event.findById(eventId);

                if (!event) {
                        return res.status(404).json({
                                ok: false, 
                                msg:'Doesnt exits an event with this id' 
                        })
                }

                if (event.user.toString() !== uid) {
                        return res.status(401).json({
                                ok: false, 
                                msg:'Doesnt has this privilege' 
                        })
                }

                const newEvent = {
                        ...req.body, 
                        user:uid
                };

                // return the last info that put
                const eventUpdated = await Event
                        .findByIdAndUpdate(
                                eventId,
                                newEvent,
                                {new:true});

                res.json({
                        ok:true, 
                        event:eventUpdated
                })

        } catch (error) {
                console.log(error)
                res.status(500).json({
                        ok: false, 
                        msg:'Talk with the admin' 
                })
        }
};



const deleteEvent = async(req, res) => {

        const eventId = req.params.id;
        const uid = req.uid;

        try {

                const event = await Event.findById(eventId);

                if (!event) {
                        return res.status(404).json({
                                ok: false, 
                                msg:'Doesnt exits an event with this id' 
                        })
                }

                if (event.user.toString() !== uid) {
                        return res.status(401).json({
                                ok: false, 
                                msg:'Doesnt has this privilege' 
                        })
                }

                await Event.findByIdAndRemove(
                        eventId);

                res.json({ok:true})

        } catch (error) {
                res.status(500).json({
                        ok: false, 
                        msg:'Talk with the admin' 
                })
        }
};



module.exports = {
        getEvent,
        createEvent, 
        updateEvent, 
        deleteEvent, 
}
