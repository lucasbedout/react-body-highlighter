import * as React from 'react';

import { ModelType, Muscle, IModelProps } from './metadata';
import { anteriorData, posteriorData } from '../assets';
import { ensure } from '../utils';
import { DEFAULT_BODY_COLOR, DEFAULT_HIGHLIGHTED_COLORS, DEFAULT_MODEL_TYPE, DEFAULT_MUSCLE_DATA } from '../constants';

/**
 * Component which displays a model of a body. Accepts many optional props for manipulating functionality or visuals of the component.
 *
 * @param data Array containing muscle objects
 * @param bodyColor Default color of body model (with no muscles selected)
 * @param highlightedColors Array containing colors to display depending on muscle pain/exercise level (index represents level - 1)
 * @param onClick Callback function when a muscle is clicked (returns back object with muscle-related data)
 * @param svgStyle Style object that gets passed to SVG element
 * @param style Style object that gets passed to SVG parent wrapper (div)
 * @param type Denotes type of model (default `anterior` view vs `posterior` view)
 *
 * @component
 * @example
 * const data = [{ name: 'Bench Press', muscles: ['chest-left', 'chest-right'] }]
 * return (
 *   <Model type="posterior" data={data} />
 * )
 */
export default React.memo(function Model({
  data,
  bodyColor = DEFAULT_BODY_COLOR,
  highlightedColors = DEFAULT_HIGHLIGHTED_COLORS,
  onClick,
  svgStyle,
  style,
  type = DEFAULT_MODEL_TYPE,
}: IModelProps) {
  // Initialize muscle data with 0 levels for each muscle
  const [muscleData, setMuscleData] = React.useState<Record<Muscle, { level: number }>>(data || DEFAULT_MUSCLE_DATA);

  // Function to handle clicking on muscles
  const handleClick = (muscle: Muscle, callback?: (stats: Record<Muscle, { level: number }>) => void) => {
    setMuscleData(prevState => {
      if (!prevState) prevState = DEFAULT_MUSCLE_DATA;
      const currentLevel = prevState[muscle].level || 0;
      const nextLevel = (currentLevel + 1) % 4; // Cycle through 0 (no level), 1, 2, 3

      const updatedData = {
        ...prevState,
        [muscle]: { level: nextLevel },
      };

      // Trigger the callback if provided
      callback && callback(updatedData);
      return updatedData;
    });
  };

  const modelData = type === ModelType.ANTERIOR ? anteriorData : posteriorData;

  return (
    <div style={style} className="rbh-wrapper">
      <svg
        className="rbh"
        width="100%"
        height="100%"
        viewBox="0 0 100 200"
        style={{
          ...svgStyle,
        }}
      >
        {modelData.map(exercise =>
          exercise.svgPoints.map((points, index) => {
            const muscle = exercise.muscle;
            const level = muscleData[muscle]?.level || 0;
            const currentColor = highlightedColors[level - 1] || bodyColor; // Choose the color based on current level

            // Determine the next level for hover effect
            const nextLevel = (level + 1) % 4;
            const hoverColor = highlightedColors[nextLevel - 1] || bodyColor; // Choose the color for hover state

            return (
              <polygon
                key={index}
                points={points}
                onClick={() => handleClick(muscle, onClick)}
                style={{
                  cursor: 'pointer',
                  fill: ensure(currentColor, bodyColor), // Apply current color based on muscle level
                  transition: 'fill 0.3s ease', // Smooth transition effect
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.fill = ensure(hoverColor, bodyColor); // Apply hover color
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.fill = ensure(currentColor, bodyColor); // Revert to original color
                }}
              />
            );
          })
        )}
      </svg>
    </div>
  );
});
