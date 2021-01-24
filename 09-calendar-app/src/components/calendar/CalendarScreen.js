import React, {useEffect, useState} from 'react';
import {Navbar} from '../ui/Navbar';
import {Calendar, momentLocalizer, } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css' ;
import {messages} from '../../helpers/calendar-messagges';
import {CalendarEvent} from './CalendarEvent';
import {CalendarModal} from './CalendarModal';
import {useDispatch, useSelector} from 'react-redux';
import {uiOpenModal} from '../../actions/ui';
import {eventClearActiveEvent, eventSetActive, eventStartLoading} from '../../actions/events';
import {AddNewFab} from '../ui/AddNewFab';
import {DeleteEventFab} from '../ui/DeleteEventFab';

moment.locale('en')

const localizer = momentLocalizer(moment)



export const CalendarScreen = () => {

  const dispatch = useDispatch();
  const {events, activeEvent} = useSelector(state => state.cal);
  const {modalOpen} = useSelector(state => state.ui);
  const {uid} = useSelector(state => state.auth);

  const [lastView, setLastView] = useState(localStorage.getItem('lastView')||'month');

  useEffect(() => {
  dispatch(eventStartLoading())}, 
  [dispatch])

  const onDoubleClick = () => {
    dispatch(uiOpenModal())};

  const onSelectEvent= (e) => {
    dispatch(eventSetActive(e))};

  const onViewChange = (e) => {
    setLastView(e)
    localStorage.setItem('lastView', e)};

  const onSelectSlot = () => {
    dispatch(eventClearActiveEvent())
  };


  const eventStyleGetter = (event, start, end, isSelected) => {

    //console.log(event)
    const style = {
      backgroundColor:(uid === event.user._id)?'#367cf7':'#465660', 
      borderRadius:'10px', 
      opacity:0.8, 
      display:'block', 
      color:'white'
    };

    return {
      style
    }
  };



  return (
    <div className='calendar-screen'>
      <Navbar/>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        onSelectSlot={onSelectSlot}
        selectable={true}
        view={lastView}
        components={{
          event:CalendarEvent}}
      />

      <CalendarModal/>

      <AddNewFab/>

      {
        (activeEvent && !modalOpen) && <DeleteEventFab/>
      }
    </div>
  )}
