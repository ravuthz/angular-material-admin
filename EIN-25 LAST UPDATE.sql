
------------------------------------------------------------------------------------------------------------------

UPDATE td_quotation SET quota_dt_contract_start = '2016-12-21 00:00:00' WHERE quota_va_reference = 'CPMI-PNP-13-00056231';
UPDATE td_quotation SET quota_dt_first_payment = quota_dt_contract_start WHERE quota_va_reference = 'CPMI-PNP-13-00056231';

UPDATE td_contract SET cotra_dt_signature = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-PNP-13-00056231'),
cotra_dt_start = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-PNP-13-00056231'),
cotra_dt_initial_start = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-PNP-13-00056231')
WHERE cotra_va_reference = 'CPMI-PNP-13-00056231';

UPDATE td_contract SET
cotra_dt_end = (cotra_dt_initial_start + (INTERVAL '1 year' * termo_id) - INTERVAL '1 day')
WHERE cotra_va_reference = 'CPMI-PNP-13-00056231';

UPDATE td_cashflow SET
caflw_dt_issue = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56245),
caflw_dt_real_issue = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56245),
caflw_dt_installment = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 year'),
caflw_dt_real_installment = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56245),
caflw_dt_period_start = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 year'),
caflw_dt_period_end = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 day')
WHERE cotra_id = 56245;

SELECT cotra_dt_signature, cotra_dt_start, cotra_dt_initial_start, cotra_dt_end, cotra_id,
cotra_start_term_in_year, cotra_nu_fo_reference
FROM td_contract WHERE cotra_va_reference = 'CPMI-PNP-13-00056231';

SELECT caflw_dt_issue, caflw_dt_real_issue, caflw_dt_installment, caflw_dt_real_installment, caflw_dt_period_start, caflw_dt_period_end
FROM td_cashflow WHERE cotra_id = 56245;

------------------------------------------------------------------------------------------------------------------

UPDATE td_quotation SET quota_dt_contract_start = '2016-10-28 00:00:00' WHERE quota_va_reference = 'CPMI-PST-01-00056406';
UPDATE td_quotation SET quota_dt_first_payment = quota_dt_contract_start WHERE quota_va_reference = 'CPMI-PST-01-00056406';

UPDATE td_contract SET cotra_dt_signature = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-PST-01-00056406'),
cotra_dt_start = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-PST-01-00056406'),
cotra_dt_initial_start = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-PST-01-00056406')
WHERE cotra_va_reference = 'CPMI-PST-01-00056406';

UPDATE td_contract SET
cotra_dt_end = (cotra_dt_initial_start + (INTERVAL '1 year' * termo_id) - INTERVAL '1 day')
WHERE cotra_va_reference = 'CPMI-PST-01-00056406';

UPDATE td_cashflow SET
caflw_dt_issue = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56420),
caflw_dt_real_issue = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56420),
caflw_dt_installment = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 year'),
caflw_dt_real_installment = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56420),
caflw_dt_period_start = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 year'),
caflw_dt_period_end = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 day')
WHERE cotra_id = 56420;

SELECT cotra_dt_signature, cotra_dt_start, cotra_dt_initial_start, cotra_dt_end, cotra_id,
cotra_start_term_in_year, cotra_nu_fo_reference
FROM td_contract WHERE cotra_va_reference = 'CPMI-PST-01-00056406';

SELECT caflw_dt_issue, caflw_dt_real_issue, caflw_dt_installment, caflw_dt_real_installment, caflw_dt_period_start, caflw_dt_period_end
FROM td_cashflow WHERE cotra_id = 56420;

------------------------------------------------------------------------------------------------------------------

UPDATE td_quotation SET quota_dt_contract_start = '2016-09-21 00:00:00' WHERE quota_va_reference = 'CPMI-SRP-08-00056403';
UPDATE td_quotation SET quota_dt_first_payment = quota_dt_contract_start WHERE quota_va_reference = 'CPMI-SRP-08-00056403';

UPDATE td_contract SET cotra_dt_signature = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-SRP-08-00056403'),
cotra_dt_start = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-SRP-08-00056403'),
cotra_dt_initial_start = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-SRP-08-00056403')
WHERE cotra_va_reference = 'CPMI-SRP-08-00056403';

