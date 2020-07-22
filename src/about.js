import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className='about-component'>
        <h1 className='aboout-title'>About Conways Game of Life</h1>

        <p className='about-content'>
          Rules to Conways Game of Life 1. Any live cell with fewer than two
          live neighbors dies, as if caused by under-population. 2. Any live
          cell with two or three live neighbors lives on to the next generation.
          3. Any live cell with more than three live neighbors dies, as if by
          over-population. 4. Any dead cell with exactly three live neighbors
          becomes a live cell, as if by reproduction.
        </p>

        <p className='about-content'>
          -Cellular Automata: Otherwise known as CA. Also called cellular
          spaces, tessellation automata, homoegeneous structures, cellular
          structures, tessellation structures, and iterative arrays. CA has
          found application in various areas, including physics, theoretical
          biology and microstructure modeling. A cellular automaton consists of
          a regular grid of cells. Each in one of a finite number of states,
          such as on and off. The grid can be in any finite number of
          dimensions. For each cell, a set of cells called its neighborhood is
          defined relative to the specified cell. An initial state is selected
          by assigning a state for each cell. A new generation is created
          according to some fixed rule. Usually a mathematical function. Which
          determines teh new state of each cell in terms of the current state of
          the cell and the states of the cells in its neightborhood. Source
          (https://en.wikipedia.org/wiki/Cellular_automaton)
        </p>

        <p className='about-content'>
          Turing Completeness: A system of data-manipulation rules such as a
          computer's instruction set, a programming language or a cellular
          automaton. Which means that this system is able to recognize or decide
          other data-manipulation rule set.
        </p>
      </div>
    );
  }
}
export default About;
