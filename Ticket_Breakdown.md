# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Feature: To use custom agent id to generate report.

### Task 1: Update Agents Table to include new customId field.

- **Description**:
  A new customId column should be added to agent table.

- **Acceptance Criteris**

  - Agents table should have a new nullable field of named customId.

- **Implementation**

  1.  Add a new nullable `customId` column in Agents table.
  2.  Add a way for Facilities to assign a customId to each agent they work with.

- **Estimation**: 4hrs
  1. Implementation: 3hrs
  2. Testing: 1hr

### Task 2: API to retrieve the shift using the Agent id.

- **Description**:
  Create a function `getShiftByAgentId` which will return all the Shifts worked by the given Agent. The function take `agentId` as parameter.

- **Acceptance Criteria**
  Given the `agentId` this function should return all the Shifts that the agent has worked on.

- **Implementation**:

1.  Add a method `getShiftByAgentId`, to retrive all Shifts information from Shifts table.

- **Estimation**: 6hrs

1.  Implementation: 4hrs
2.  Testing: 2hrs

## Task 3: API to generate report with `customId`

- **Description**
  create a method `generateReportByCustomId` which generates reports for the given agent.

- **Acceptance Criteria**
  Facility should be able to generate the report using customId.

- **Implementation**:

1.  For the given `customId` lookup the Agents table and retrive the `agentId`.
2.  Call the funtion `getShiftByAgentId` to retrieve all the Shifts.
3.  Call the function `generateReport` with the Shifts retrieve from `step 2`.

- **Estimation**: 10hrs

1. Implementation: 6hrs
2. Testing: 4hrs.