UPDATE td_contract SET
cotra_dt_end = (cotra_dt_initial_start + (INTERVAL '1 year' * termo_id) - INTERVAL '1 day')
WHERE cotra_va_reference = 'CPMI-SRP-08-00056403';

UPDATE td_cashflow SET
caflw_dt_issue = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56417),
caflw_dt_real_issue = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56417),
caflw_dt_installment = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 year'),
caflw_dt_real_installment = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56417),
caflw_dt_period_start = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 year'),
caflw_dt_period_end = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 day')
WHERE cotra_id = 56417;

SELECT cotra_dt_signature, cotra_dt_start, cotra_dt_initial_start, cotra_dt_end, cotra_id,
cotra_start_term_in_year, cotra_nu_fo_reference
FROM td_contract WHERE cotra_va_reference = 'CPMI-SRP-08-00056403';

SELECT caflw_dt_issue, caflw_dt_real_issue, caflw_dt_installment, caflw_dt_real_installment, caflw_dt_period_start, caflw_dt_period_end
FROM td_cashflow WHERE cotra_id = 56417;

------------------------------------------------------------------------------------------------------------------

UPDATE td_quotation SET quota_dt_contract_start = '2016-09-20 00:00:00' WHERE quota_va_reference = 'CPMI-STR-01-00056405';
UPDATE td_quotation SET quota_dt_first_payment = quota_dt_contract_start WHERE quota_va_reference = 'CPMI-STR-01-00056405';

UPDATE td_contract SET cotra_dt_signature = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-STR-01-00056405'),
cotra_dt_start = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-STR-01-00056405'),
cotra_dt_initial_start = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-STR-01-00056405')
WHERE cotra_va_reference = 'CPMI-STR-01-00056405';

UPDATE td_contract SET
cotra_dt_end = (cotra_dt_initial_start + (INTERVAL '1 year' * termo_id) - INTERVAL '1 day')
WHERE cotra_va_reference = 'CPMI-STR-01-00056405';

UPDATE td_cashflow SET
caflw_dt_issue = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56419),
caflw_dt_real_issue = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56419),
caflw_dt_installment = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 year'),
caflw_dt_real_installment = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56419),
caflw_dt_period_start = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 year'),
caflw_dt_period_end = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 day')
WHERE cotra_id = 56419;

SELECT cotra_dt_signature, cotra_dt_start, cotra_dt_initial_start, cotra_dt_end, cotra_id,
cotra_start_term_in_year, cotra_nu_fo_reference
FROM td_contract WHERE cotra_va_reference = 'CPMI-STR-01-00056405';

SELECT caflw_dt_issue, caflw_dt_real_issue, caflw_dt_installment, caflw_dt_real_installment, caflw_dt_period_start, caflw_dt_period_end
FROM td_cashflow WHERE cotra_id = 56419;

------------------------------------------------------------------------------------------------------------------

UPDATE td_quotation SET quota_dt_contract_start = '2017-02-25 00:00:00' WHERE quota_va_reference = 'CPMI-SVR-03-00056535';
UPDATE td_quotation SET quota_dt_first_payment = quota_dt_contract_start WHERE quota_va_reference = 'CPMI-SVR-03-00056535';

UPDATE td_contract SET cotra_dt_signature = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-SVR-03-00056535'),
cotra_dt_start = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-SVR-03-00056535'),
cotra_dt_initial_start = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-SVR-03-00056535')
WHERE cotra_va_reference = 'CPMI-SVR-03-00056535';

UPDATE td_contract SET
cotra_dt_end = (cotra_dt_initial_start + (INTERVAL '1 year' * termo_id) - INTERVAL '1 day')
WHERE cotra_va_reference = 'CPMI-SVR-03-00056535';

UPDATE td_cashflow SET
caflw_dt_issue = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56549),
caflw_dt_real_issue = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56549),
caflw_dt_installment = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 year'),
caflw_dt_real_installment = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56549),
caflw_dt_period_start = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 year'),
caflw_dt_period_end = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 day')
WHERE cotra_id = 56549;

