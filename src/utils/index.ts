import { IMuscleData, Muscle } from '../component/metadata';

/*
 * Utility function for choosing backup value if first value is undefined
 */
export const ensure = <T>(value: T | undefined, backupValue: T): T => {
  return value == null ? backupValue : value;
};

/**
 * Function which determines color of muscle based on how often it has been exercised
 */
export const fillIntensityColor = (
  activityMap: Record<Muscle, IMuscleData>,
  highlightedColors: string[],
  muscle: Muscle
): string | undefined => {
  const frequency = activityMap[muscle]?.frequency;

  if (frequency == null || frequency === 0) {
    return undefined;
  }

  return highlightedColors[Math.min(highlightedColors.length - 1, frequency - 1)];
};
