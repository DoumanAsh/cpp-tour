"use strict"

import fs from 'fs'
import path from 'path'

import test from 'ava'

import get_lessons from '../webpack/get_lessons'

test('list lessons', async t => {
    const LESSON_DIR = path.normalize(path.join(__dirname, '..', 'lessons'))
    const dirs = fs.readdirSync(LESSON_DIR).filter((dir) => dir !== "default")

    const lessons = get_lessons()

    t.is(lessons.length, dirs.length)
})

