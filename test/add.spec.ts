/*
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

import { Expect, Test, TestCase, TestFixture } from "alsatian";
import add from "../src/add"

@TestFixture("Add Test Fixture")
export class AddTestFixture {
  @TestCase([], 0)
  @TestCase([1], 1)
  @TestCase([1, 2], 3)
  @TestCase([1, 2, 3, 4, 5], 15)
  @TestCase([-1, -2, -3, -4, -5], -15)
  @Test("Confirm that should add correctly.")
  public shouldAddCorrectly(numberList: number[], expected: number) {
    Expect(add(numberList)).toBe(expected);
  }
}
