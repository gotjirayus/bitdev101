import React from 'react';
import styles from './card.module.scss';
import { Button, ButtonProps } from '@bitdev101/frist-learnning.ui.button';

export type CardProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string

  /**
    * text for button
  */
  buttonText: string
} & ButtonProps;

export function Card({ 
  text, 
  buttonText="click here", 
  importance
 }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{text}</h2>
      <Button importance={importance} text={buttonText}/>
    </div>
  );
}
