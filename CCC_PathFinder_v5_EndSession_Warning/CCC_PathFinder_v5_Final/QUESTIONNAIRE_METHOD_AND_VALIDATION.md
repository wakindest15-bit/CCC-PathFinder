# CCC PathFinder Questionnaire: Method and Validation Record

## Current questionnaire specification

- Total items: 20
- Department allocation: 5 items each for DTE, DCI, DBA, and DAS
- Response scale: 5-point Likert scale (1 = Strongly Disagree, 2 = Disagree, 3 = Neutral, 4 = Agree, 5 = Strongly Agree)
- Item presentation: mixed order; the department label is not shown while answering
- Scoring implementation: `server/src/services/scoring.service.js`
- Frontend item wording: `client/src/constants/assessmentQuestions.js`
- Database item wording: `server/database/seed.sql`

## Scoring algorithm actually implemented

CCC PathFinder uses a **rule-based weighted Likert compatibility scoring algorithm**. It does not use machine learning, artificial intelligence, predictive modeling, or a trained statistical model.

For each answered item, the backend obtains the item's department weight from `question_department_weights`. It converts the response to an effective Likert value. For a normal item, effective value = response value. For a reverse-scored item, effective value = 6 − response value.

For each department:

`Raw Score = Σ (item weight × effective Likert value)`

`Maximum Score = Σ (item weight × 5)`

`Compatibility Percentage = (Raw Score ÷ Maximum Score) × 100`

The percentage is rounded to two decimal places. Departments are sorted from highest percentage to lowest. If percentages tie, department code is used as a deterministic alphabetical tie-breaker for display order; equal percentages receive the same competition rank (for example, 1, 1, 3, 4).

In the current seeded dataset, every item has one department association and weight 1.00. There are five items per department and no reverse-scored items. Therefore, for the current data, each department's percentage is equivalent to its five Likert responses' sum divided by 25, multiplied by 100. The general weighted/reverse-scored formula remains in the backend for configurable future items.

The result is a compatibility indicator based on the questionnaire responses, not proof of aptitude, a psychological diagnosis, an admission decision, or a guarantee of academic success. The recommendation is decision-support information and should be considered alongside official program requirements, student interests, and guidance from the College.

## Item inventory and construct mapping

The statements below are researcher-written in the current project source. The wording suggests the practical skill/interest area listed; this mapping is a descriptive design note, **not evidence that an established psychometric scale was used**.

| Item ID | Department | Intended area reflected in wording |
|---:|---|---|
| 1 | DTE | Explaining an idea in different ways |
| 2 | DTE | Patience and adapting support when someone is learning |
| 3 | DTE | Adapting communication to the audience |
| 4 | DTE | Giving constructive, progress-oriented feedback |
| 5 | DTE | Checking group understanding |
| 6 | DCI | Investigating why a system or process does not work |
| 7 | DCI | Decomposing complex tasks into smaller steps |
| 8 | DCI | Recognizing patterns and details |
| 9 | DCI | Testing changes systematically |
| 10 | DCI | Investigating unexpected results |
| 11 | DBA | Allocating limited resources effectively |
| 12 | DBA | Organizing tasks and meeting schedules |
| 13 | DBA | Making decisions with incomplete information |
| 14 | DBA | Planning, coordination, and anticipating risks |
| 15 | DBA | Comparing trade-offs before deciding |
| 16 | DAS | Observing differences in people's responses |
| 17 | DAS | Considering multiple perspectives |
| 18 | DAS | Curiosity about differences in human responses |
| 19 | DAS | Attending to factors influencing mood or behavior |
| 20 | DAS | Reflecting on causes of disagreements or misunderstandings |

## Source and validation disclosure

The current source code does not contain a traceable bibliography, published scale name, author attribution, DOI, or documented item-by-item source for these 20 statements. Accordingly, this project documentation does not claim that the statements were copied or adapted from a validated instrument. Until the research team supplies the actual references or development records, the defensible description is **researcher-developed questionnaire statements informed by the intended department-related skill areas**.

The project also does not itself establish that the questionnaire has been statistically validated. Any content-validation activity by subject-matter experts must be documented separately using the actual validators, their qualifications/roles, date, instrument, ratings, comments, and revisions. Do not describe IT/system testing as questionnaire content validation; these are different validation activities.

### Validation evidence to attach before final defense/submission

| Evidence | What the research team must provide |
|---|---|
| Item source record | Exact book, article, official curriculum/program document, framework, or documented researcher-developed rationale for each item; include page/section and URL/DOI where applicable |
| Expert content review | Actual signed evaluation forms, validator roles/qualifications, date, item-level ratings, written comments, and action taken |
| Revision log | Original wording, revised wording, reason for revision, and approval/validation status |
| System/technical validation | Actual IT expert evaluation forms, test scenarios, findings, signatures, and resolution status |
| Pilot/reliability evidence (if conducted) | Actual participant count, procedure, data, analysis method, results, and limitations; do not claim reliability coefficients unless calculated from collected data |

## Implementation consistency checks

When an item is changed, keep the English and Filipino wording aligned in `client/src/constants/assessmentQuestions.js` and `server/database/seed.sql`. Keep the numeric IDs aligned with the seeded database rows: DTE 1–5, DCI 6–10, DBA 11–15, DAS 16–20. Run the backend tests after modifying weights or scoring logic.