SELECT cotra_dt_signature, cotra_dt_start, cotra_dt_initial_start, cotra_dt_end, cotra_id,
cotra_start_term_in_year, cotra_nu_fo_reference
FROM td_contract WHERE cotra_va_reference = 'CPMI-SVR-03-00056535';

SELECT caflw_dt_issue, caflw_dt_real_issue, caflw_dt_installment, caflw_dt_real_installment, caflw_dt_period_start, caflw_dt_period_end
FROM td_cashflow WHERE cotra_id = 56549;

------------------------------------------------------------------------------------------------------------------

UPDATE td_quotation SET quota_dt_contract_start = '2016-08-05 00:00:00' WHERE quota_va_reference = 'CPMI-SVR-04-00056532';
UPDATE td_quotation SET quota_dt_first_payment = quota_dt_contract_start WHERE quota_va_reference = 'CPMI-SVR-04-00056532';

UPDATE td_contract SET cotra_dt_signature = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-SVR-04-00056532'),
cotra_dt_start = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-SVR-04-00056532'),
cotra_dt_initial_start = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-SVR-04-00056532')
WHERE cotra_va_reference = 'CPMI-SVR-04-00056532';

UPDATE td_contract SET
cotra_dt_end = (cotra_dt_initial_start + (INTERVAL '1 year' * termo_id) - INTERVAL '1 day')
WHERE cotra_va_reference = 'CPMI-SVR-04-00056532';

UPDATE td_cashflow SET
caflw_dt_issue = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56546),
caflw_dt_real_issue = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56546),
caflw_dt_installment = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 year'),
caflw_dt_real_installment = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56546),
caflw_dt_period_start = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 year'),
caflw_dt_period_end = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 day')
WHERE cotra_id = 56546;

SELECT cotra_dt_signature, cotra_dt_start, cotra_dt_initial_start, cotra_dt_end, cotra_id,
cotra_start_term_in_year, cotra_nu_fo_reference
FROM td_contract WHERE cotra_va_reference = 'CPMI-SVR-04-00056532';

SELECT caflw_dt_issue, caflw_dt_real_issue, caflw_dt_installment, caflw_dt_real_installment, caflw_dt_period_start, caflw_dt_period_end
FROM td_cashflow WHERE cotra_id = 56546;

------------------------------------------------------------------------------------------------------------------

UPDATE td_quotation SET quota_dt_contract_start = '2016-02-09 00:00:00' WHERE quota_va_reference = 'CPMI-BTB-01-00056299';
UPDATE td_quotation SET quota_dt_first_payment = quota_dt_contract_start WHERE quota_va_reference = 'CPMI-BTB-01-00056299';

UPDATE td_contract SET cotra_dt_signature = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-BTB-01-00056299'),
cotra_dt_start = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-BTB-01-00056299'),
cotra_dt_initial_start = (select quota_dt_contract_start from td_quotation WHERE quota_va_reference = 'CPMI-BTB-01-00056299')
WHERE cotra_va_reference = 'CPMI-BTB-01-00056299';

UPDATE td_contract SET
cotra_dt_end = (cotra_dt_initial_start + (INTERVAL '1 year' * termo_id) - INTERVAL '1 day')
WHERE cotra_va_reference = 'CPMI-BTB-01-00056299';

UPDATE td_cashflow SET
caflw_dt_issue = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56313),
caflw_dt_real_issue = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56313),
caflw_dt_installment = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 year'),
caflw_dt_real_installment = (SELECT cotra_dt_start FROM td_contract WHERE cotra_id = 56313),
caflw_dt_period_start = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 year'),
caflw_dt_period_end = (caflw_dt_issue + (INTERVAL '1 year' * caflw_nu_num_installment) - INTERVAL '1 day')
WHERE cotra_id = 56313;

SELECT cotra_dt_signature, cotra_dt_start, cotra_dt_initial_start, cotra_dt_end, cotra_id,
cotra_start_term_in_year, cotra_nu_fo_reference
FROM td_contract WHERE cotra_va_reference = 'CPMI-BTB-01-00056299';

SELECT caflw_dt_issue, caflw_dt_real_issue, caflw_dt_installment, caflw_dt_real_installment, caflw_dt_period_start, caflw_dt_period_end
FROM td_cashflow WHERE cotra_id = 56313;

------------------------------------------------------------------------------------------------------------------
