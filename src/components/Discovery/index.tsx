'use client';
import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import styles from './index.module.css';

const Discovery: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const daysInMonth = endOfMonth.date();
  const startDayOfWeek = startOfMonth.day();

  // Generate an array of dates for the calendar
  const generateCalendarDates = () => {
    const calendarDates: (number | null)[] = [];
    for (let i = 0; i < startDayOfWeek; i++) {
      calendarDates.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDates.push(i);
    }
    return calendarDates;
  };

  const calendarDates = generateCalendarDates();

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <div className={styles.discoveryContent}>Discovery call</div>
        <div className={styles.companyName}>INOVIXPRO</div>
        <div className={styles.personalInfo}>
          <div className={styles.imageGroup}>
            <img className={styles.size} src="/Rijon.png" alt="Rijon" />
            <img className={styles.size} src="/1000x1000.jpg" alt="Shabbir" />
          </div>
          <div className={styles.name}>Rijon & Shabbir</div>
          <div className={styles.title}>Chief Executive Officers</div>
          <div className={styles.duration}>30 min</div>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.right}>
        <div className={styles.calendarContainer}>
          <div className={styles.header}>
            <h1 className={styles.titles}>Select a date</h1>
            <div className={styles.nav}>
              <span className={styles.arrow} onClick={() => setCurrentDate(currentDate.subtract(1, 'month'))}>{'<'}</span>
              <h2 className={styles.subTitle}>{currentDate.format('MMMM YYYY')}</h2>
              <span className={styles.arrow} onClick={() => setCurrentDate(currentDate.add(1, 'month'))}>{'>'}</span>
            </div>
          </div>
          <div className={styles.weekdays}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className={styles.calendarGrid}>
            {calendarDates.map((date, index) => (
              <span key={index} className={styles.day}>
                {date || ''}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discovery;
