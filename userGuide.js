function downloadGuide() {
const guideContent = `Software User Guide\n\n` +
`Step 1: Admin Account Opening\n - Admin Personal Details\n - Admin Login Details\n - Initial Organization Details\n\n` +
`Step 2: Organization Creation\n - Basic Information\n - Contacts\n - Location\n\n` +
`Step 3: Organization Settings\n - Departments\n - Job Titles\n - Job Grades\n - Employee Number Formats\n - Payroll Deductions\n - Payroll Benefits\n - Roles and Permissions\n\n` +
`Step 4: Employee Management\n - Add Employees\n - Manage Employee Contract\n - Set Employee Status\n\n` +
`Step 5: Leave Management\n - Create Leave Types\n - Track Applications\n - Use Reports & Analytics\n\n` +
`Step 6: Manage Salary Advance\n - Create Salary Advance Rules\n - Track Applications\n - Use Reports & Analytics\n\n` +
`Step 7: Payroll Management\n - Create Payroll Cycle\n - Approve Payroll\n - Send Payslips\n - Complete Payouts\n\n` +
`Step 8: Reports\n - People Management Reports\n - Payroll Processing Reports\n - Statutory Compliance Reports\n`;
            
const blob = new Blob([guideContent], { type: 'text/plain' });
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'Software_User_Guide.txt';
link.click();
}
