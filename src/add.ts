/*
 * Implementation of sum a sequence of integer numbers.
 *
 * Copyright (C) 2021  Iván Ruvalcaba <ivanruvalcaba[at]disroot[dot]org>
 *
 * This program is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this program.  If not, see
 * <http://www.gnu.org/licenses/>.
 */

/**
 * Adds a given number list.
 * @param  {number[]} numberList A number list
 * @return {number}              Sum of number list
 */
export default (numberList: number[]): number => {
  if (numberList.length === 0) {
    return 0;
  }

  let sum = 0;

  numberList.forEach((number) => {
    sum = sum + number;
  });

  return sum;
}
