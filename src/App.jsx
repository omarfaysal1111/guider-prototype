import { useState, useEffect, useRef, useCallback } from "react";
import {
  Home, Users, Plus, MessageSquare, Settings, Dumbbell, Apple,
  TrendingUp, Bell, BellOff, Search, Filter, Flame, Camera, Clock, Edit3,
  Trash2, GripVertical, Check, Send, ChevronLeft, ChevronRight,
  CheckCircle2, AlertTriangle, X, User, LogOut, Lock, FileText,
  HelpCircle, Mail, CreditCard, Upload, Star, Award, Target, Activity,
  Copy, Eye, EyeOff, ChevronDown, ChevronUp, Bookmark, Zap, Layers,
  Archive, MoreVertical, RefreshCw, UserPlus, Circle, BarChart2,
  Calendar, ArrowUpDown, UserX, UserCheck, Hash,
  Play, Repeat, Video, Image, Minus, RotateCcw, Save, Clipboard,
  Shield, Globe, Smartphone, Moon, Sun, Monitor, Phone, Key, Download, ToggleLeft, ToggleRight, Wifi,
  Droplets, Goal, Scale, Leaf, Trophy
} from "lucide-react";

// ─── Language Store ───
let _lang = "English";
const AR_DICT = {
  'Home': 'الرئيسية',
  'Trainees': 'المتدربون',
  'Create': 'إنشاء',
  'Chat': 'المحادثة',
  'More': 'المزيد',
  'Today': 'اليوم',
  'Workout': 'تمرين',
  'Nutrition': 'تغذية',
  'Progress': 'التقدم',
  'Settings': 'الإعدادات',
  'Profile': 'الملف الشخصي',
  'Back': 'رجوع',
  'Done': 'تم',
  'Close': 'إغلاق',
  'Back to Home': 'العودة للرئيسية',
  'Back to Sign In': 'العودة لتسجيل الدخول',
  'Save': 'حفظ',
  'Cancel': 'إلغاء',
  'Confirm': 'تأكيد',
  'Delete': 'حذف',
  'Edit': 'تعديل',
  'Add': 'إضافة',
  'Remove': 'إزالة',
  'Send': 'إرسال',
  'Search': 'بحث',
  'Continue': 'متابعة',
  'Submit': 'إرسال',
  'Update': 'تحديث',
  'Upload': 'رفع',
  'Download': 'تنزيل',
  'Share': 'مشاركة',
  'Connect': 'اتصال',
  'Allow': 'سماح',
  'Deny': 'رفض',
  'Change': 'تغيير',
  'Resume': 'استمرار',
  'Skip': 'تخطي',
  'Undo': 'تراجع',
  'Clear': 'مسح',
  'Preview': 'معاينة',
  'View all': 'عرض الكل',
  'Show Less': 'عرض أقل',
  'Show More': 'عرض المزيد',
  'Save Changes': 'حفظ التغييرات',
  'Update Password': 'تحديث كلمة المرور',
  'Log Out': 'تسجيل الخروج',
  'Sign Out': 'تسجيل الخروج',
  'Get Started': 'ابدأ الآن',
  'Next': 'التالي',
  'Skip Rest': 'تخطي الراحة',
  'Start from Scratch': 'البدء من الصفر',
  'Build Workout': 'بناء تمرين',
  'Active': 'نشط',
  'Pending': 'قيد الانتظار',
  'Inactive': 'غير نشط',
  'Completed': 'مكتمل',
  'Skipped': 'تم التخطي',
  'SKIPPED': 'تم التخطي',
  'Not logged': 'لم يُسجَّل',
  'Rest day': 'يوم راحة',
  'All': 'الكل',
  'Attention': 'يحتاج انتباهاً',
  'Draft': 'مسودة',
  'Logged': 'مسجّل',
  'Good morning': 'صباح الخير',
  'Good afternoon': 'مساء الخير',
  'Good evening': 'مساء النور',
  'Your Personal Coaching Platform': 'منصتك الشخصية للتدريب',
  'Welcome to guider.': 'مرحباً في Guider.',
  'Welcome Back': 'مرحباً بعودتك',
  'Train smarter. Together.': 'تدرّب بذكاء. معاً.',
  'Welcome back, Coach': 'مرحباً بعودتك، مدرب',
  'Welcome back, Trainee': 'مرحباً بعودتك، متدرب',
  "Welcome! Let's Get Started": 'مرحباً! لنبدأ',
  'Reset your password': 'إعادة تعيين كلمة المرور',
  'Join guider.': 'انضم إلى Guider.',
  "I'm a Coach": 'أنا مدرب',
  "I'm a Trainee": 'أنا متدرب',
  'Manage clients, create plans & track progress': 'أدر العملاء وابنِ الخطط وتتبع التقدم',
  'Follow plans, log workouts & hit your goals': 'اتبع الخطط وسجّل تمارينك وحقق أهدافك',
  'Check your email': 'تحقق من بريدك الإلكتروني',
  'Email': 'البريد الإلكتروني',
  'Password': 'كلمة المرور',
  'Email Address': 'عنوان البريد الإلكتروني',
  'Current Password': 'كلمة المرور الحالية',
  'New Password': 'كلمة المرور الجديدة',
  'Confirm New Password': 'تأكيد كلمة المرور الجديدة',
  'Password Strength': 'قوة كلمة المرور',
  'Passwords do not match': 'كلمات المرور غير متطابقة',
  'Sign In': 'تسجيل الدخول',
  'Sign Up': 'إنشاء حساب',
  'Create Account': 'إنشاء حساب',
  'Forgot Password?': 'نسيت كلمة المرور؟',
  'Demo Mode': 'وضع التجربة',
  'First Name ': 'الاسم الأول',
  'Gym / Studio Name ': 'النادي / الاستوديو',
  "Don't have an account? ": 'ليس لديك حساب؟ ',
  'Already have an account? ': 'لديك حساب بالفعل؟ ',
  'Terms & Conditions': 'الشروط والأحكام',
  'Privacy Policy': 'سياسة الخصوصية',
  'Manage your coaching practice': 'أدر ممارستك التدريبية',
  'Build personalized workout & nutrition plans': 'ابنِ خطط تمرين وتغذية مخصصة',
  "Monitor your clients' adherence & results": 'راقب التزام عملائك ونتائجهم',
  "You're ready to start coaching": 'أنت مستعد لبدء التدريب',
  'Your fitness journey starts here': 'رحلتك اللياقية تبدأ هنا',
  'Receive personalized workouts & meals': 'تلقَّ تمارين ووجبات مخصصة',
  'Log workouts, meals & weight': 'سجّل تمارينك ووجباتك ووزنك',
  "Let's transform your fitness": 'لنحوّل لياقتك',
  'Create Plans': 'إنشاء الخطط',
  'Track Progress': 'تتبع التقدم',
  'Get a Plan': 'احصل على خطة',
  'All Set!': 'جاهز!',
  "Today's Overview": 'نظرة عامة على اليوم',
  'Active Trainees': 'المتدربون النشطون',
  'Sessions Today': 'جلسات اليوم',
  'Avg Workout Adherence': 'متوسط التزام التمرين',
  'Avg Nutrition Adherence': 'متوسط التزام التغذية',
  'Needs Attention': 'يحتاج انتباهاً',
  "Today's Sessions": 'جلسات اليوم',
  'Top Performers': 'أفضل المتدربين',
  'Recent Activity': 'النشاط الأخير',
  'Pending Invitations': 'الدعوات المعلقة',
  'View Profile': 'عرض الملف',
  'No activity yet': 'لا نشاط بعد',
  'No pending invitations': 'لا توجد دعوات معلقة',
  'Add New Trainee': 'إضافة متدرب جديد',
  'Invite Trainee': 'دعوة متدرب',
  'Send Invite': 'إرسال الدعوة',
  'Archive Trainee': 'أرشفة المتدرب',
  'Reactivate Trainee': 'إعادة تفعيل المتدرب',
  'Delete Trainee Permanently': 'حذف المتدرب نهائياً',
  'All Trainees': 'جميع المتدربين',
  'Select Trainee': 'اختر متدرباً',
  'Trainee Info': 'معلومات المتدرب',
  'Adherence': 'الالتزام',
  'Weight': 'الوزن',
  'Day Streak': 'أيام متتالية',
  'Overview': 'نظرة عامة',
  'Plans': 'الخطط',
  'Details': 'التفاصيل',
  'Workout Progress': 'تقدم التمرين',
  'Nutrition Progress': 'تقدم التغذية',
  'Goals': 'الأهداف',
  'Milestones': 'الإنجازات',
  'Achievements': 'الإنجازات',
  'Coach Notes': 'ملاحظات المدرب',
  'Trainee Feedback': 'ملاحظات المتدرب',
  'Body Measurements': 'قياسات الجسم',
  'Measurements': 'القياسات',
  'Progress Photos': 'صور التقدم',
  'InBody Reports': 'تقارير InBody',
  'Weight Trend': 'منحنى الوزن',
  'This Week': 'هذا الأسبوع',
  'View Health & Training History': 'عرض السجل الصحي والتدريبي',
  'Coach Notes & Tips': 'ملاحظات المدرب ونصائحه',
  'Workout Plans': 'خطط التمرين',
  'Nutrition Plans': 'خطط التغذية',
  'Breakfast': 'الإفطار',
  'Lunch': 'الغداء',
  'Dinner': 'العشاء',
  'Snack': 'وجبة خفيفة',
  'Meals': 'الوجبات',
  'Calories': 'السعرات الحرارية',
  'Protein': 'البروتين',
  'Carbs': 'الكربوهيدرات',
  'Fat': 'الدهون',
  'Water': 'الماء',
  'Macros': 'المغذيات الكبرى',
  'Target': 'الهدف',
  'Remaining': 'المتبقي',
  'Eaten': 'مستهلك',
  'Log Meal': 'تسجيل الوجبة',
  'Add Food': 'إضافة طعام',
  'All meals logged!': 'تم تسجيل جميع الوجبات!',
  'No meals planned yet': 'لا وجبات مخططة بعد',
  "Today's Nutrition": 'تغذية اليوم',
  'Nutrition Complete!': 'اكتملت التغذية!',
  'Nutrition Plan Builder': 'منشئ خطة التغذية',
  'Daily Calorie Target': 'هدف السعرات اليومي',
  'Water Intake': 'استهلاك الماء',
  'Water (L)': 'الماء (لتر)',
  'Workouts': 'التمارين',
  'Exercises': 'التمارين',
  'All Exercises': 'جميع التمارين',
  'Sets': 'المجموعات',
  'Reps': 'التكرارات',
  'Rest': 'الراحة',
  'Rest Period': 'فترة الراحة',
  'Duration': 'المدة',
  'Minutes': 'دقائق',
  'Start Workout': 'بدء التمرين',
  'Log Workout': 'تسجيل التمرين',
  'Finish Workout': 'إنهاء التمرين',
  'Rest Day': 'يوم راحة',
  'No workout today': 'لا تمرين اليوم',
  'New Workout Plan': 'خطة تمرين جديدة',
  'New Nutrition Plan': 'خطة تغذية جديدة',
  'Workout Plan': 'خطة تمرين',
  'Nutrition Plan': 'خطة تغذية',
  'Save Plan': 'حفظ الخطة',
  'Add Exercise': 'إضافة تمرين',
  'Add Set': 'إضافة مجموعة',
  'Workout complete!': 'اكتمل التمرين!',
  'Great work!': 'عمل رائع!',
  'Workout Complete!': 'اكتمل التمرين!',
  'Workout Summary': 'ملخص التمرين',
  'Workout Builder': 'منشئ التمرين',
  "Today's Workout": 'تمرين اليوم',
  'No exercises found': 'لا تمارين موجودة',
  'My Drafts': 'مسوداتي',
  'No draft workouts yet': 'لا مسودات تمارين بعد',
  'No draft nutrition plans yet': 'لا مسودات خطط غذائية بعد',
  'Weight Log': 'سجل الوزن',
  'Log Weight': 'تسجيل الوزن',
  'Weight Loss': 'خسارة الوزن',
  'Weight Goal Progress': 'تقدم هدف الوزن',
  'Messages': 'الرسائل',
  'Mark all read': 'تحديد الكل كمقروء',
  'Quick Replies': 'ردود سريعة',
  'No messages yet': 'لا رسائل بعد',
  'Start your conversation!': 'ابدأ محادثتك!',
  'Notifications': 'الإشعارات',
  'Do Not Disturb': 'عدم الإزعاج',
  'Language': 'اللغة',
  'Theme': 'المظهر',
  'Units': 'الوحدات',
  'Security': 'الأمان',
  'App Preferences': 'تفضيلات التطبيق',
  'Help': 'المساعدة',
  'Subscription': 'الاشتراك',
  'Credentials': 'الشهادات',
  'Account Information': 'معلومات الحساب',
  'Profile, email, password': 'الملف الشخصي، البريد، كلمة المرور',
  'Push, email, Do Not Disturb': 'الإشعارات، البريد، عدم الإزعاج',
  'Theme, units, language': 'المظهر، الوحدات، اللغة',
  'Subscription & Billing': 'الاشتراك والفواتير',
  'Pro Plan · Renews Mar 15': 'الخطة المميزة · تتجدد 15 مارس',
  'Security & Privacy': 'الأمان والخصوصية',
  '2FA, devices, data': 'المصادقة الثنائية، الأجهزة، البيانات',
  'Change Password': 'تغيير كلمة المرور',
  'Privacy Settings': 'إعدادات الخصوصية',
  'Contact Support': 'التواصل مع الدعم',
  'Rate the App': 'تقييم التطبيق',
  'Delete Account': 'حذف الحساب',
  'Two-Factor Authentication': 'المصادقة الثنائية',
  "Today's Plan": 'خطة اليوم',
  'My Coach': 'مدربي',
  'Weekly Goals': 'الأهداف الأسبوعية',
  'My Badges': 'شاراتي',
  'Weight Chart': 'مخطط الوزن',
  'Reminders': 'التذكيرات',
  'Add Reminder': 'إضافة تذكير',
  'No reminders': 'لا تذكيرات',
  'Meals Logged': 'وجبات مسجلة',
  'What would you like to create?': 'ماذا تريد أن تنشئ؟',
  'Monday': 'الاثنين',
  'Tuesday': 'الثلاثاء',
  'Wednesday': 'الأربعاء',
  'Thursday': 'الخميس',
  'Friday': 'الجمعة',
  'Saturday': 'السبت',
  'Sunday': 'الأحد',
  "Trainee's reason": 'سبب المتدرب',
  "TRAINEE'S REASON": 'سبب المتدرب',
  'Upgrade to Premium': 'الترقية إلى Premium',
  'Plan Name': 'اسم الخطة',
  'Difficulty Level': 'مستوى الصعوبة',
  'Certifications': 'الشهادات',
  'Championships & Awards': 'البطولات والجوائز',
  'Help & Support': 'المساعدة والدعم',
  'Profile Completion': 'اكتمال الملف الشخصي',
  'Caution': 'تحذير',
  'Instruction': 'تعليمات',
  'No food items yet.': 'لا عناصر غذائية بعد.',
  'Start logging your meals to track your nutrition!': 'ابدأ بتسجيل وجباتك لتتبع تغذيتك!',
  'Upgrade to Pro': 'الترقية إلى Pro',
  'My Progress': 'تقدمي',
  '6/6 exercises · 30 min ago': '6/6 تمارين · منذ 30 دقيقة',
  'Fatima Z. logged all meals': 'سجّلت Fatima Z. جميع الوجبات',
  'Breakfast + Lunch + Snack · 1 hr ago': 'الإفطار + الغداء + وجبة خفيفة · منذ ساعة',
  'Sarah M. hit a new PR': 'حققت Sarah M. رقماً شخصياً جديداً',
  'Squat 65kg → 70kg · 2 hrs ago': 'قرفصاء 65كجم ← 70كجم · منذ ساعتين',
  'Ahmed K. skipped nutrition log': 'تخطّى Ahmed K. تسجيل التغذية',
  'No meals logged today · 4 hrs ago': 'لا وجبات مسجّلة اليوم · منذ 4 ساعات',
  'Karim S. sent you a message': 'أرسل Karim S. رسالة',
  '"Coach, about tomorrow\'s plan..." · 5 hrs ago': '"مدرب، بخصوص خطة الغد..." · منذ 5 ساعات',
  'Dana M. invitation sent': 'تم إرسال دعوة Dana M.',
  'Pending acceptance · Just now': 'في انتظار القبول · الآن',
  'Missed 2+ workouts this week': 'فاته أكثر من تمرينين هذا الأسبوع',
  'Nutrition adherence dropped to': 'انخفض التزام التغذية إلى',
  'No login for 5+ days': 'لم يسجّل دخول منذ 5+ أيام',
  'Weight plateau for 3+ weeks': 'ثبات الوزن منذ 3+ أسابيع',
  'Alerts': 'التنبيهات',
  'Avg Adherence': 'متوسط الالتزام',
  'Client limit reached': 'تم الوصول لحد العملاء',
  '7-day workout streak': '7 أيام تمرين متتالية',
  'Complete 20 workouts': 'أكمل 20 تمريناً',
  'Log meals for 14 days': 'سجّل الوجبات لـ 14 يوماً',
  'Upload 5 progress photos': 'ارفع 5 صور تقدم',
  'Reach target weight': 'الوصول للوزن المستهدف',
  '100% adherence for 1 week': 'التزام 100% لأسبوع كامل',
  'Leg Day at 4:00 PM': 'يوم الأرجل في 4:00 مساءً',
  'Take creatine with lunch': 'تناول الكرياتين مع الغداء',
  'Rest day tomorrow — active recovery': 'يوم راحة غداً — تعافٍ نشط',
  'Lose 3 kg by end of March': 'خسارة 3 كجم بنهاية مارس',
  'Hit 150g protein daily': 'تحقيق 150 جرام بروتين يومياً',
  'Complete 5 workouts per week': 'إكمال 5 تمارين أسبوعياً',
  'Drink 2.5L water daily': 'شرب 2.5 لتر ماء يومياً',
  'Workout reminder': 'تذكير بالتمرين',
  'Weekly check-in due': 'موعد التسجيل الأسبوعي',
  'New achievement unlocked!': 'تم فتح إنجاز جديد!',
  'Log your weight and measurements for this week': 'سجّل وزنك وقياساتك لهذا الأسبوع',
  'Coach Mike sent a message': 'أرسل المدرب Mike رسالة',
  'Fat Burn — Monday starts in 1 hour': 'حرق الدهون — الاثنين يبدأ خلال ساعة',
  'Set by Coach Mike': 'حدَّده المدرب Mike',
  'Coach Goals': 'أهداف المدرب',
  'Monthly Goal': 'الهدف الشهري',
  'Reach 72 kg': 'الوصول لـ 72 كجم',
  'Started: 76.2 kg': 'البداية: 76.2 كجم',
  'Bkfast': 'الإفطار',
  'Medium': 'متوسط',
  'None': 'لا شيء',
  'Snoozed': 'مؤجَّل',
  'New Reminder': 'تذكير جديد',
  'Name *': 'الاسم *',
  'Date *': 'التاريخ *',
  'Hour *': 'الساعة *',
  'Icon (optional)': 'أيقونة (اختياري)',
  'Tap to upload photo': 'اضغط لرفع صورة',
  'JPG, PNG up to 10 MB': 'JPG، PNG حتى 10 ميجابايت',
  'Sunday, Feb 15': 'الأحد، 15 فبراير',
  'session': 'جلسة',
  'sessions': 'جلسات',
  'today': 'اليوم',
  'need attention': 'يحتاجون انتباهاً',
  'Upgrade': 'ترقية',
  '{tr("slots used on free plan")}': 'فتحات مستخدمة في الخطة المجانية',
  '-day streak': ' أيام متتالية',
  'No streak yet': 'لا تسلسل بعد',
  'Less': 'أقل',
  'Invited': 'دُعي',
  'Adjust Plan': 'تعديل الخطة',
  'Remind': 'تذكير',
  'Waist': 'الخصر',
  'Arms': 'الذراعان',
  'on fire!': 'نار!',
  'Invite First Trainee': 'دعوة أول متدرب',
  'Upgrade to Invite': 'ترقية للدعوة',
  'Upgrade to Add More Clients': 'ترقية لإضافة المزيد',

  'Reminder added': 'تم إضافة التذكير',
  'Name, date and hour are required': 'الاسم والتاريخ والساعة مطلوبة',
  'Badge unlocked': 'تم فتح شارة',
  'Fat Burn — Monday starts in 1 hour': 'حرق الدهون — الاثنين يبدأ خلال ساعة',
  "Great progress this week! Let's adjust your...": 'تقدم رائع هذا الأسبوع! دعنا نعدّل...',

  'Weight loss': 'خسارة وزن',
  'Muscle gain': 'بناء عضلات',
  'Toning': 'نحت الجسم',
  'Endurance': 'تحمل',
  'Flexibility': 'مرونة',
  'Maintenance': 'صيانة',
  'Fat burn': 'حرق دهون',
  'Strength': 'قوة',
  'Not set': 'غير محدد',
  'Beginner': 'مبتدئ',
  'Intermediate': 'متوسط',
  'Advanced': 'متقدم',
  'slots used on free plan': 'فتحات مستخدمة في الخطة المجانية',
  'Overdue': 'متأخر',
  'Tomorrow': 'غداً',
  'Paused due to travel': 'متوقف بسبب السفر',
  'Traveling often': 'يسافر كثيراً',
  'Knee injury — avoid deep squats': 'إصابة في الركبة — تجنب القرفصاء العميقة',

  '2 hours ago': 'منذ ساعتين',
  '1 day ago': 'منذ يوم',
  '3 days ago': 'منذ 3 أيام',
  '5 days ago': 'منذ 5 أيام',
  '30 days ago': 'منذ 30 يوماً',
  '30 min ago': 'منذ 30 دقيقة',
  '4 hours ago': 'منذ 4 ساعات',
  'Just now': 'الآن',
  'Today, 4:00 PM': 'اليوم، 4:00 مساءً',
  'Today, 6:00 PM': 'اليوم، 6:00 مساءً',
  'Today, 9:00 AM': 'اليوم، 9:00 صباحاً',
  'Tomorrow, 10:00 AM': 'غداً، 10:00 صباحاً',
  'Tomorrow, 7:00 AM': 'غداً، 7:00 صباحاً',
  'Wed, 5:00 PM': 'الأربعاء، 5:00 مساءً',
  '4:00 PM': '4:00 مساءً',
  '6:00 PM': '6:00 مساءً',
  '9:00 AM': '9:00 صباحاً',

  '"Coach, about tomorrow\'s plan..." · 5 hrs ago': '"مدرب، بخصوص خطة الغد..." · منذ 5 ساعات',
  "Lina R. completed today's workout": 'أنهت Lina R. تمرين اليوم',

  'Feb 1, 2026': '1 فبراير 2026',
  'Jan 15, 2026': '15 يناير 2026',
  'Jan 20, 2026': '20 يناير 2026',
  'Feb 12, 2026': '12 فبراير 2026',
  'Dec 10, 2025': '10 ديسمبر 2025',
  'Jan 5, 2026': '5 يناير 2026',
  'Nov 1, 2025': '1 نوفمبر 2025',
  'Oct 15, 2025': '15 أكتوبر 2025',
  'Feb 14, 2026': '14 فبراير 2026',
  'Dec 20, 2025': '20 ديسمبر 2025',
  'Yesterday': 'الأمس',
  'Feb 8': '8 فبراير',
  'Feb 10': '10 فبراير',
  'Feb 5': '5 فبراير',

  "You've earned the 'Consistency King' badge": "حصلت على شارة 'ملك الثبات'",
  'W1': 'أ1',
  'W2': 'أ2',
  'W3': 'أ3',
  'W4': 'أ4',
  'W5': 'أ5',
  'W6': 'أ6',
  'Now': 'الآن',
  '6-day streak!': '6 أيام متتالية!',
  '1 more day to earn the Streak Master badge': 'يوم آخر فقط للحصول على شارة سيد التتالي',
  'Fat Burn — Monday': 'حرق الدهون — الاثنين',
  '4 of 6 exercises done': '4 من 6 تمارين مكتملة',
  'View All →': 'عرض الكل ←',
  'Reminder snoozed': 'تم تأجيل التذكير',
  '74.5 kg → 72 kg': '74.5 كجم ← 72 كجم',
  'Upload Progress Photo': 'رفع صورة تقدم',
  'Progress photo saved!': 'تم حفظ صورة التقدم!',
  '1h': 'منذ ساعة',
  '2h': 'منذ ساعتين',
  '3h': 'منذ 3 ساعات',

  '12:30 PM': '12:30 ظهراً',
  '30m': 'منذ 30 دقيقة',
  'Earned': 'مكتسبة',
  'Locked': 'مقفلة',
  'gold': 'ذهبي',
  'silver': 'فضي',

  '6 exercises': '6 تمارين',
  '~45 min': '~45 دقيقة',
  '~320 cal': '~320 سعرة',
  'protein': 'بروتين',
  'carbs': 'كربوهيدرات',
  'fat': 'دهون',
  'Snooze': 'تأجيل',
  'Take Photo': 'التقاط صورة',
  'Gallery': 'المعرض',
  'Upload & Save': 'رفع وحفظ',
  'logged': 'مسجّل',
  '10 min ago': 'منذ 10 دقائق',



  'Streak Master': 'سيد التتالي',
  'Iron Will': 'إرادة حديدية',
  'Clean Eater': 'أكل صحي',
  'Progress Tracker': 'متتبع التقدم',
  'Goal Crusher': 'محقق الأهداف',
  'Perfect Week': 'أسبوع مثالي',
  'Badges Unlocked': 'شارات مفتوحة',

  'Light': 'فاتح',
  'Dark': 'داكن',
  'Metric': 'متري',
  'Imperial': 'إمبراطوري',
  'kg / km / °C': 'كجم / كم / °م',
  'lbs / mi / °F': 'رطل / ميل / °ف',
  'Language changed to English': 'تم التغيير إلى الإنجليزية',
  'Language changed to Arabic': 'تم التغيير إلى العربية',

  'Certified PT with 8+ years experience in strength & conditioning. Specialized in body transformations and competition prep.': 'مدرب معتمد بخبرة 8+ سنوات في القوة والتكييف البدني. متخصص في تحولات الجسم والتحضير للبطولات.',
  'NASM Certified Personal Trainer': 'مدرب شخصي معتمد NASM',
  'CrossFit Level 2 Trainer': 'مدرب CrossFit المستوى الثاني',
  'Precision Nutrition Level 1': 'تغذية دقيقة المستوى الأول',
  'Regional Bodybuilding 1st Place': 'المركز الأول في كمال الأجسام الإقليمي',
  'National Fitness Challenge Winner': 'الفائز ببطولة اللياقة الوطنية',
  'Client lost 30kg in 6 months': 'عميل خسر 30 كجم في 6 أشهر',
  'Client gained 12kg muscle in 8 months': 'عميل اكتسب 12 كجم عضلات في 8 أشهر',
  'Post-pregnancy body transformation': 'تحول جسدي ما بعد الحمل',
  'Proven Transformations': 'تحولات مثبتة',
  'Before:': 'قبل:',
  'After:': 'بعد:',
  'Before/After Photo': 'صورة قبل/بعد',

  'Gender': 'الجنس',
  'Male': 'ذكر',
  'Female': 'أنثى',
  'Prefer not to say': 'أفضل عدم الإفصاح',

  'optional': 'اختياري',

  'Gender *': 'الجنس *',

  'Other': 'آخر',

};
const tr = (text) => _lang === "Arabic" ? (AR_DICT[text] || text) : text;

// ─── Theme System ───
const lightTheme = {
  primary: "#34D399", primaryDark: "#0A3D22", primaryLight: "rgba(52,211,153,0.08)", primaryGhost: "rgba(52,211,153,0.08)",
  success: "#10B981", successLight: "#D1FAE5",
  warning: "#F59E0B", warningLight: "#FEF3C7",
  error: "#EF4444", errorLight: "#FEE2E2",
  textPrimary: "#0F172A", textSecondary: "#64748B", textMuted: "#94A3B8",
  surface: "#F1F5F9", background: "#F8FAFC", border: "#E2E8F0", card: "#FFFFFF",
};

const darkTheme = {
  primary: "#34D399", primaryDark: "#0A3D22", primaryLight: "rgba(52,211,153,0.08)", primaryGhost: "rgba(52,211,153,0.08)",
  success: "#10B981", successLight: "rgba(16,185,129,0.15)",
  warning: "#F59E0B", warningLight: "rgba(245,158,11,0.15)",
  error: "#EF4444", errorLight: "rgba(239,68,68,0.15)",
  textPrimary: "#F8FAFC", textSecondary: "#CBD5E1", textMuted: "#64748B",
  surface: "#1A1A25", background: "#0A0A0F", border: "#2A2A35", card: "#1A1A25",
};

// ─── Design Tokens ───
let colors = {
  primary: "#34D399", primaryDark: "#0A3D22", primaryLight: "rgba(52,211,153,0.08)", primaryGhost: "rgba(52,211,153,0.08)",
  success: "#10B981", successLight: "#D1FAE5",
  warning: "#F59E0B", warningLight: "#FEF3C7",
  error: "#EF4444", errorLight: "#FEE2E2",
  textPrimary: "#0F172A", textSecondary: "#64748B", textMuted: "#94A3B8",
  surface: "#F1F5F9", background: "#F8FAFC", border: "#E2E8F0", card: "#FFFFFF",
};

const gradients = {
  workout: "linear-gradient(135deg, #34D399, #2BC48A)",
  nutrition: "linear-gradient(135deg, #059669, #10B981)",
  streak: "linear-gradient(135deg, #F97316, #EF4444)",
  onboarding: "linear-gradient(160deg, #1E1B4B, #34D399)",
};

// ─── Toast Component ───
function Toast({ message, type = "success", onDismiss }) {
  useEffect(() => { const t = setTimeout(onDismiss, 3000); return () => clearTimeout(t); }, [onDismiss]);
  const bg = type === "success" ? colors.success : type === "error" ? colors.error : colors.warning;
  return (
    <div style={{ position: "absolute", bottom: 90, left: "50%", transform: "translateX(-50%)", background: bg, color: "#fff", padding: "12px 24px", borderRadius: 12, display: "flex", alignItems: "center", gap: 8, zIndex: 999, boxShadow: "0 8px 32px rgba(0,0,0,0.18)", animation: "slideUp 0.3s ease", fontSize: 14, fontWeight: 600 }}>
      {type === "success" ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
      {message}
    </div>
  );
}

// ─── Confirmation Dialog ───
function ConfirmDialog({ title, message, onConfirm, onCancel }) {
  return (
    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 998, padding: 20 }}>
      <div style={{ background: "#fff", borderRadius: 16, padding: 24, width: "100%", maxWidth: 390, animation: "fadeScale 0.25s ease" }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary, marginBottom: 8 }}>{title}</h3>
        <p style={{ fontSize: 14, color: colors.textSecondary, lineHeight: 1.5, marginBottom: 24 }}>{message}</p>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={onCancel} style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 14, fontWeight: 600, color: colors.textSecondary, cursor: "pointer" }}>{tr("Cancel")}</button>
          <button onClick={onConfirm} style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: "none", background: colors.primary, color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 14px rgba(52,211,153,0.25)" }}>{tr("Confirm")}</button>
        </div>
      </div>
    </div>
  );
}

// ─── Bottom Sheet ───
function BottomSheet({ title, children, onClose }) {
  return (
    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "flex-end", zIndex: 997 }}>
      <div style={{ background: "#fff", borderRadius: "24px 24px 0 0", width: "100%", maxHeight: "85vh", overflow: "auto", padding: "12px 20px 32px", animation: "slideUp 0.3s ease" }}>
        <div style={{ width: 40, height: 4, background: colors.border, borderRadius: 2, margin: "0 auto 16px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>{title}</h3>
          <button onClick={onClose} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><X size={18} color={colors.textSecondary} /></button>
        </div>
        {children}
      </div>
    </div>
  );
}

// ─── Progress Bar ───
function ProgressBar({ value, max, color = colors.primary, height = 8 }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div style={{ background: colors.surface, borderRadius: height / 2, height, width: "100%", overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: height / 2, transition: "width 0.5s ease" }} />
    </div>
  );
}

// ─── Stat Card ───
function StatCard({ value, label, color = colors.primary }) {
  return (
    <div style={{ flex: 1, background: colors.card, borderRadius: 14, padding: "14px 8px", textAlign: "center", border: `1px solid ${colors.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
      <div style={{ fontSize: 22, fontWeight: 800, color, letterSpacing: -0.5 }}>{value}</div>
      <div style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, marginTop: 2, letterSpacing: 0.2, textTransform: "uppercase" }}>{label}</div>
    </div>
  );
}

// ─── Splash Screen Component ───
function SplashScreen({ onComplete }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExpanded(true), 200);
    const completeTimer = setTimeout(onComplete, 2800);
    return () => { clearTimeout(timer); clearTimeout(completeTimer); };
  }, [onComplete]);

  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0A0A0F, #1A1A25)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999 }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 64, fontWeight: 900, letterSpacing: -2, transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)", transform: expanded ? "scale(1)" : "scale(0.5)", opacity: expanded ? 1 : 0 }}>
          {expanded ? <span style={{ color: "#fff" }}>guider<span style={{ color: "#34D399" }}>.</span></span> : <span style={{ color: "#fff" }}>g<span style={{ color: "#34D399" }}>.</span></span>}
        </div>
        <div style={{ fontSize: 14, color: colors.textMuted, marginTop: 16, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>
          Your Personal Coaching Platform
        </div>
      </div>
    </div>
  );
}

// ─── Onboarding Overlay Component ───
function OnboardingOverlay({ role, onComplete }) {
  const [step, setStep] = useState(0);

  const coachSteps = [
    { title: tr("Welcome to guider."), subtitle: tr("Manage your coaching practice"), icon: Users },
    { title: tr("Create Plans"), subtitle: tr("Build personalized workout & nutrition plans"), icon: Plus },
    { title: tr("Track Progress"), subtitle: tr("Monitor your clients' adherence & results"), icon: TrendingUp },
    { title: tr("All Set!"), subtitle: tr("You're ready to start coaching"), icon: Check },
  ];

  const traineeSteps = [
    { title: tr("Welcome to guider."), subtitle: tr("Your fitness journey starts here"), icon: Home },
    { title: tr("Get a Plan"), subtitle: tr("Receive personalized workouts & meals"), icon: Dumbbell },
    { title: tr("Track Progress"), subtitle: tr("Log workouts, meals & weight"), icon: TrendingUp },
    { title: tr("All Set!"), subtitle: tr("Let's transform your fitness"), icon: Check },
  ];

  const steps = role === "coach" ? coachSteps : traineeSteps;
  const currentStep = steps[step];
  const IconComponent = currentStep.icon;

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 998, padding: 20 }}>
      <div style={{ background: colors.card, borderRadius: 24, padding: 32, maxWidth: 400, textAlign: "center", animation: "fadeScale 0.4s ease" }}>
        <div style={{ width: 64, height: 64, borderRadius: 16, background: `${colors.primary}15`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
          <IconComponent size={32} color={colors.primary} />
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: colors.textPrimary, marginBottom: 8 }}>{currentStep.title}</h2>
        <p style={{ fontSize: 14, color: colors.textSecondary, marginBottom: 24, lineHeight: 1.6 }}>{currentStep.subtitle}</p>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {steps.map((_, i) => (
            <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= step ? colors.primary : colors.surface, transition: "all 0.3s" }} />
          ))}
        </div>
        <button onClick={handleNext} style={{ width: "100%", padding: "12px 0", borderRadius: 12, border: "none", background: colors.primary, color: "#000", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
          {step === steps.length - 1 ? "Get Started" : "Next"}
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// TRAINEE DATA (shared across Coach screens)
// ═══════════════════════════════════════════════════════

const allTraineesData = [
  { id: 1, name: "Sarah M.", email: "sarah.m@email.com", avatar: "S", goal: "Weight loss", level: "Intermediate",
    adherence: 80, workoutAdherence: 80, nutritionAdherence: 65, status: "active", weight: "74.5 kg",
    lastActivity: "2 hours ago", nextSession: "Today, 4:00 PM", joined: "Feb 1, 2026",
    alerts: ["missed"], note: "Knee injury — avoid deep squats", streak: 6,
    weeklyWorkouts: { done: 4, total: 5 }, weeklyNutrition: { done: 3, total: 5 },
    weightTrend: [76, 75.8, 75.2, 75, 74.5], pinned: true },
  { id: 2, name: "Ahmed K.", email: "ahmed.k@email.com", avatar: "A", goal: "Muscle gain", level: "Advanced",
    adherence: 65, workoutAdherence: 70, nutritionAdherence: 40, status: "active", weight: "82 kg",
    lastActivity: "1 day ago", nextSession: "Tomorrow, 10:00 AM", joined: "Jan 15, 2026",
    alerts: ["nutrition"], note: "", streak: 3,
    weeklyWorkouts: { done: 3, total: 5 }, weeklyNutrition: { done: 2, total: 5 },
    weightTrend: [80, 80.5, 81, 81.5, 82], pinned: false },
  { id: 3, name: "Lina R.", email: "lina.r@email.com", avatar: "L", goal: "Toning", level: "Beginner",
    adherence: 92, workoutAdherence: 95, nutritionAdherence: 88, status: "active", weight: "58 kg",
    lastActivity: "30 min ago", nextSession: "Today, 6:00 PM", joined: "Jan 20, 2026",
    alerts: [], note: "", streak: 14,
    weeklyWorkouts: { done: 5, total: 5 }, weeklyNutrition: { done: 4, total: 5 },
    weightTrend: [59, 58.8, 58.5, 58.2, 58], pinned: false },
  { id: 4, name: "Omar T.", email: "omar.t@email.com", avatar: "O", goal: "Endurance", level: "Intermediate",
    adherence: 0, workoutAdherence: 0, nutritionAdherence: 0, status: "pending", weight: "—",
    lastActivity: "Never", nextSession: "—", joined: "Feb 12, 2026",
    alerts: [], note: "", streak: 0,
    weeklyWorkouts: { done: 0, total: 0 }, weeklyNutrition: { done: 0, total: 0 },
    weightTrend: [], pinned: false },
  { id: 5, name: "Nadia H.", email: "nadia.h@email.com", avatar: "N", goal: "Flexibility", level: "Beginner",
    adherence: 45, workoutAdherence: 50, nutritionAdherence: 30, status: "active", weight: "63 kg",
    lastActivity: "5 days ago", nextSession: "Overdue", joined: "Dec 10, 2025",
    alerts: ["missed", "noLogin"], note: "Traveling often", streak: 0,
    weeklyWorkouts: { done: 1, total: 5 }, weeklyNutrition: { done: 1, total: 5 },
    weightTrend: [63.5, 63.5, 63.5, 63.3, 63], pinned: false },
  { id: 6, name: "Youssef A.", email: "youssef.a@email.com", avatar: "Y", goal: "Weight loss", level: "Beginner",
    adherence: 35, workoutAdherence: 40, nutritionAdherence: 25, status: "active", weight: "95 kg",
    lastActivity: "3 days ago", nextSession: "Today, 9:00 AM", joined: "Jan 5, 2026",
    alerts: ["missed", "nutrition", "plateau"], note: "", streak: 0,
    weeklyWorkouts: { done: 2, total: 5 }, weeklyNutrition: { done: 1, total: 5 },
    weightTrend: [95.2, 95.1, 95, 95, 95], pinned: false },
  { id: 7, name: "Fatima Z.", email: "fatima.z@email.com", avatar: "F", goal: "Maintenance", level: "Advanced",
    adherence: 88, workoutAdherence: 90, nutritionAdherence: 85, status: "active", weight: "61 kg",
    lastActivity: "4 hours ago", nextSession: "Tomorrow, 7:00 AM", joined: "Nov 1, 2025",
    alerts: [], note: "", streak: 21,
    weeklyWorkouts: { done: 4, total: 5 }, weeklyNutrition: { done: 4, total: 5 },
    weightTrend: [61.2, 61, 61.1, 61, 61], pinned: false },
  { id: 8, name: "Rami B.", email: "rami.b@email.com", avatar: "R", goal: "Muscle gain", level: "Intermediate",
    adherence: 0, workoutAdherence: 0, nutritionAdherence: 0, status: "inactive", weight: "78 kg",
    lastActivity: "30 days ago", nextSession: "—", joined: "Oct 15, 2025",
    alerts: [], note: "Paused due to travel", streak: 0,
    weeklyWorkouts: { done: 0, total: 0 }, weeklyNutrition: { done: 0, total: 0 },
    weightTrend: [78, 78, 78, 78, 78], pinned: false },
  { id: 9, name: "Dana M.", email: "dana.m@email.com", avatar: "D", goal: "Weight loss", level: "Beginner",
    adherence: 0, workoutAdherence: 0, nutritionAdherence: 0, status: "pending", weight: "—",
    lastActivity: "Never", nextSession: "—", joined: "Feb 14, 2026",
    alerts: [], note: "", streak: 0,
    weeklyWorkouts: { done: 0, total: 0 }, weeklyNutrition: { done: 0, total: 0 },
    weightTrend: [], pinned: false },
  { id: 10, name: "Karim S.", email: "karim.s@email.com", avatar: "K", goal: "Endurance", level: "Advanced",
    adherence: 72, workoutAdherence: 75, nutritionAdherence: 68, status: "active", weight: "70 kg",
    lastActivity: "1 day ago", nextSession: "Wed, 5:00 PM", joined: "Dec 20, 2025",
    alerts: [], note: "", streak: 4,
    weeklyWorkouts: { done: 3, total: 4 }, weeklyNutrition: { done: 3, total: 5 },
    weightTrend: [71, 70.8, 70.5, 70.3, 70], pinned: false },
];

// ═══════════════════════════════════════════════════════
// COACH TRAINEES TAB (Decision-Support Dashboard)
// ═══════════════════════════════════════════════════════

function CoachTraineesTab({ onNavigate, onShowToast, freemium = {}, initialTraineeId = null }) {
  const { isPremium: isPro, CLIENT_FREE_LIMIT: freeLimit = 3, canAddClient: canInvite, onUpgrade, onClientCountChange } = freemium;
  const [trainees, setTrainees] = useState(allTraineesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("attention"); // attention | adherence | lastActivity | alpha | nextSession
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [bulkMode, setBulkMode] = useState(false);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showTraineeProfile, setShowTraineeProfile] = useState(initialTraineeId);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [swipedId, setSwipedId] = useState(null);

  // Invite form state
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteFirstName, setInviteFirstName] = useState("");
  const [inviteGender, setInviteGender] = useState("");
  const [inviteGoal, setInviteGoal] = useState("");
  const [inviteMessage, setInviteMessage] = useState("");
  const [inviteLoading, setInviteLoading] = useState(false);
  const [inviteError, setInviteError] = useState("");

  // Filter logic
  const filters = [
    { key: "all", label: tr("All"), count: trainees.length },
    { key: "active", label: tr("Active"), count: trainees.filter(t => t.status === "active").length },
    { key: "attention", label: tr("Attention"), count: trainees.filter(t => t.alerts.length > 0).length },
    { key: "pending", label: tr("Pending"), count: trainees.filter(t => t.status === "pending").length },
    { key: "inactive", label: tr("Inactive"), count: trainees.filter(t => t.status === "inactive").length },
  ];

  // Sort logic
  const sortFns = {
    attention: (a, b) => b.alerts.length - a.alerts.length || a.adherence - b.adherence,
    adherence: (a, b) => a.adherence - b.adherence,
    lastActivity: (a, b) => {
      const order = { "min ago": 0, "hours ago": 1, "hour ago": 1, "day ago": 2, "days ago": 3, "Never": 99 };
      const getOrder = (s) => { for (const [k, v] of Object.entries(order)) if (s.includes(k)) return v; return 50; };
      return getOrder(a.lastActivity) - getOrder(b.lastActivity);
    },
    alpha: (a, b) => a.name.localeCompare(b.name),
    nextSession: (a, b) => {
      if (a.nextSession === "—") return 1; if (b.nextSession === "—") return -1;
      if (a.nextSession === "Overdue") return -1; if (b.nextSession === "Overdue") return 1;
      return a.nextSession.localeCompare(b.nextSession);
    },
  };

  // Filter & sort trainees
  const filtered = trainees
    .filter(t => {
      if (activeFilter === "active") return t.status === "active";
      if (activeFilter === "attention") return t.alerts.length > 0;
      if (activeFilter === "pending") return t.status === "pending";
      if (activeFilter === "inactive") return t.status === "inactive";
      return true;
    })
    .filter(t => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return t.name.toLowerCase().includes(q) || t.email.toLowerCase().includes(q) || t.goal.toLowerCase().includes(q);
    })
    .sort(sortFns[sortBy] || sortFns.attention);

  // Stats
  const activeCount = trainees.filter(t => t.status === "active").length;
  const avgAdherence = activeCount > 0 ? Math.round(trainees.filter(t => t.status === "active").reduce((a, t) => a + t.adherence, 0) / activeCount) : 0;
  const needsAttentionCount = trainees.filter(t => t.alerts.length > 0).length;

  // Adherence color helper
  const adherenceColor = (pct) => pct >= 80 ? colors.success : pct >= 60 ? colors.warning : pct < 1 ? colors.textMuted : colors.error;

  // Alert label helper
  const alertLabel = (type) => ({
    missed:    "Missed workouts",
    nutrition: "Low nutrition",
    noLogin:   "No login",
    plateau:   "Weight plateau",
  }[type] || type);

  const alertColor = (type) => ({
    missed: colors.error,
    nutrition: colors.warning,
    noLogin: colors.textMuted,
    plateau: "#8B5CF6",
  }[type] || colors.textMuted);

  // Toggle select
  const toggleSelect = (id) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  // Invite handler
  const handleInvite = () => {
    // Freemium gate — block invite if at client limit
    if (!canInvite) {
      if (onUpgrade) onUpgrade();
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inviteEmail.trim()) { setInviteError("Email is required"); return; }
    if (!emailRegex.test(inviteEmail)) { setInviteError("Invalid email format"); return; }
    if (trainees.some(t => t.email.toLowerCase() === inviteEmail.toLowerCase())) { setInviteError("This email is already in your trainees list"); return; }
    setInviteError("");
    setInviteLoading(true);
    setTimeout(() => {
      const newTrainee = {
        id: Date.now(), name: inviteFirstName || inviteEmail.split("@")[0], email: inviteEmail,
        avatar: (inviteFirstName || inviteEmail)[0].toUpperCase(), goal: inviteGoal || "Not set", gender: inviteGender || "—",
        level: "—", adherence: 0, workoutAdherence: 0, nutritionAdherence: 0, status: "pending",
        weight: "—", lastActivity: "Never", nextSession: "—", joined: "Just now",
        alerts: [], note: "", streak: 0,
        weeklyWorkouts: { done: 0, total: 0 }, weeklyNutrition: { done: 0, total: 0 },
        weightTrend: [], pinned: false
      };
      setTrainees(prev => {
        const updated = [...prev, newTrainee];
        if (onClientCountChange) onClientCountChange(updated.length);
        return updated;
      });
      setInviteLoading(false);
      setShowInviteModal(false);
      setInviteEmail(""); setInviteFirstName(""); setInviteGender(""); setInviteGoal(""); setInviteMessage("");
      onShowToast(`Invite sent to ${inviteEmail}`);
    }, 1200);
  };

  // Resend invite
  const resendInvite = (t) => { onShowToast(`Invite resent to ${t.email}`); };

  // Cancel invite
  const cancelInvite = (id) => {
    setTrainees(prev => prev.filter(t => t.id !== id));
    onShowToast("Invitation cancelled", "warning");
  };

  // Archive trainee
  const archiveTrainee = (id) => {
    setTrainees(prev => prev.map(t => t.id === id ? { ...t, status: "inactive" } : t));
    onShowToastr("Trainee archived");
  };

  // Reactivate trainee
  const reactivateTrainee = (id) => {
    setTrainees(prev => prev.map(t => t.id === id ? { ...t, status: "active" } : t));
    onShowToastr("Trainee reactivated");
  };

  // Delete trainee
  const deleteTrainee = (id) => {
    setTrainees(prev => prev.filter(t => t.id !== id));
    setShowDeleteConfirm(null);
    onShowToast("Trainee removed", "warning");
  };

  // Mark reviewed
  const markReviewed = (id) => {
    setTrainees(prev => prev.map(t => t.id === id ? { ...t, alerts: [] } : t));
    setSwipedId(null);
    onShowToastr("Marked as reviewed");
  };

  // Bulk actions
  const bulkAssignWorkout = () => { onShowToast(`Workout plan assigned to ${selectedIds.length} trainees`); setBulkMode(false); setSelectedIds([]); };
  const bulkAssignNutrition = () => { onShowToast(`Nutrition plan assigned to ${selectedIds.length} trainees`); setBulkMode(false); setSelectedIds([]); };
  const bulkSendMessage = () => { onShowToast(`Message sent to ${selectedIds.length} trainees`); setBulkMode(false); setSelectedIds([]); };
  const bulkArchive = () => {
    setTrainees(prev => prev.map(t => selectedIds.includes(t.id) ? { ...t, status: "inactive" } : t));
    setBulkMode(false); setSelectedIds([]);
    onShowToast("Trainees archived", "warning");
  };
  const bulkMarkReviewed = () => {
    setTrainees(prev => prev.map(t => selectedIds.includes(t.id) ? { ...t, alerts: [] } : t));
    setBulkMode(false); setSelectedIds([]);
    onShowToastr("Marked as reviewed");
  };

  // ─── TRAINEE PROFILE VIEW ───
  if (showTraineeProfile) {
    const t = trainees.find(tr => tr.id === showTraineeProfile);
    if (!t) { setShowTraineeProfile(null); return null; }
    return (
      <TraineeProfileScreen
        trainee={t}
        onBack={() => setShowTraineeProfile(null)}
        onNavigate={onNavigate}
        onShowToast={onShowToast}
        onArchive={() => { archiveTrainee(t.id); setShowTraineeProfile(null); }}
        onReactivate={() => { reactivateTrainee(t.id); setShowTraineeProfile(null); }}
        onDelete={() => { deleteTrainee(t.id); setShowTraineeProfile(null); }}
      />
    );
  }

  // ─── MAIN LIST VIEW ───
  return (
    <div style={{ paddingBottom: 20 }}>
      {/* Header */}
      <div style={{ padding: "0 20px", marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: colors.textPrimary }}>{tr("Trainees")}</h1>
          <div style={{ display: "flex", gap: 8 }}>
            {bulkMode ? (
              <button onClick={() => { setBulkMode(false); setSelectedIds([]); }}
                style={{ background: colors.errorLight, border: "none", borderRadius: 10, padding: "8px 14px", fontSize: 12, fontWeight: 600, color: colors.error, cursor: "pointer" }}>
                Cancel
              </button>
            ) : (
              <>
                <button onClick={() => setShowSearch(!showSearch)}
                  style={{ background: showSearch ? colors.primaryLight : colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <Search size={16} color={showSearch ? colors.primary : colors.textSecondary} />
                </button>
                <button onClick={() => setBulkMode(true)}
                  style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <CheckCircle2 size={16} color={colors.textSecondary} />
                </button>
              </>
            )}
          </div>
        </div>
        <p style={{ fontSize: 13, color: colors.textSecondary }}>
          {activeCount} active · {avgAdherence}% avg adherence
          {needsAttentionCount > 0 && <span style={{ color: colors.error, fontWeight: 600 }}> · {needsAttentionCount} need attention</span>}
        </p>
      </div>

      {/* Search bar */}
      {showSearch && (
        <div style={{ padding: "0 20px", marginBottom: 12 }}>
          <div style={{ position: "relative" }}>
            <Search size={16} color={colors.textMuted} style={{ position: "absolute", left: 12, top: 13 }} />
            <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search by name, email, or goal..." autoFocus
              style={{ width: "100%", height: 42, borderRadius: 12, border: `1.5px solid ${colors.border}`, paddingLeft: 36, paddingRight: 36, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")}
                style={{ position: "absolute", right: 10, top: 11, background: colors.surface, border: "none", borderRadius: 8, width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <X size={12} color={colors.textMuted} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Filter Pills */}
      <div style={{ display: "flex", gap: 6, padding: "0 20px", marginBottom: 12, overflowX: "auto" }}>
        {filters.map(f => (
          <button key={f.key} onClick={() => setActiveFilter(f.key)}
            style={{ display: "flex", alignItems: "center", gap: 4, padding: "7px 14px", borderRadius: 20, border: "none",
              background: activeFilter === f.key ? colors.primary : colors.surface,
              color: activeFilter === f.key ? "#fff" : colors.textSecondary,
              fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0, transition: "all 0.2s" }}>
            {f.label}
            <span style={{ fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 8,
              background: activeFilter === f.key ? "rgba(255,255,255,0.25)" : colors.border,
              color: activeFilter === f.key ? "#fff" : colors.textMuted }}>
              {f.count}
            </span>
          </button>
        ))}
      </div>

      {/* Sort Row */}
      <div style={{ padding: "0 20px", marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 12, color: colors.textMuted }}>
          {filtered.length} trainee{filtered.length !== 1 ? "s" : ""}
          {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
        </span>
        <div style={{ position: "relative" }}>
          <button onClick={() => setShowSortMenu(!showSortMenu)}
            style={{ display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, color: colors.primary }}>
            <ArrowUpDown size={13} /> Sort
          </button>
          {showSortMenu && (
            <div style={{ position: "absolute", top: 28, right: 0, background: colors.card, borderRadius: 14, boxShadow: "0 8px 32px rgba(0,0,0,0.18)", padding: 6, width: 190, zIndex: 100 }}>
              {[
                { key: "attention", label: "Needs attention first" },
                { key: "adherence", label: "Lowest adherence first" },
                { key: "lastActivity", label: "Most recent activity" },
                { key: "nextSession", label: "Next session" },
                { key: "alpha", label: "Alphabetical" },
              ].map(opt => (
                <button key={opt.key} onClick={() => { setSortBy(opt.key); setShowSortMenu(false); }}
                  style={{ width: "100%", padding: "10px 12px", background: sortBy === opt.key ? colors.primaryLight : "none",
                    border: "none", borderRadius: 10, fontSize: 13, fontWeight: sortBy === opt.key ? 600 : 400,
                    color: sortBy === opt.key ? colors.primary : colors.textPrimary, cursor: "pointer", textAlign: "left" }}>
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ─── TRAINEE CARDS ─── */}
      <div style={{ padding: "0 20px" }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "48px 20px" }}>
            <div style={{ width: 64, height: 64, borderRadius: 20, background: colors.surface, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              {activeFilter === "attention" ? <AlertTriangle size={28} color={colors.textMuted} /> :
               activeFilter === "pending" ? <Mail size={28} color={colors.textMuted} /> :
               <Users size={28} color={colors.textMuted} />}
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: colors.textPrimary, marginBottom: 4 }}>
              {searchQuery ? "No results found" :
               activeFilter === "pending" ? "No pending invitations" :
               activeFilter === "inactive" ? "No inactive trainees" :
               activeFilter === "attention" ? "Everyone's on track!" :
               "No trainees yet"}
            </div>
            <div style={{ fontSize: 13, color: colors.textSecondary, marginBottom: 20 }}>
              {searchQuery ? "Try a different search term" :
               activeFilter === "attention" ? "All trainees are performing well" :
               "Invite your first trainee to get started"}
            </div>
            {!searchQuery && activeFilter === "all" && (
              <button onClick={() => canInvite ? setShowInviteModal(true) : onUpgrade && onUpgrade()}
                style={{ background: canInvite ? colors.primary : colors.surface, border: "none", borderRadius: 14, padding: "12px 24px", color: canInvite ? "#fff" : colors.textMuted, fontSize: 14, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, boxShadow: canInvite ? "0 4px 14px rgba(52,211,153,0.25)" : "none" }}>
                {canInvite ? <UserPlus size={16} /> : <Lock size={14} />} {canInvite ? tr("Invite First Trainee") : tr("Upgrade to Invite")}
              </button>
            )}
          </div>
        )}

        {filtered.map(t => {
          const isPending = t.status === "pending";
          const isInactive = t.status === "inactive";
          const hasAlerts = t.alerts.length > 0;
          const isSelected = selectedIds.includes(t.id);

          return (
            <div key={t.id}
              onClick={() => {
                if (bulkMode) { toggleSelect(t.id); return; }
                if (isPending) return;
                setShowTraineeProfile(t.id);
              }}
              style={{
                background: isSelected ? colors.primaryLight : hasAlerts ? colors.errorLight + "60" : colors.card,
                borderRadius: 16, padding: "14px 16px", marginBottom: 10,
                border: `1.5px solid ${isSelected ? colors.primary : hasAlerts ? colors.error + "30" : colors.border}`,
                boxShadow: hasAlerts ? `0 2px 12px ${colors.error}10` : "0 2px 8px rgba(0,0,0,0.04)",
                display: "flex", alignItems: "center", gap: 12, cursor: isPending && !bulkMode ? "default" : "pointer",
                opacity: isInactive ? 0.6 : 1, transition: "all 0.15s",
                position: "relative", overflow: "hidden"
              }}>

              {/* Bulk select checkbox */}
              {bulkMode && (
                <div style={{
                  width: 22, height: 22, borderRadius: 7, flexShrink: 0,
                  border: isSelected ? "none" : `2px solid ${colors.border}`,
                  background: isSelected ? colors.primary : "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  {isSelected && <Check size={14} color="#fff" strokeWidth={3} />}
                </div>
              )}

              {/* Avatar */}
              <div style={{ width: 48, height: 48, borderRadius: "50%", flexShrink: 0, position: "relative",
                background: isPending ? colors.surface : isInactive ? colors.surface : hasAlerts ? colors.errorLight : colors.primaryLight,
                display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 18, fontWeight: 700,
                  color: isPending ? colors.textMuted : isInactive ? colors.textMuted : hasAlerts ? colors.error : colors.primary }}>
                  {t.avatar}
                </span>
                {hasAlerts && (
                  <div style={{ position: "absolute", top: -2, right: -2, width: 18, height: 18, borderRadius: "50%",
                    background: colors.error, display: "flex", alignItems: "center", justifyContent: "center",
                    border: "2px solid #fff", animation: "bounce 0.3s ease" }}>
                    <span style={{ fontSize: 9, fontWeight: 800, color: "#fff" }}>{t.alerts.length}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: isInactive ? colors.textMuted : colors.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.name}</span>
                  <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6, flexShrink: 0,
                    background: isPending ? colors.warningLight : isInactive ? colors.surface : colors.successLight,
                    color: isPending ? colors.warning : isInactive ? colors.textMuted : colors.success }}>
                    {isPending ? "Pending" : isInactive ? "Inactive" : "Active"}
                  </span>
                </div>

                {/* Goal + meta */}
                <div style={{ fontSize: 12, color: colors.textSecondary, marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {t.goal}
                  {!isPending && !isInactive && <span> · {t.lastActivity}</span>}
                  {isPending && <span> · Invited {t.joined}</span>}
                </div>

                {/* Alert badges */}
                {hasAlerts && (
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 4 }}>
                    {t.alerts.map((a, i) => {
                      const alertIcon = { missed: Dumbbell, nutrition: Leaf, noLogin: Activity, plateau: TrendingUp }[a] || AlertTriangle;
                      const AlertIcon = alertIcon;
                      return (
                        <span key={i} style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px 2px 6px", borderRadius: 6, display: "inline-flex", alignItems: "center", gap: 3,
                          background: alertColor(a) + "18", color: alertColor(a), border: `1px solid ${alertColor(a)}25` }}>
                          <AlertIcon size={9} strokeWidth={2.5} />{alertLabel(a)}
                        </span>
                      );
                    })}
                  </div>
                )}

                {/* Pending actions */}
                {isPending && !bulkMode && (
                  <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                    <button onClick={(e) => { e.stopPropagation(); resendInvite(t); }}
                      style={{ padding: "5px 12px", borderRadius: 8, border: `1px solid ${colors.primary}`, background: "#fff",
                        fontSize: 11, fontWeight: 600, color: colors.primary, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                      <RefreshCw size={11} /> Resend
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); cancelInvite(t.id); }}
                      style={{ padding: "5px 12px", borderRadius: 8, border: `1px solid ${colors.border}`, background: "#fff",
                        fontSize: 11, fontWeight: 600, color: colors.textMuted, cursor: "pointer" }}>
                      Cancel
                    </button>
                  </div>
                )}

                {/* Inactive actions */}
                {isInactive && !bulkMode && (
                  <button onClick={(e) => { e.stopPropagation(); reactivateTrainee(t.id); }}
                    style={{ marginTop: 6, padding: "5px 12px", borderRadius: 8, border: `1px solid ${colors.success}`,
                      background: colors.successLight, fontSize: 11, fontWeight: 600, color: colors.success, cursor: "pointer",
                      display: "flex", alignItems: "center", gap: 4 }}>
                    <UserCheck size={11} /> Reactivate
                  </button>
                )}
              </div>

              {/* Right side: adherence + arrow */}
              {!isPending && !isInactive && !bulkMode && (
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: adherenceColor(t.adherence), letterSpacing: -0.5 }}>{t.adherence}%</div>
                  <div style={{ fontSize: 10, color: colors.textMuted, marginTop: 1 }}>adherence</div>
                  {t.nextSession && t.nextSession !== "—" && (
                    <div style={{ fontSize: 10, color: t.nextSession === "Overdue" ? colors.error : colors.textMuted, marginTop: 4, fontWeight: t.nextSession === "Overdue" ? 700 : 400 }}>
                      {t.nextSession.length > 14 ? t.nextSession.slice(0, 14) + "..." : t.nextSession}
                    </div>
                  )}
                </div>
              )}

              {!bulkMode && !isPending && <ChevronRight size={16} color={colors.textMuted} style={{ flexShrink: 0 }} />}
            </div>
          );
        })}
      </div>

      {/* ─── FLOATING INVITE CTA ─── */}
      {!bulkMode && (
        <div style={{ position: "sticky", bottom: 12, padding: "0 20px", marginTop: 8 }}>
          {/* Freemium client usage bar */}
          {!isPro && (
            <div style={{
              padding: "10px 14px", borderRadius: 12, marginBottom: 8,
              background: canInvite ? `${colors.primary}06` : `${colors.warning}08`,
              border: `1.5px solid ${canInvite ? `${colors.primary}15` : `${colors.warning}25`}`,
              display: "flex", alignItems: "center", justifyContent: "space-between"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {!canInvite && <Lock size={12} color={colors.warning} />}
                <span style={{ fontSize: 11, fontWeight: 700, color: canInvite ? colors.textSecondary : colors.warning }}>
                  {canInvite ? "Free Plan" : "Client limit reached"}
                </span>
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: canInvite ? colors.primary : colors.warning }}>{trainees.length}/{freeLimit} clients</span>
            </div>
          )}
          <button onClick={() => canInvite ? setShowInviteModal(true) : onUpgrade && onUpgrade()}
            style={{ width: "100%", padding: "14px 0", borderRadius: 16, border: "none",
              background: canInvite ? colors.primary : colors.surface, color: canInvite ? "#fff" : colors.textMuted,
              fontSize: 15, fontWeight: 700, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              boxShadow: canInvite ? "0 6px 24px rgba(52,211,153,0.35)" : "0 2px 8px rgba(0,0,0,0.08)" }}>
            {canInvite ? <UserPlus size={18} /> : <Lock size={16} />}
            {canInvite ? tr("Invite Trainee") : tr("Upgrade to Add More Clients")}
          </button>
        </div>
      )}

      {/* ─── BULK ACTION BAR ─── */}
      {bulkMode && selectedIds.length > 0 && (
        <div style={{ position: "sticky", bottom: 0, left: 0, right: 0, background: colors.card, borderTop: `1px solid ${colors.border}`,
          padding: "12px 20px", animation: "slideUp 0.3s ease", boxShadow: "0 -4px 20px rgba(0,0,0,0.1)" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary, marginBottom: 10 }}>
            {selectedIds.length} selected
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { label: "Assign Workout", icon: Dumbbell, color: colors.primary, action: bulkAssignWorkout },
              { label: "Assign Nutrition", icon: Apple, color: colors.success, action: bulkAssignNutrition },
              { label: "Send Message", icon: Send, color: colors.primary, action: bulkSendMessage },
              { label: "Mark Reviewed", icon: Check, color: colors.success, action: bulkMarkReviewed },
              { label: "Archive", icon: Archive, color: colors.error, action: bulkArchive },
            ].map(act => (
              <button key={act.label} onClick={act.action}
                style={{ padding: "8px 14px", borderRadius: 10, border: `1px solid ${act.color}20`, background: act.color + "10",
                  fontSize: 12, fontWeight: 600, color: act.color, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
                <act.icon size={13} /> {act.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ─── INVITE TRAINEE MODAL ─── */}
      {showInviteModal && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "flex-end", zIndex: 997 }}>
          <div style={{ background: "#fff", borderRadius: "24px 24px 0 0", width: "100%", maxHeight: "88vh", overflow: "auto", padding: "12px 20px 32px", animation: "slideUp 0.3s ease" }}>
            <div style={{ width: 40, height: 4, background: colors.border, borderRadius: 2, margin: "0 auto 16px" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>{tr("Invite Trainee")}</h3>
              <button onClick={() => { setShowInviteModal(false); setInviteError(""); }}
                style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <X size={18} color={colors.textSecondary} />
              </button>
            </div>

            {/* Email (required) */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Email Address *</div>
              <div style={{ position: "relative" }}>
                <Mail size={16} color={colors.textMuted} style={{ position: "absolute", left: 12, top: 14 }} />
                <input value={inviteEmail} onChange={e => { setInviteEmail(e.target.value); setInviteError(""); }} placeholder="trainee@email.com" type="email"
                  style={{ width: "100%", height: 48, borderRadius: 12, border: `1.5px solid ${inviteError ? colors.error : colors.border}`, paddingLeft: 38, paddingRight: 14, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
              </div>
              {inviteError && <div style={{ fontSize: 11, color: colors.error, marginTop: 4, fontWeight: 500 }}>{inviteError}</div>}
            </div>

            {/* First name (optional) */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>{tr("First Name ")}<span style={{ fontWeight: 400 }}>(optional)</span></div>
              <input value={inviteFirstName} onChange={e => setInviteFirstName(e.target.value)} placeholder="e.g. Sarah"
                style={{ width: "100%", height: 48, borderRadius: 12, border: `1.5px solid ${colors.border}`, padding: "0 14px", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
            </div>


            {/* Gender (optional) */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>
                {tr("Gender")} <span style={{ fontWeight: 400, textTransform: "none" }}>({tr("optional")})</span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  { key: "Male",   icon: "♂", label: tr("Male") },
                  { key: "Female", icon: "♀", label: tr("Female") },
                ].map(g => (
                  <button key={g.key} onClick={() => setInviteGender(inviteGender === g.key ? "" : g.key)}
                    style={{
                      flex: 1, padding: "10px 6px", borderRadius: 12,
                      border: `2px solid ${inviteGender === g.key ? colors.primary : colors.border}`,
                      background: inviteGender === g.key ? colors.primaryLight : colors.surface,
                      cursor: "pointer", textAlign: "center", transition: "all 0.15s"
                    }}>
                    <div style={{ fontSize: 16, marginBottom: 2 }}>{g.icon}</div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: inviteGender === g.key ? colors.primary : colors.textSecondary }}>{g.label}</div>
                  </button>
                ))}
              </div>
            </div>
            {/* Goal (optional) */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Goal <span style={{ fontWeight: 400 }}>(optional)</span></div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["Weight loss", "Muscle gain", "Toning", "Endurance", "Maintenance", "Flexibility"].map(g => (
                  <button key={g} onClick={() => setInviteGoal(inviteGoal === g ? "" : g)}
                    style={{ padding: "8px 14px", borderRadius: 10, border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer",
                      background: inviteGoal === g ? colors.primaryLight : colors.surface,
                      color: inviteGoal === g ? colors.primary : colors.textSecondary }}>
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom message (optional) */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Custom Message <span style={{ fontWeight: 400 }}>(optional)</span></div>
              <textarea value={inviteMessage} onChange={e => setInviteMessage(e.target.value)}
                placeholder="Add a personal message to the invite email..." rows={3}
                style={{ width: "100%", borderRadius: 12, border: `1.5px solid ${colors.border}`, padding: "12px 14px", fontSize: 14, outline: "none", resize: "none", fontFamily: "inherit", boxSizing: "border-box", lineHeight: 1.4 }} />
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => { setShowInviteModal(false); setInviteError(""); }}
                style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 14, fontWeight: 600, color: colors.textSecondary, cursor: "pointer" }}>
                Cancel
              </button>
              <button onClick={handleInvite} disabled={inviteLoading}
                style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: "none",
                  background: inviteLoading ? colors.textMuted : colors.primary, color: "#fff", fontSize: 14, fontWeight: 600,
                  cursor: inviteLoading ? "wait" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  boxShadow: inviteLoading ? "none" : "0 4px 14px rgba(52,211,153,0.25)" }}>
                {inviteLoading ? (
                  <><RefreshCw size={16} style={{ animation: "spin 1s linear infinite" }} /> Sending...</>
                ) : (
                  <><Send size={16} /> Send Invite</>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── DELETE CONFIRMATION ─── */}
      {showDeleteConfirm && (
        <ConfirmDialog
          title="Delete Trainee?"
          message="This action is permanent and cannot be undone. All data, plans, and chat history will be lost."
          onConfirm={() => deleteTrainee(showDeleteConfirm)}
          onCancel={() => setShowDeleteConfirm(null)}
        />
      )}

      {/* Sort menu overlay click-away */}
      {showSortMenu && (
        <div onClick={() => setShowSortMenu(false)} style={{ position: "absolute", inset: 0, zIndex: 50 }} />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// TRAINEE PROFILE SCREEN (from Trainees Tab)
// ═══════════════════════════════════════════════════════

function TraineeProfileScreen({ trainee, onBack, onNavigate, onShowToast, onArchive, onReactivate, onDelete }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [showSettings, setShowSettings] = useState(false);
  const t = trainee;

  // Coach feedback & caution for this trainee (item 8)
  const [coachFeedback, setCoachFeedback] = useState("");
  const [coachCaution, setCoachCaution] = useState("");

  // Trainee goals (item 9)
  const [traineeGoals, setTraineeGoals] = useState([
    { id: 1, text: "Reach 72 kg by end of March", completed: false },
    { id: 2, text: "Complete 5 workouts per week consistently", completed: false },
    { id: 3, text: "Improve squat to 80 kg", completed: false },
  ]);
  const [newGoalText, setNewGoalText] = useState("");

  // Exercise weight progress chart popup
  const [showExerciseChart, setShowExerciseChart] = useState(null); // { name, data: [{session, weight}] }

  // Generate mock weight progress data for an exercise
  const getExerciseProgressData = (exName) => {
    const base = { "Barbell Squat": 65, "Leg Press": 110, "Lunges": 16, "Leg Curl": 35,
      "Bench Press": 55, "Incline Dumbbell Press": 20, "Cable Fly": 12,
      "Deadlift": 85, "Pull-ups": 0, "Barbell Row": 45 }[exName] || 40;
    return ["W1","W2","W3","W4","W5","W6","W7"].map((w, i) => ({
      session: w, weight: Math.round(base + (i * (base * 0.04)) + (Math.random() * 4 - 2))
    }));
  };
  const traineeProgressPhotos = [
    { date: "Feb 15, 2025", photos: [{ label: "Front", bg: "#E0E7FF" }, { label: "Side", bg: "#DBEAFE" }, { label: "Back", bg: "#EDE9FE" }] },
    { date: "Feb 8, 2025", photos: [{ label: "Front", bg: "#D1FAE5" }, { label: "Side", bg: "#CFFAFE" }, { label: "Back", bg: "#FEF3C7" }] },
    { date: "Feb 1, 2025", photos: [{ label: "Front", bg: "#FCE7F3" }, { label: "Side", bg: "#FEE2E2" }, { label: "Back", bg: "#F3E8FF" }] },
  ];

  // Body measurements mirrored from trainee
  const bodyMeasurements = { chest: 96, waist: 82, hips: 98, arms: 33, thighs: 56 };

  // Trainee feedback from progress tab text field (item 7)
  const traineeFeedbackEntries = [
    { date: "Feb 15", text: "Feeling much stronger this week! Squats felt easier than last week. Still struggling with meal prep on busy days." },
    { date: "Feb 8", text: "Had a tough week with work stress. Missed one workout but kept nutrition on track. Sleep has been better." },
    { date: "Feb 1", text: "Great start to the month. Energy levels are up. Would like more variety in lunch options." },
  ];

  // Trainee level dropdown
  const [traineeLevel, setTraineeLevel] = useState(t.level || "Intermediate");
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);
  const levelOptions = ["Beginner", "Intermediate", "Advanced", "Elite"];

  // Trainee direction/goal text
  const [traineeDirection, setTraineeDirection] = useState(t.goal || "Weight loss");

  // Trainee history popup
  const [showTraineeHistory, setShowTraineeHistory] = useState(false);
  const traineeHistory = {
    goal: t.goal || "Weight loss",
    trainingDuration: "6 months",
    previousTraining: "Trained for 1 year before, stopped 4 months due to work relocation",
    stopReason: "Work relocation — moved cities, had no gym access",
    diseases: "None",
    allergies: "Lactose intolerant (mild)",
    injuries: "Minor lower back pain (L4-L5 disc issue, under control)",
    medications: "None",
    availability: "Sunday, Tuesday, Thursday — 5 PM to 7 PM",
    dietaryPreferences: "Prefers high-protein meals, avoids dairy when possible",
    sleepPattern: "6-7 hours average, sometimes poor due to work stress",
    hydration: "Drinks about 2L water/day, trying to increase",
    occupation: "Software Engineer — desk job, sedentary 8+ hours",
    notes: "Highly motivated but tends to overtrain when feeling good. Needs regular recovery reminders.",
  };

  // InBody reports data
  const [inbodyExpanded, setInbodyExpanded] = useState(false);
  const traineeInbodyReports = [
    { date: "Feb 15, 2025", type: "PDF", label: "InBody Report", bg: "#EDE9FE" },
    { date: "Feb 1, 2025", type: "Image", label: "InBody Scan", bg: "#DBEAFE" },
    { date: "Jan 15, 2025", type: "PDF", label: "InBody Report", bg: "#D1FAE5" },
  ];

  // Progress photos expandable
  const [photosExpanded, setPhotosExpanded] = useState(false);

  // Expandable workout & nutrition progress in plans tab
  const [workoutProgressExpanded, setWorkoutProgressExpanded] = useState(false);
  const [nutritionProgressExpanded, setNutritionProgressExpanded] = useState(false);

  // Per-day expand state for exercises/meals
  const [expandedWorkoutDays, setExpandedWorkoutDays] = useState({});
  const [expandedNutritionDays, setExpandedNutritionDays] = useState({});
  const [expandedExercises, setExpandedExercises] = useState({});
  const [expandedMeals, setExpandedMeals] = useState({});
  const toggleWorkoutDay = (day) => setExpandedWorkoutDays(p => ({ ...p, [day]: !p[day] }));
  const toggleNutritionDay = (day) => setExpandedNutritionDays(p => ({ ...p, [day]: !p[day] }));
  const toggleExercise = (key) => setExpandedExercises(p => ({ ...p, [key]: !p[key] }));
  const toggleMeal = (key) => setExpandedMeals(p => ({ ...p, [key]: !p[key] }));

  // Date filters for workout/nutrition progress and photos
  const [workoutDateFrom, setWorkoutDateFrom] = useState("2025-02-10");
  const [workoutDateTo, setWorkoutDateTo] = useState("2025-02-16");
  const [nutritionDateFrom, setNutritionDateFrom] = useState("2025-02-10");
  const [nutritionDateTo, setNutritionDateTo] = useState("2025-02-16");
  const [photosDateFrom, setPhotosDateFrom] = useState("");
  const [photosDateTo, setPhotosDateTo] = useState("");

  // Per-day workout log data (mirrored from trainee)
  const traineeWorkoutLog = [
    { day: "Mon", completed: true, duration: "42 min", note: "", skipReason: "", exercises: [
      { name: "Barbell Squat", sets: [{ weight: 70, reps: 10, done: true }, { weight: 75, reps: 8, done: true }, { weight: 80, reps: 6, done: true }] },
      { name: "Leg Press", sets: [{ weight: 120, reps: 12, done: true }, { weight: 130, reps: 10, done: true }, { weight: 130, reps: 8, done: false }], skippedSets: [{ setIndex: 2, reason: "Hip flexor felt tight on last set" }] },
      { name: "Lunges", sets: [{ weight: 20, reps: 12, done: true }, { weight: 20, reps: 12, done: true }] },
      { name: "Leg Curl", skipped: true, skipReason: "Machine was occupied, ran out of time", sets: [] },
    ]},
    { day: "Tue", completed: true, duration: "38 min", note: "Felt strong today!", skipReason: "", exercises: [
      { name: "Bench Press", sets: [{ weight: 60, reps: 10, done: true }, { weight: 65, reps: 8, done: true }, { weight: 70, reps: 6, done: true }] },
      { name: "Incline Dumbbell Press", sets: [{ weight: 22, reps: 10, done: true }, { weight: 24, reps: 8, done: true }] },
      { name: "Cable Fly", skipped: true, skipReason: "Shoulder felt slightly strained, coach note said to skip if discomfort", sets: [] },
    ]},
    { day: "Wed", completed: false, duration: "—", note: "Rest day", skipReason: "", exercises: [] },
    { day: "Thu", completed: true, duration: "45 min", note: "", skipReason: "", exercises: [
      { name: "Deadlift", sets: [{ weight: 90, reps: 8, done: true }, { weight: 100, reps: 6, done: true }, { weight: 100, reps: 5, done: true }] },
      { name: "Pull-ups", sets: [{ weight: 0, reps: 8, done: true }, { weight: 0, reps: 7, done: true }, { weight: 0, reps: 6, done: false }], skippedSets: [{ setIndex: 2, reason: "Grip fatigue after deadlifts" }] },
      { name: "Barbell Row", sets: [{ weight: 50, reps: 10, done: true }, { weight: 55, reps: 8, done: true }] },
      { name: "Face Pull", skipped: true, skipReason: "Forgot — will add to next session", sets: [] },
    ]},
    { day: "Fri", completed: false, duration: "—", note: "Skipped — feeling unwell", skipReason: "Had a fever and sore throat since the morning, didn't want to push through and make it worse.", exercises: [] },
    { day: "Sat", completed: false, duration: "—", note: "", skipReason: "Work emergency — had to travel last minute, no access to gym.", exercises: [] },
    { day: "Sun", completed: false, duration: "—", note: "", skipReason: "", exercises: [] },
  ];
  const traineeWorkoutOverallNote = "Legs felt good this week. Struggling with pull-up volume.";

  // Per-day nutrition log data (mirrored from trainee)
  const traineeNutritionLog = [
    { day: "Mon", mealsLogged: 4, mealsTotal: 4, waterLiters: 2.8, skippedMeals: [], extraMeals: [], note: "",
      meals: [
        { name: "Breakfast", done: true, foods: [{name:"Oatmeal",weight:80},{name:"Banana",weight:120},{name:"Whey Shake",weight:250}], cal: 367 },
        { name: "Lunch", done: true, foods: [{name:"Grilled Chicken",weight:180},{name:"Brown Rice",weight:150},{name:"Broccoli",weight:100}], cal: 488 },
        { name: "Snack", done: true, foods: [{name:"Greek Yogurt",weight:200},{name:"Almonds",weight:30}], cal: 187 },
        { name: "Dinner", done: true, foods: [{name:"Salmon",weight:200},{name:"Sweet Potato",weight:150},{name:"Salad",weight:80}], cal: 657 },
      ]},
    { day: "Tue", mealsLogged: 3, mealsTotal: 4, waterLiters: 2.5, skippedMeals: ["Snack"], extraMeals: [{ name: "Post-workout Shake", cal: 180 }], note: "",
      meals: [
        { name: "Breakfast", done: true, foods: [{name:"Eggs",weight:150},{name:"Toast",weight:60},{name:"Avocado",weight:80}], cal: 410 },
        { name: "Lunch", done: true, foods: [{name:"Turkey Wrap",weight:220},{name:"Fruit",weight:150}], cal: 380 },
        { name: "Snack", done: false, foods: [], cal: 0, skipReason: "Was in back-to-back meetings all afternoon" },
        { name: "Dinner", done: true, foods: [{name:"Steak",weight:200},{name:"Rice",weight:130},{name:"Veggies",weight:100}], cal: 620 },
      ]},
    { day: "Wed", mealsLogged: 4, mealsTotal: 4, waterLiters: 3.0, skippedMeals: [], extraMeals: [], note: "Great eating day",
      meals: [
        { name: "Breakfast", done: true, foods: [{name:"Smoothie Bowl",weight:350}], cal: 340 },
        { name: "Lunch", done: true, foods: [{name:"Chicken Salad",weight:200},{name:"Bread",weight:60}], cal: 450 },
        { name: "Snack", done: true, foods: [{name:"Protein Bar",weight:65}], cal: 210 },
        { name: "Dinner", done: true, foods: [{name:"Fish",weight:180},{name:"Quinoa",weight:120},{name:"Spinach",weight:80}], cal: 520 },
      ]},
    { day: "Thu", mealsLogged: 3, mealsTotal: 4, waterLiters: 2.0, skippedMeals: ["Dinner"], extraMeals: [], note: "Late meeting, skipped dinner",
      meals: [
        { name: "Breakfast", done: true, foods: [{name:"Oatmeal",weight:80},{name:"Berries",weight:100}], cal: 290 },
        { name: "Lunch", done: true, foods: [{name:"Pasta",weight:200},{name:"Chicken",weight:150}], cal: 510 },
        { name: "Snack", done: true, foods: [{name:"Apple",weight:180},{name:"Peanut Butter",weight:32}], cal: 195 },
        { name: "Dinner", done: false, foods: [], cal: 0, skipReason: "Had a late work meeting that ran past 11pm — too late to eat" },
      ]},
    { day: "Fri", mealsLogged: 4, mealsTotal: 4, waterLiters: 2.5, skippedMeals: [], extraMeals: [{ name: "Midnight Snack", cal: 150 }], note: "",
      meals: [
        { name: "Breakfast", done: true, foods: [{name:"Pancakes",weight:200},{name:"Syrup",weight:30},{name:"Eggs",weight:120}], cal: 480 },
        { name: "Lunch", done: true, foods: [{name:"Burger",weight:300},{name:"Fries",weight:150}], cal: 680 },
        { name: "Snack", done: true, foods: [{name:"Trail Mix",weight:50}], cal: 220 },
        { name: "Dinner", done: true, foods: [{name:"Sushi",weight:250},{name:"Miso Soup",weight:200}], cal: 540 },
      ]},
    { day: "Sat", mealsLogged: 0, mealsTotal: 4, waterLiters: 0, skippedMeals: [], extraMeals: [], note: "", meals: [] },
    { day: "Sun", mealsLogged: 0, mealsTotal: 4, waterLiters: 0, skippedMeals: [], extraMeals: [], note: "", meals: [] },
  ];
  const traineeNutritionOverallNote = "Trying to eat cleaner. Need more variety in snacks.";

  const adherenceColor = (pct) => pct >= 80 ? colors.success : pct >= 60 ? colors.warning : pct < 1 ? colors.textMuted : colors.error;

  const alertLabel = (type) => ({
    missed:    "Missed workouts",
    nutrition: "Low nutrition adherence",
    noLogin:   "No login for 5+ days",
    plateau:   "Weight plateau (3+ weeks)",
  }[type] || type);

  return (
    <>
    <div style={{ paddingBottom: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 16 }}>
        <button onClick={onBack} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <ChevronLeft size={20} color={colors.textPrimary} />
        </button>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>{t.name}</h2>
          <span style={{ fontSize: 12, color: colors.textSecondary }}>{tr(t.goal)} · {tr(t.level)}</span>
        </div>
        <button onClick={() => setShowSettings(!showSettings)}
          style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <MoreVertical size={18} color={colors.textSecondary} />
        </button>
      </div>

      {/* Settings dropdown */}
      {showSettings && (
        <>
          <div onClick={() => setShowSettings(false)} style={{ position: "absolute", inset: 0, zIndex: 90 }} />
          <div style={{ position: "absolute", top: 90, right: 20, background: colors.card, borderRadius: 14, boxShadow: "0 8px 32px rgba(0,0,0,0.18)", padding: 6, width: 180, zIndex: 100 }}>
            {t.status === "inactive" ? (
              <button onClick={() => { setShowSettings(false); onReactivate(); }}
                style={{ width: "100%", padding: "10px 12px", background: "none", border: "none", borderRadius: 10, fontSize: 13, color: colors.success, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 8 }}>
                <UserCheck size={14} /> Reactivate
              </button>
            ) : (
              <button onClick={() => { setShowSettings(false); onArchive(); }}
                style={{ width: "100%", padding: "10px 12px", background: "none", border: "none", borderRadius: 10, fontSize: 13, color: colors.warning, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 8 }}>
                <Archive size={14} /> Archive
              </button>
            )}
            <button onClick={() => { setShowSettings(false); onDelete(); }}
              style={{ width: "100%", padding: "10px 12px", background: "none", border: "none", borderRadius: 10, fontSize: 13, color: colors.error, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 8 }}>
              <Trash2 size={14} /> Delete Trainee
            </button>
          </div>
        </>
      )}

      {/* Profile Top Card */}
      <div style={{ margin: "0 20px 16px", background: colors.card, borderRadius: 20, padding: 20, border: `1px solid ${colors.border}`, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: colors.primaryLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 26, fontWeight: 800, color: colors.primary }}>{t.avatar}</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: colors.textPrimary }}>{t.name}</div>
            <div style={{ fontSize: 13, color: colors.textSecondary }}>{tr(t.goal)} · {tr(t.level)}</div>
            <button onClick={() => setShowTraineeHistory(true)}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer", marginTop: 3, display: "flex", alignItems: "center", gap: 4 }}>
              <FileText size={11} color={colors.primary} />
              <span style={{ fontSize: 11, fontWeight: 600, color: colors.primary, textDecoration: "underline" }}>{tr("View Health & Training History")}</span>
            </button>
          </div>
        </div>

        {/* Adherence + streak */}
        <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
          <div style={{ flex: 1, background: colors.surface, borderRadius: 14, padding: "12px 8px", textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: adherenceColor(t.adherence), letterSpacing: -0.5 }}>{t.adherence}%</div>
            <div style={{ fontSize: 10, fontWeight: 600, color: colors.textMuted, marginTop: 2, textTransform: "uppercase", letterSpacing: 0.5 }}>{tr("Adherence")}</div>
          </div>
          <div style={{ flex: 1, background: colors.surface, borderRadius: 14, padding: "12px 8px", textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: t.streak >= 7 ? colors.success : t.streak >= 3 ? colors.primary : colors.textMuted, letterSpacing: -0.5, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
              {t.streak > 0 ? <><Flame size={18} color={t.streak >= 7 ? colors.success : colors.primary} strokeWidth={2.5} />{t.streak}</> : "—"}</div>
            <div style={{ fontSize: 10, fontWeight: 600, color: colors.textMuted, marginTop: 2, textTransform: "uppercase", letterSpacing: 0.5 }}>{tr("Day Streak")}</div>
          </div>
          <div style={{ flex: 1, background: colors.surface, borderRadius: 14, padding: "12px 8px", textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: colors.textPrimary, letterSpacing: -0.5 }}>{t.weight}</div>
            <div style={{ fontSize: 10, fontWeight: 600, color: colors.textMuted, marginTop: 2, textTransform: "uppercase", letterSpacing: 0.5 }}>{tr("Weight")}</div>
          </div>
        </div>

        {/* Direction / Goal Text Field */}
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 4, letterSpacing: 0.5, textTransform: "uppercase" }}>Direction / Goal</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Target size={14} color={colors.success} style={{ flexShrink: 0 }} />
            <input value={traineeDirection} onChange={e => setTraineeDirection(e.target.value)}
              placeholder="e.g. Weight loss, Muscle gain..."
              style={{ flex: 1, height: 36, borderRadius: 10, border: `1.5px solid ${colors.border}`, padding: "0 12px", fontSize: 12, fontWeight: 600, color: colors.textPrimary, outline: "none", boxSizing: "border-box" }} />
          </div>
        </div>

        {/* Level Dropdown */}
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: colors.textMuted }}>Trainee Level</span>
            <button onClick={() => setShowLevelDropdown(!showLevelDropdown)}
              style={{ padding: "6px 14px", borderRadius: 10, border: `1.5px solid ${colors.border}`, background: colors.surface, fontSize: 12, fontWeight: 700, color: colors.textPrimary, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: traineeLevel === "Beginner" ? "#10B981" : traineeLevel === "Intermediate" ? "#F59E0B" : traineeLevel === "Advanced" ? "#EF4444" : "#8B5CF6" }} />
              {traineeLevel}
              <ChevronDown size={14} color={colors.textMuted} />
            </button>
          </div>
          {showLevelDropdown && (
            <>
              <div onClick={() => setShowLevelDropdown(false)} style={{ position: "absolute", inset: 0, zIndex: 80 }} />
              <div style={{ position: "absolute", right: 0, top: 36, background: colors.card, borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.15)", padding: 4, width: 160, zIndex: 90 }}>
                {levelOptions.map(level => (
                  <button key={level} onClick={() => { setTraineeLevel(level); setShowLevelDropdown(false); onShowToast("Level set to " + level); }}
                    style={{ width: "100%", padding: "9px 12px", background: traineeLevel === level ? colors.primaryLight : "none", border: "none", borderRadius: 8, fontSize: 13, fontWeight: traineeLevel === level ? 700 : 500, color: traineeLevel === level ? colors.primary : colors.textPrimary, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: level === "Beginner" ? "#10B981" : level === "Intermediate" ? "#F59E0B" : level === "Advanced" ? "#EF4444" : "#8B5CF6" }} />
                    {level}
                    {traineeLevel === level && <Check size={14} color={colors.primary} style={{ marginLeft: "auto" }} />}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Alerts */}
      {t.alerts.length > 0 && (
        <div style={{ padding: "0 20px", marginBottom: 16 }}>
          {t.alerts.map((a, i) => {
            const alertIconMap = { missed: Dumbbell, nutrition: Leaf, noLogin: Activity, plateau: TrendingUp };
            const AlertBannerIcon = alertIconMap[a] || AlertTriangle;
            return (
            <div key={i} style={{ background: a === "missed" ? colors.errorLight : a === "plateau" ? "#EDE9FE" : colors.warningLight,
              borderRadius: 12, padding: "10px 14px", marginBottom: 6, display: "flex", alignItems: "center", gap: 10,
              border: `1px solid ${a === "missed" ? "#FECACA" : a === "plateau" ? "#C4B5FD" : "#FDE68A"}` }}>
              <div style={{ width: 26, height: 26, borderRadius: 7, background: a === "missed" ? `${colors.error}20` : a === "plateau" ? "#C4B5FD40" : `${colors.warning}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <AlertBannerIcon size={13} color={a === "missed" ? colors.error : a === "plateau" ? "#8B5CF6" : colors.warning} strokeWidth={2.2} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: a === "missed" ? colors.error : a === "plateau" ? "#7C3AED" : colors.warning }}>{alertLabel(a)}</span>
            </div>
            );
          })}
        </div>
      )}

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 16, background: colors.surface, marginLeft: 20, marginRight: 20, borderRadius: 12, padding: 4 }}>
        {["overview", "plans", "progress", "settings"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            style={{ flex: 1, padding: "9px 0", borderRadius: 10, border: "none",
              background: activeTab === tab ? colors.card : "transparent",
              color: activeTab === tab ? colors.primary : colors.textMuted,
              fontSize: 11, fontWeight: 600, cursor: "pointer", textTransform: "capitalize",
              boxShadow: activeTab === tab ? "0 1px 3px rgba(0,0,0,0.08)" : "none", transition: "all 0.2s" }}>
            {tr(tab.charAt(0).toUpperCase() + tab.slice(1))}
          </button>
        ))}
      </div>

      {/* ── OVERVIEW TAB ── */}
      {activeTab === "overview" && (
        <div style={{ padding: "0 20px" }}>
          {/* Weekly Summary */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary, marginBottom: 14 }}>Weekly Summary</div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: colors.textSecondary }}>{tr("Workouts")}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: adherenceColor(t.workoutAdherence) }}>{t.weeklyWorkouts.done}/{t.weeklyWorkouts.total} ({t.workoutAdherence}%)</span>
              </div>
              <ProgressBar value={t.weeklyWorkouts.done} max={Math.max(t.weeklyWorkouts.total, 1)} color={adherenceColor(t.workoutAdherence)} />
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: colors.textSecondary }}>{tr("Nutrition")}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: adherenceColor(t.nutritionAdherence) }}>{t.weeklyNutrition.done}/{t.weeklyNutrition.total} ({t.nutritionAdherence}%)</span>
              </div>
              <ProgressBar value={t.weeklyNutrition.done} max={Math.max(t.weeklyNutrition.total, 1)} color={adherenceColor(t.nutritionAdherence)} />
            </div>
          </div>

          {/* Info */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary, marginBottom: 12 }}>{tr("Details")}</div>
            {[["Email", t.email], ["Weight", t.weight], ["Last Active", t.lastActivity], ["Next Session", t.nextSession]].map(([label, val], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderTop: i > 0 ? `1px solid ${colors.border}` : "none" }}>
                <span style={{ fontSize: 13, color: colors.textMuted, fontWeight: 600 }}>{label}</span>
                <span style={{ fontSize: 13, color: val === "Overdue" ? colors.error : colors.textPrimary, fontWeight: val === "Overdue" ? 700 : 500, textAlign: "right", maxWidth: "60%" }}>{val}</span>
              </div>
            ))}
            {t.note && (
              <div style={{ marginTop: 10, padding: "10px 12px", background: colors.warningLight, borderRadius: 10, fontSize: 12, color: colors.warning, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                <AlertTriangle size={13} /> {t.note}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── PLANS TAB ── */}
      {activeTab === "plans" && (
        <div style={{ padding: "0 20px" }}>

          {/* ═══ WORKOUT PROGRESS (expandable) ═══ */}
          <div style={{ background: colors.card, borderRadius: 16, border: `1px solid ${colors.primary}20`, marginBottom: 14, overflow: "hidden" }}>
            {/* Header — always visible */}
            <div onClick={() => setWorkoutProgressExpanded(!workoutProgressExpanded)}
              style={{ padding: 14, background: `linear-gradient(135deg, ${colors.primary}08, ${colors.primary}03)`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: `${colors.primary}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Dumbbell size={16} color={colors.primary} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("Workout Progress")}</div>
                  <div style={{ fontSize: 10, color: colors.textMuted }}>{t.weeklyWorkouts.done}/{t.weeklyWorkouts.total} this week · {t.workoutAdherence}% adherence</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6, background: colors.primaryLight, color: colors.primary }}>From Trainee</span>
                {workoutProgressExpanded ? <ChevronUp size={16} color={colors.textMuted} /> : <ChevronDown size={16} color={colors.textMuted} />}
              </div>
            </div>

            {/* Summary stats — always visible */}
            <div style={{ padding: "10px 14px", display: "flex", gap: 6 }}>
              {traineeWorkoutLog.map((d, di) => {
                const isDone = d.completed;
                const isSkipped = !d.completed && !!d.skipReason;
                const isSkippedNote = !d.completed && d.exercises.length === 0 && d.note && !d.skipReason;
                return (
                  <div key={di} onClick={() => {
                    if (isSkipped) {
                      setWorkoutProgressExpanded(true);
                    } else {
                      setWorkoutProgressExpanded(true);
                      setExpandedWorkoutDays({ [d.day]: true });
                      setTimeout(() => {
                        const el = document.getElementById(`workout-day-${d.day}`);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }, 100);
                    }
                  }}
                    style={{ flex: 1, textAlign: "center", padding: "6px 0", borderRadius: 8,
                      background: isDone ? `${colors.success}10` : isSkipped ? `${colors.error}10` : isSkippedNote ? `${colors.warning}10` : colors.surface,
                      cursor: "pointer" }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: isSkipped ? colors.error : colors.textMuted }}>{d.day}</div>
                    <div style={{ fontSize: 12, marginTop: 2 }}>
                      {isDone ? <Check size={12} color={colors.success} /> : isSkipped ? <X size={12} color={colors.error} /> : isSkippedNote ? <X size={12} color={colors.warning} /> : <Circle size={10} color={colors.textMuted} style={{ opacity: 0.3 }} />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Expanded: date filter + per-day/exercise detail */}
            {workoutProgressExpanded && (
              <div style={{ padding: "0 14px 14px" }}>
                {/* Date filter */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10, padding: "8px 10px", background: colors.surface, borderRadius: 10 }}>
                  <Calendar size={12} color={colors.textMuted} />
                  <input type="date" value={workoutDateFrom} onChange={e => setWorkoutDateFrom(e.target.value)}
                    style={{ flex: 1, border: `1px solid ${colors.border}`, borderRadius: 6, padding: "4px 6px", fontSize: 10, color: colors.textPrimary, outline: "none" }} />
                  <span style={{ fontSize: 10, color: colors.textMuted, fontWeight: 600 }}>to</span>
                  <input type="date" value={workoutDateTo} onChange={e => setWorkoutDateTo(e.target.value)}
                    style={{ flex: 1, border: `1px solid ${colors.border}`, borderRadius: 6, padding: "4px 6px", fontSize: 10, color: colors.textPrimary, outline: "none" }} />
                </div>

                {/* Overall note */}
                {traineeWorkoutOverallNote && (
                  <div style={{ padding: "8px 12px", background: `${colors.primary}06`, borderRadius: 10, border: `1px solid ${colors.primary}15`, marginBottom: 10, display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <MessageSquare size={13} color={colors.primary} style={{ marginTop: 1, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: colors.primary, marginBottom: 2 }}>Trainee Note on Plan</div>
                      <div style={{ fontSize: 12, color: colors.textPrimary, lineHeight: 1.4 }}>{traineeWorkoutOverallNote}</div>
                    </div>
                  </div>
                )}

                {traineeWorkoutLog.filter(d => d.completed || d.note || d.skipReason).map((d, di) => {
                  const isDaySkipped = !d.completed && !!d.skipReason;
                  return (
                  <div key={di} id={`workout-day-${d.day}`} style={{ background: isDaySkipped ? `${colors.error}05` : colors.surface, borderRadius: 12, marginBottom: 8, border: `1px solid ${isDaySkipped ? colors.error + "25" : colors.border}`, overflow: "hidden" }}>
                    {/* Day header — clickable to expand */}
                    <div onClick={() => toggleWorkoutDay(d.day)}
                      style={{ padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ fontSize: 12, fontWeight: 800, color: isDaySkipped ? colors.textMuted : colors.textPrimary }}>{d.day}</span>
                        <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 4,
                          background: d.completed ? colors.successLight : isDaySkipped ? `${colors.error}15` : colors.warningLight,
                          color: d.completed ? colors.success : isDaySkipped ? colors.error : colors.warning }}>
                          {d.completed ? "Completed" : isDaySkipped ? "Skipped" : "Not logged"}
                        </span>
                        {d.completed && <span style={{ fontSize: 10, color: colors.textMuted }}>{d.duration}</span>}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        {d.exercises.length > 0 && <span style={{ fontSize: 10, color: colors.textMuted }}>{d.exercises.filter(e => !e.skipped).length}/{d.exercises.length} ex</span>}
                        {expandedWorkoutDays[d.day] ? <ChevronUp size={14} color={isDaySkipped ? colors.error : colors.textMuted} /> : <ChevronDown size={14} color={isDaySkipped ? colors.error : colors.textMuted} />}
                      </div>
                    </div>

                    {/* Skipped day reason — COLLAPSIBLE, click header to expand */}
                    {isDaySkipped && d.skipReason && expandedWorkoutDays[d.day] && (
                      <div style={{ margin: "0 12px 12px", padding: "9px 12px", background: `${colors.error}08`, borderRadius: 9, border: `1px solid ${colors.error}20`, display: "flex", alignItems: "flex-start", gap: 8, animation: "slideUp 0.2s ease" }}>
                        <AlertTriangle size={13} color={colors.error} style={{ flexShrink: 0, marginTop: 1 }} />
                        <div>
                          <div style={{ fontSize: 9, fontWeight: 700, color: colors.error, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 3 }}>{tr("Trainee's reason")}</div>
                          <div style={{ fontSize: 11, color: colors.textSecondary, lineHeight: 1.5 }}>{d.skipReason}</div>
                        </div>
                      </div>
                    )}

                    {/* Non-skipped day: collapsible note + exercises */}
                    {!isDaySkipped && d.note && !expandedWorkoutDays[d.day] && (
                      <div style={{ padding: "0 12px 8px", fontSize: 10, color: colors.textSecondary, fontStyle: "italic" }}>{d.note}</div>
                    )}

                    {/* Expanded day: exercises */}
                    {!isDaySkipped && expandedWorkoutDays[d.day] && (
                      <div style={{ padding: "0 12px 12px" }}>
                        {d.note ? <div style={{ fontSize: 11, color: colors.textSecondary, fontStyle: "italic", marginBottom: 8, padding: "4px 8px", background: `${colors.warning}06`, borderRadius: 6 }}>{d.note}</div> : null}

                        {d.exercises.map((ex, ei) => {
                          const exKey = `${d.day}-${ei}`;
                          const isExSkipped = !!ex.skipped;
                          const completedSets = ex.sets.filter(s => s.done).length;
                          const allDone = !isExSkipped && completedSets === ex.sets.length && ex.sets.length > 0;
                          return (
                            <div key={ei} style={{ background: isExSkipped ? `${colors.error}05` : colors.card, borderRadius: 10, marginBottom: 6, border: `1px solid ${isExSkipped ? colors.error + "25" : colors.border}`, overflow: "hidden" }}>
                              {/* Exercise header — clickable (only if not fully skipped) */}
                              <div onClick={() => !isExSkipped && toggleExercise(exKey)}
                                style={{ padding: "8px 10px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: isExSkipped ? "default" : "pointer" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: isExSkipped ? colors.error : allDone ? colors.success : colors.warning, flexShrink: 0 }} />
                                  <span style={{ fontSize: 12, fontWeight: 700, color: isExSkipped ? colors.textMuted : colors.textPrimary, textDecoration: isExSkipped ? "line-through" : "none" }}>{ex.name}</span>
                                  {isExSkipped && (
                                    <span style={{ fontSize: 9, fontWeight: 700, padding: "1px 6px", borderRadius: 4, background: `${colors.error}15`, color: colors.error, letterSpacing: 0.3 }}>{tr("SKIPPED")}</span>
                                  )}
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                  {!isExSkipped && (
                                    <>
                                      <button onClick={(e) => { e.stopPropagation(); setShowExerciseChart({ name: ex.name, data: getExerciseProgressData(ex.name) }); }}
                                        style={{ width: 28, height: 28, borderRadius: 8, background: `linear-gradient(135deg, ${colors.primary}, #10B981)`, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: `0 3px 8px ${colors.primary}40`, flexShrink: 0 }}>
                                        <TrendingUp size={13} color="#fff" />
                                      </button>
                                      <span style={{ fontSize: 10, fontWeight: 600, color: allDone ? colors.success : colors.warning }}>{completedSets}/{ex.sets.length}</span>
                                      {expandedExercises[exKey] ? <ChevronUp size={12} color={colors.textMuted} /> : <ChevronDown size={12} color={colors.textMuted} />}
                                    </>
                                  )}
                                </div>
                              </div>

                              {/* Skipped exercise reason pill */}
                              {isExSkipped && ex.skipReason && (
                                <div style={{ margin: "0 10px 10px", padding: "7px 10px", background: `${colors.error}08`, borderRadius: 8, border: `1px solid ${colors.error}20`, display: "flex", alignItems: "flex-start", gap: 7 }}>
                                  <AlertTriangle size={12} color={colors.error} style={{ flexShrink: 0, marginTop: 1 }} />
                                  <div>
                                    <div style={{ fontSize: 9, fontWeight: 700, color: colors.error, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 }}>{tr("Trainee's reason")}</div>
                                    <div style={{ fontSize: 11, color: colors.textSecondary, lineHeight: 1.4 }}>{ex.skipReason}</div>
                                  </div>
                                </div>
                              )}

                              {/* Expanded exercise: set details with per-set skip reasons */}
                              {!isExSkipped && expandedExercises[exKey] && (
                                <div style={{ padding: "0 10px 10px" }}>
                                  {ex.sets.map((set, si) => {
                                    const setSkipReason = ex.skippedSets?.find(s => s.setIndex === si)?.reason;
                                    return (
                                      <div key={si} style={{ borderTop: si > 0 ? `1px solid ${colors.border}` : "none" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 0" }}>
                                          <div style={{ width: 20, height: 20, borderRadius: 6, background: set.done ? `${colors.success}15` : `${colors.error}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                            {set.done ? <Check size={10} color={colors.success} /> : <X size={10} color={colors.error} />}
                                          </div>
                                          <span style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, minWidth: 40 }}>Set {si + 1}</span>
                                          <span style={{ fontSize: 11, fontWeight: 700, color: colors.textPrimary }}>{set.weight > 0 ? `${set.weight} kg` : "Bodyweight"}</span>
                                          <span style={{ fontSize: 11, color: colors.textSecondary }}>× {set.reps} reps</span>
                                          {!set.done && <span style={{ fontSize: 9, fontWeight: 600, padding: "1px 6px", borderRadius: 4, background: colors.errorLight, color: colors.error, marginLeft: "auto" }}>{tr("Skipped")}</span>}
                                        </div>
                                        {/* Per-set skip reason */}
                                        {!set.done && setSkipReason && (
                                          <div style={{ marginBottom: 4, marginLeft: 28, padding: "5px 8px", background: `${colors.warning}08`, borderRadius: 6, border: `1px solid ${colors.warning}20`, display: "flex", alignItems: "flex-start", gap: 6 }}>
                                            <MessageSquare size={10} color={colors.warning} style={{ flexShrink: 0, marginTop: 1 }} />
                                            <span style={{ fontSize: 10, color: colors.textSecondary, lineHeight: 1.4, fontStyle: "italic" }}>{setSkipReason}</span>
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  );
                })}
              </div>
            )}
          </div>

          <div style={{ fontSize: 12, fontWeight: 700, color: colors.textMuted, marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>{tr("Workout Plans")}</div>
          {["Week 1 — Fat Burn", "Week 2 — Strength"].map((plan, i) => (
            <div key={i} style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 10, cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: colors.textPrimary }}>{plan}</div>
                  <div style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2 }}>{i === 0 ? "Active · Assigned Feb 10" : "Draft"}</div>
                </div>
                <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 6, background: i === 0 ? colors.successLight : colors.surface, color: i === 0 ? colors.success : colors.textMuted }}>{i === 0 ? "Active" : "Draft"}</span>
              </div>
            </div>
          ))}
          <button onClick={() => onNavigate("workout-builder")}
            style={{ width: "100%", padding: "12px 0", borderRadius: 14, border: `2px dashed ${colors.border}`, background: "transparent", color: colors.primary, fontSize: 13, fontWeight: 600, cursor: "pointer", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <Plus size={14} /> New Workout Plan
          </button>

          {/* ═══ NUTRITION PROGRESS (expandable) ═══ */}
          <div style={{ background: colors.card, borderRadius: 16, border: `1px solid ${colors.success}20`, marginBottom: 14, overflow: "hidden" }}>
            {/* Header — always visible */}
            <div onClick={() => setNutritionProgressExpanded(!nutritionProgressExpanded)}
              style={{ padding: 14, background: `linear-gradient(135deg, ${colors.success}08, ${colors.success}03)`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: `${colors.success}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Apple size={16} color={colors.success} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("Nutrition Progress")}</div>
                  <div style={{ fontSize: 10, color: colors.textMuted }}>{t.weeklyNutrition.done}/{t.weeklyNutrition.total} meals · {t.nutritionAdherence}% adherence</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6, background: colors.successLight, color: colors.success }}>From Trainee</span>
                {nutritionProgressExpanded ? <ChevronUp size={16} color={colors.textMuted} /> : <ChevronDown size={16} color={colors.textMuted} />}
              </div>
            </div>

            {/* Summary day dots — always visible */}
            <div style={{ padding: "10px 14px", display: "flex", gap: 6 }}>
              {traineeNutritionLog.map((d, di) => {
                const pct = d.mealsTotal > 0 ? Math.round((d.mealsLogged / d.mealsTotal) * 100) : 0;
                return (
                  <div key={di} onClick={() => {
                    setNutritionProgressExpanded(true);
                    setExpandedNutritionDays({ [d.day]: true });
                    setTimeout(() => {
                      const el = document.getElementById(`nutrition-day-${d.day}`);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                  }}
                    style={{ flex: 1, textAlign: "center", padding: "6px 0", borderRadius: 8, background: pct === 100 ? `${colors.success}10` : pct > 0 ? `${colors.warning}10` : colors.surface, cursor: "pointer" }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: colors.textMuted }}>{d.day}</div>
                    <div style={{ fontSize: 10, fontWeight: 800, color: pct === 100 ? colors.success : pct > 0 ? colors.warning : colors.textMuted, marginTop: 2 }}>
                      {pct > 0 ? `${d.mealsLogged}/${d.mealsTotal}` : "—"}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Avg water row — always visible */}
            <div style={{ padding: "0 14px 10px", display: "flex", alignItems: "center", gap: 6 }}>
              <Droplets size={13} color="#3B82F6" />
              <span style={{ fontSize: 11, fontWeight: 600, color: colors.textSecondary }}>Avg water:</span>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#3B82F6" }}>
                {(traineeNutritionLog.filter(d => d.waterLiters > 0).reduce((a, d) => a + d.waterLiters, 0) / Math.max(traineeNutritionLog.filter(d => d.waterLiters > 0).length, 1)).toFixed(1)} L/day
              </span>
            </div>

            {/* Expanded: date filter + per-day/meal detail */}
            {nutritionProgressExpanded && (
              <div style={{ padding: "0 14px 14px" }}>
                {/* Date filter */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10, padding: "8px 10px", background: colors.surface, borderRadius: 10 }}>
                  <Calendar size={12} color={colors.textMuted} />
                  <input type="date" value={nutritionDateFrom} onChange={e => setNutritionDateFrom(e.target.value)}
                    style={{ flex: 1, border: `1px solid ${colors.border}`, borderRadius: 6, padding: "4px 6px", fontSize: 10, color: colors.textPrimary, outline: "none" }} />
                  <span style={{ fontSize: 10, color: colors.textMuted, fontWeight: 600 }}>to</span>
                  <input type="date" value={nutritionDateTo} onChange={e => setNutritionDateTo(e.target.value)}
                    style={{ flex: 1, border: `1px solid ${colors.border}`, borderRadius: 6, padding: "4px 6px", fontSize: 10, color: colors.textPrimary, outline: "none" }} />
                </div>

                {/* Overall note */}
                {traineeNutritionOverallNote && (
                  <div style={{ padding: "8px 12px", background: `${colors.success}06`, borderRadius: 10, border: `1px solid ${colors.success}15`, marginBottom: 10, display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <MessageSquare size={13} color={colors.success} style={{ marginTop: 1, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: colors.success, marginBottom: 2 }}>Trainee Note on Plan</div>
                      <div style={{ fontSize: 12, color: colors.textPrimary, lineHeight: 1.4 }}>{traineeNutritionOverallNote}</div>
                    </div>
                  </div>
                )}

                {traineeNutritionLog.filter(d => d.mealsLogged > 0 || d.note).map((d, di) => (
                  <div key={di} id={`nutrition-day-${d.day}`} style={{ background: colors.surface, borderRadius: 12, marginBottom: 8, border: `1px solid ${colors.border}`, overflow: "hidden" }}>
                    {/* Day header — clickable */}
                    <div onClick={() => toggleNutritionDay(d.day)}
                      style={{ padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ fontSize: 12, fontWeight: 800, color: colors.textPrimary }}>{d.day}</span>
                        <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 4, background: d.mealsLogged === d.mealsTotal ? colors.successLight : colors.warningLight, color: d.mealsLogged === d.mealsTotal ? colors.success : colors.warning }}>
                          {d.mealsLogged}/{d.mealsTotal}
                        </span>
                        <span style={{ fontSize: 10, fontWeight: 600, color: "#3B82F6", display: "flex", alignItems: "center", gap: 2 }}><Droplets size={10} /> {d.waterLiters}L</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        {d.extraMeals.length > 0 && <span style={{ fontSize: 9, fontWeight: 600, padding: "1px 5px", borderRadius: 4, background: colors.primaryLight, color: colors.primary }}>+{d.extraMeals.length}</span>}
                        {expandedNutritionDays[d.day] ? <ChevronUp size={14} color={colors.textMuted} /> : <ChevronDown size={14} color={colors.textMuted} />}
                      </div>
                    </div>
                    {d.note && !expandedNutritionDays[d.day] ? <div style={{ padding: "0 12px 8px", fontSize: 10, color: colors.textSecondary, fontStyle: "italic" }}>{d.note}</div> : null}

                    {/* Expanded day: meals */}
                    {expandedNutritionDays[d.day] && (
                      <div style={{ padding: "0 12px 12px" }}>
                        {d.note ? <div style={{ fontSize: 11, color: colors.textSecondary, fontStyle: "italic", marginBottom: 8, padding: "4px 8px", background: `${colors.warning}06`, borderRadius: 6 }}>{d.note}</div> : null}

                        {d.meals.map((m, mi) => {
                          const mealKey = `${d.day}-${mi}`;
                          return (
                            <div key={mi} style={{ background: colors.card, borderRadius: 10, marginBottom: 6, border: `1px solid ${colors.border}`, overflow: "hidden" }}>
                              {/* Meal header — clickable */}
                              <div onClick={() => toggleMeal(mealKey)}
                                style={{ padding: "8px 10px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: m.done ? colors.success : colors.error }} />
                                  <span style={{ fontSize: 12, fontWeight: 600, color: m.done ? colors.textPrimary : colors.textMuted, textDecoration: !m.done ? "line-through" : "none" }}>{m.name}</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                  {m.done && <span style={{ fontSize: 10, fontWeight: 700, color: colors.textSecondary }}>{m.cal} cal</span>}
                                  {!m.done && (d.skippedMeals || []).includes(m.name) && <span style={{ fontSize: 9, fontWeight: 600, padding: "1px 5px", borderRadius: 4, background: colors.warningLight, color: colors.warning }}>{tr("Skipped")}</span>}
                                  {(m.done || m.skipReason) && (expandedMeals[mealKey] ? <ChevronUp size={12} color={colors.textMuted} /> : <ChevronDown size={12} color={colors.textMuted} />)}
                                </div>
                              </div>

                              {/* Skipped meal reason */}
                              {expandedMeals[mealKey] && !m.done && m.skipReason && (
                                <div style={{ padding: "8px 10px 10px", display: "flex", alignItems: "flex-start", gap: 7 }}>
                                  <AlertTriangle size={12} color={colors.warning} style={{ flexShrink: 0, marginTop: 1 }} />
                                  <div>
                                    <div style={{ fontSize: 9, fontWeight: 700, color: colors.warning, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 }}>Reason</div>
                                    <div style={{ fontSize: 11, color: colors.textSecondary, lineHeight: 1.4 }}>{m.skipReason}</div>
                                  </div>
                                </div>
                              )}
                              {/* Expanded meal: food details */}
                              {expandedMeals[mealKey] && m.done && m.foods.length > 0 && (
                                <div style={{ padding: "0 10px 10px" }}>
                                  {m.foods.map((food, fi) => (
                                    <div key={fi} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 0", borderTop: fi > 0 ? `1px solid ${colors.border}` : "none" }}>
                                      <span style={{ fontSize: 11, color: colors.textPrimary, flex: 1 }}>• {typeof food === "string" ? food : food.name}</span>
                                      {typeof food !== "string" && food.weight && (
                                        <span style={{ fontSize: 10, fontWeight: 700, color: colors.primary, background: `${colors.primary}12`, padding: "1px 7px", borderRadius: 6, border: `1px solid ${colors.primary}20`, flexShrink: 0 }}>{food.weight}g</span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}

                        {/* Extra meals added by trainee */}
                        {d.extraMeals.length > 0 && (
                          <div style={{ marginTop: 4, padding: "8px 10px", background: `${colors.primary}05`, borderRadius: 8, border: `1px dashed ${colors.primary}25` }}>
                            <div style={{ fontSize: 9, fontWeight: 700, color: colors.primary, marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>Added by Trainee</div>
                            {d.extraMeals.map((em, ei) => (
                              <div key={ei} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "3px 0" }}>
                                <span style={{ fontSize: 11, fontWeight: 600, color: colors.primary }}>{em.name}</span>
                                <span style={{ fontSize: 10, fontWeight: 700, color: colors.textSecondary }}>{em.cal} cal</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ fontSize: 12, fontWeight: 700, color: colors.textMuted, marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>{tr("Nutrition Plans")}</div>
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: colors.textPrimary }}>Lean Cut — 2,100 cal</div>
                <div style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2 }}>Active · P:150g C:230g F:70g</div>
              </div>
              <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 6, background: colors.successLight, color: colors.success }}>{tr("Active")}</span>
            </div>
          </div>
          <button onClick={() => onNavigate("nutrition-builder")}
            style={{ width: "100%", padding: "12px 0", borderRadius: 14, border: `2px dashed ${colors.border}`, background: "transparent", color: colors.success, fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <Plus size={14} /> New Nutrition Plan
          </button>
        </div>
      )}

      {/* ── PROGRESS TAB ── */}
      {activeTab === "progress" && (
        <div style={{ padding: "0 20px" }}>
          {/* Weight Trend (mirrored from trainee) */}
          {t.weightTrend.length > 0 && (
            <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("Weight Trend")}</div>
                <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6, background: colors.primaryLight, color: colors.primary }}>From Trainee</span>
              </div>
              <svg viewBox="0 0 300 100" style={{ width: "100%", height: 100 }}>
                <defs><linearGradient id="wgpc" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={colors.primary} stopOpacity="0.15"/><stop offset="100%" stopColor={colors.primary} stopOpacity="0"/></linearGradient></defs>
                {t.weightTrend.length > 1 && (() => {
                  const min = Math.min(...t.weightTrend) - 1;
                  const max = Math.max(...t.weightTrend) + 1;
                  const range = max - min || 1;
                  const pts = t.weightTrend.map((w, i) => ({
                    x: 20 + (i / (t.weightTrend.length - 1)) * 260,
                    y: 10 + ((max - w) / range) * 70
                  }));
                  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
                  const area = line + ` L${pts[pts.length-1].x},90 L${pts[0].x},90 Z`;
                  const last = pts[pts.length - 1];
                  return (
                    <>
                      <path d={area} fill="url(#wgpc)" />
                      <path d={line} fill="none" stroke={colors.primary} strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx={last.x} cy={last.y} r="5" fill={colors.primary} stroke="#fff" strokeWidth="2" />
                      <text x={last.x - 10} y={last.y - 10} fontSize="10" fill={colors.primary} fontWeight="700">{t.weightTrend[t.weightTrend.length-1]}</text>
                      {["W1","W2","W3","W4","W5"].slice(0, t.weightTrend.length).map((w, i) => (
                        <text key={i} x={pts[i].x} y="96" fontSize="9" fill={colors.textMuted} textAnchor="middle">{w}</text>
                      ))}
                    </>
                  );
                })()}
              </svg>
            </div>
          )}

          {/* Adherence bars */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary, marginBottom: 14 }}>{tr("This Week")}</div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: colors.textSecondary }}>{tr("Workouts")}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: adherenceColor(t.workoutAdherence) }}>{t.weeklyWorkouts.done}/{t.weeklyWorkouts.total}</span>
              </div>
              <ProgressBar value={t.weeklyWorkouts.done} max={Math.max(t.weeklyWorkouts.total, 1)} color={adherenceColor(t.workoutAdherence)} />
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: colors.textSecondary }}>{tr("Nutrition")}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: adherenceColor(t.nutritionAdherence) }}>{t.weeklyNutrition.done}/{t.weeklyNutrition.total}</span>
              </div>
              <ProgressBar value={t.weeklyNutrition.done} max={Math.max(t.weeklyNutrition.total, 1)} color={adherenceColor(t.nutritionAdherence)} />
            </div>
          </div>

          {/* Body Measurements (mirrored from trainee) */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("Body Measurements")}</div>
              <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6, background: colors.primaryLight, color: colors.primary }}>From Trainee</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {Object.entries(bodyMeasurements).map(([key, val]) => (
                <div key={key} style={{ flex: "1 1 calc(33% - 8px)", minWidth: 80, background: colors.surface, borderRadius: 10, padding: "10px 8px", textAlign: "center" }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: colors.textPrimary }}>{val}</div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: colors.textMuted, textTransform: "capitalize", marginTop: 2 }}>{key} (cm)</div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Photos (mirrored from trainee — expandable) */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Camera size={15} color={colors.primary} />
                <span style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("Progress Photos")}</span>
                <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 5, background: colors.surface, color: colors.textMuted }}>{traineeProgressPhotos.length} sets</span>
              </div>
              <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6, background: colors.primaryLight, color: colors.primary }}>From Trainee</span>
            </div>
            {/* Date filter for photos */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12, padding: "6px 10px", background: colors.surface, borderRadius: 8 }}>
              <Calendar size={11} color={colors.textMuted} />
              <input type="date" value={photosDateFrom} onChange={e => setPhotosDateFrom(e.target.value)} placeholder="From"
                style={{ flex: 1, border: `1px solid ${colors.border}`, borderRadius: 6, padding: "3px 6px", fontSize: 10, color: colors.textPrimary, outline: "none" }} />
              <span style={{ fontSize: 10, color: colors.textMuted, fontWeight: 600 }}>to</span>
              <input type="date" value={photosDateTo} onChange={e => setPhotosDateTo(e.target.value)} placeholder="To"
                style={{ flex: 1, border: `1px solid ${colors.border}`, borderRadius: 6, padding: "3px 6px", fontSize: 10, color: colors.textPrimary, outline: "none" }} />
            </div>
            {(() => {
              const visiblePhotos = photosExpanded ? traineeProgressPhotos : traineeProgressPhotos.slice(0, 1);
              return visiblePhotos.map((set, si) => (
                <div key={si} style={{ marginBottom: si < visiblePhotos.length - 1 ? 12 : 0 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, marginBottom: 6 }}>{set.date}</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {set.photos.map((photo, pi) => (
                      <div key={pi} style={{ flex: 1, aspectRatio: "3/4", background: photo.bg, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                        <Camera size={20} color={colors.textMuted} style={{ opacity: 0.4 }} />
                        <span style={{ position: "absolute", bottom: 6, left: 0, right: 0, textAlign: "center", fontSize: 9, fontWeight: 600, color: colors.textMuted }}>{photo.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ));
            })()}
            {traineeProgressPhotos.length > 1 && (
              <button onClick={() => setPhotosExpanded(!photosExpanded)}
                style={{ width: "100%", padding: "8px 0", marginTop: 10, borderRadius: 10, border: `1px solid ${colors.border}`, background: colors.surface, fontSize: 12, fontWeight: 600, color: colors.primary, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                {photosExpanded ? <><ChevronUp size={14} /> Show Less</> : <>Show {traineeProgressPhotos.length - 1} More Set{traineeProgressPhotos.length - 1 > 1 ? "s" : ""} <ChevronDown size={14} /></>}
              </button>
            )}
          </div>

          {/* InBody Reports Section */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Activity size={15} color="#8B5CF6" />
                <span style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("InBody Reports")}</span>
                <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 5, background: colors.surface, color: colors.textMuted }}>{traineeInbodyReports.length}</span>
              </div>
              <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6, background: "#8B5CF610", color: "#8B5CF6" }}>From Trainee</span>
            </div>
            {(inbodyExpanded ? traineeInbodyReports : traineeInbodyReports.slice(0, 2)).map((report, ri) => (
              <div key={ri} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: report.bg + "20", borderRadius: 10, marginBottom: ri < (inbodyExpanded ? traineeInbodyReports.length : Math.min(traineeInbodyReports.length, 2)) - 1 ? 8 : 0, border: `1px solid ${report.bg}` }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: report.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {report.type === "PDF" ? <FileText size={18} color="#6D28D9" /> : <Image size={18} color="#2563EB" />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: colors.textPrimary }}>{report.label}</div>
                  <div style={{ fontSize: 10, color: colors.textMuted }}>{report.date} · {report.type}</div>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <button style={{ width: 28, height: 28, borderRadius: 7, background: colors.surface, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <Eye size={13} color={colors.textSecondary} />
                  </button>
                  <button style={{ width: 28, height: 28, borderRadius: 7, background: colors.surface, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <Download size={13} color={colors.textSecondary} />
                  </button>
                </div>
              </div>
            ))}
            {traineeInbodyReports.length > 2 && (
              <button onClick={() => setInbodyExpanded(!inbodyExpanded)}
                style={{ width: "100%", padding: "8px 0", marginTop: 10, borderRadius: 10, border: `1px solid ${colors.border}`, background: colors.surface, fontSize: 12, fontWeight: 600, color: "#8B5CF6", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                {inbodyExpanded ? <><ChevronUp size={14} /> Show Less</> : <>Show All <ChevronDown size={14} /></>}
              </button>
            )}
          </div>

          {/* Trainee Feedback (item 7) */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
              <MessageSquare size={15} color="#8B5CF6" />
              <span style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("Trainee Feedback")}</span>
            </div>
            {traineeFeedbackEntries.map((entry, i) => (
              <div key={i} style={{ padding: "10px 12px", background: i === 0 ? "#8B5CF608" : colors.surface, borderRadius: 10, marginBottom: i < traineeFeedbackEntries.length - 1 ? 8 : 0, border: i === 0 ? "1px solid #8B5CF620" : `1px solid ${colors.border}` }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted }}>{entry.date}</span>
                  {i === 0 && <span style={{ fontSize: 9, fontWeight: 600, padding: "1px 6px", borderRadius: 4, background: "#8B5CF620", color: "#8B5CF6" }}>Latest</span>}
                </div>
                <div style={{ fontSize: 12, color: colors.textPrimary, lineHeight: 1.5 }}>{entry.text}</div>
              </div>
            ))}
          </div>

          {/* Coach Feedback & Caution (item 8) */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
              <Edit3 size={15} color={colors.primary} />
              <span style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("Coach Notes")}</span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: colors.textSecondary, marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
                <FileText size={11} color={colors.primary} /> Feedback for {t.name.split(" ")[0]}
              </div>
              <textarea value={coachFeedback} onChange={e => setCoachFeedback(e.target.value)}
                placeholder="Write your feedback here... This will be visible to the trainee."
                rows={3}
                style={{ width: "100%", borderRadius: 10, border: `1.5px solid ${colors.border}`, padding: "10px 12px", fontSize: 12, color: colors.textPrimary, outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: colors.warning, marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
                <AlertTriangle size={11} color={colors.warning} /> Caution / Medical Notes
              </div>
              <textarea value={coachCaution} onChange={e => setCoachCaution(e.target.value)}
                placeholder="Injuries, restrictions, things to watch out for..."
                rows={2}
                style={{ width: "100%", borderRadius: 10, border: `1.5px solid ${colors.warning}30`, padding: "10px 12px", fontSize: 12, color: colors.textPrimary, outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", background: colors.warningLight }} />
            </div>
            {(coachFeedback || coachCaution) && (
              <button onClick={() => onShowToastr("Notes saved")}
                style={{ marginTop: 10, width: "100%", padding: "10px 0", borderRadius: 10, border: "none", background: colors.primary, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                Save Notes
              </button>
            )}
          </div>

          {/* Goals (item 9) */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Target size={15} color={colors.success} />
                <span style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("Goals")}</span>
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted }}>{traineeGoals.filter(g => g.completed).length}/{traineeGoals.length} done</span>
            </div>
            {traineeGoals.map((goal) => (
              <div key={goal.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: `1px solid ${colors.border}` }}>
                <button onClick={() => setTraineeGoals(traineeGoals.map(g => g.id === goal.id ? { ...g, completed: !g.completed } : g))}
                  style={{ width: 24, height: 24, borderRadius: 8, border: goal.completed ? "none" : `2px solid ${colors.border}`, background: goal.completed ? colors.success : "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                  {goal.completed && <Check size={14} color="#fff" />}
                </button>
                <span style={{ fontSize: 13, color: goal.completed ? colors.textMuted : colors.textPrimary, fontWeight: 500, textDecoration: goal.completed ? "line-through" : "none", flex: 1 }}>{goal.text}</span>
                <button onClick={() => setTraineeGoals(traineeGoals.filter(g => g.id !== goal.id))}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
                  <X size={14} color={colors.textMuted} />
                </button>
              </div>
            ))}
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <input value={newGoalText} onChange={e => setNewGoalText(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter" && newGoalText.trim()) {
                    setTraineeGoals([...traineeGoals, { id: Date.now(), text: newGoalText.trim(), completed: false }]);
                    setNewGoalText("");
                  }
                }}
                placeholder="Add a new goal..."
                style={{ flex: 1, height: 38, borderRadius: 10, border: `1.5px solid ${colors.border}`, padding: "0 12px", fontSize: 12, color: colors.textPrimary, outline: "none", boxSizing: "border-box" }} />
              <button onClick={() => {
                  if (newGoalText.trim()) {
                    setTraineeGoals([...traineeGoals, { id: Date.now(), text: newGoalText.trim(), completed: false }]);
                    setNewGoalText("");
                  }
                }}
                style={{ width: 38, height: 38, borderRadius: 10, border: "none", background: newGoalText.trim() ? colors.success : colors.surface, color: newGoalText.trim() ? "#fff" : colors.textMuted, display: "flex", alignItems: "center", justifyContent: "center", cursor: newGoalText.trim() ? "pointer" : "default" }}>
                <Plus size={18} />
              </button>
            </div>
          </div>

          {/* Milestones */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}` }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary, marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: "linear-gradient(135deg, #FBBF24, #F97316)", display: "flex", alignItems: "center", justifyContent: "center" }}><Trophy size={11} color="#fff" strokeWidth={2.5} /></div>
              Milestones
            </div>
            {t.streak >= 7 && (
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg, #F97316, #EF4444)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 3px 8px rgba(239,68,68,0.3)" }}>
                  <Flame size={14} color="#fff" strokeWidth={2.2} />
                </div>
                <span style={{ fontSize: 13, color: colors.textPrimary, fontWeight: 600 }}>{t.streak}-day streak — {tr("on fire!")}</span>
              </div>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg, #A78BFA, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 3px 8px rgba(139,92,246,0.3)" }}>
                <Star size={14} color="#fff" strokeWidth={2.2} fill="#fff" />
              </div>
              <span style={{ fontSize: 13, color: colors.textPrimary, fontWeight: 500 }}>Joined {t.joined}</span>
            </div>
          </div>
        </div>
      )}

      {/* ── SETTINGS TAB ── */}
      {activeTab === "settings" && (
        <div style={{ padding: "0 20px" }}>
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary, marginBottom: 14 }}>{tr("Trainee Info")}</div>
            {[["Name", t.name], ["Email", t.email], ["Goal", t.goal], ["Level", t.level], ["Notes", t.note || "—"]].map(([label, val], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderTop: i > 0 ? `1px solid ${colors.border}` : "none" }}>
                <span style={{ fontSize: 13, color: colors.textMuted, fontWeight: 600 }}>{label}</span>
                <span style={{ fontSize: 13, color: colors.textPrimary, fontWeight: 500, textAlign: "right", maxWidth: "60%" }}>{val}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {t.status === "inactive" ? (
              <button onClick={onReactivate}
                style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: `1.5px solid ${colors.success}`, background: colors.successLight, color: colors.success, fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <UserCheck size={16} /> Reactivate Trainee
              </button>
            ) : (
              <button onClick={onArchive}
                style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: `1.5px solid ${colors.warning}`, background: colors.warningLight, color: colors.warning, fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <Archive size={16} /> Archive Trainee
              </button>
            )}
            <button onClick={onDelete}
              style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: `1.5px solid ${colors.error}`, background: colors.errorLight, color: colors.error, fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <Trash2 size={16} /> Delete Trainee Permanently
            </button>
          </div>
        </div>
      )}

      {/* Trainee History Popup */}
      {showTraineeHistory && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 300, padding: 20 }}>
          <div style={{ background: colors.card, borderRadius: 22, width: "100%", maxWidth: 400, maxHeight: "80vh", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.3)", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "18px 20px 12px", borderBottom: `1px solid ${colors.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: colors.textPrimary }}>Health & Training History</div>
                <div style={{ fontSize: 12, color: colors.textSecondary }}>{t.name}</div>
              </div>
              <button onClick={() => setShowTraineeHistory(false)} style={{ background: colors.surface, border: "none", borderRadius: 8, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <X size={16} color={colors.textMuted} />
              </button>
            </div>
            <div style={{ padding: "16px 20px", overflowY: "auto", flex: 1 }}>
              {[
                { label: "Goal", value: traineeHistory.goal, icon: Target, color: colors.primary },
                { label: "Training Experience", value: traineeHistory.trainingDuration, icon: Dumbbell, color: colors.primary },
                { label: "Previous Training", value: traineeHistory.previousTraining, icon: Clock, color: "#8B5CF6" },
                { label: "Reason for Stopping", value: traineeHistory.stopReason, icon: AlertTriangle, color: colors.warning },
                { label: "Diseases / Conditions", value: traineeHistory.diseases, icon: Activity, color: colors.error },
                { label: "Allergies", value: traineeHistory.allergies, icon: AlertTriangle, color: "#F97316" },
                { label: "Injuries", value: traineeHistory.injuries, icon: Shield, color: colors.error },
                { label: "Medications", value: traineeHistory.medications, icon: FileText, color: "#3B82F6" },
                { label: "Availability", value: traineeHistory.availability, icon: Calendar, color: colors.success },
                { label: "Dietary Preferences", value: traineeHistory.dietaryPreferences, icon: Apple, color: colors.success },
                { label: "Sleep Pattern", value: traineeHistory.sleepPattern, icon: Moon, color: "#8B5CF6" },
                { label: "Daily Hydration", value: traineeHistory.hydration, icon: Droplets, color: "#3B82F6" },
                { label: "Occupation", value: traineeHistory.occupation, icon: Globe, color: colors.textSecondary },
                { label: "Additional Notes", value: traineeHistory.notes, icon: Edit3, color: colors.primary },
              ].map((field, i) => (
                <div key={i} style={{ marginBottom: 12, padding: "10px 12px", background: colors.surface, borderRadius: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                    <field.icon size={12} color={field.color} />
                    <span style={{ fontSize: 10, fontWeight: 700, color: field.color, textTransform: "uppercase", letterSpacing: 0.5 }}>{field.label}</span>
                  </div>
                  <div style={{ fontSize: 13, color: colors.textPrimary, lineHeight: 1.4 }}>{field.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>

      {/* ── Exercise Weight Progress Chart Popup ── */}
      {showExerciseChart && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
          onClick={() => setShowExerciseChart(null)}>
          <div onClick={e => e.stopPropagation()} style={{ width: "100%", maxWidth: 400, background: colors.card, borderRadius: 20, padding: 20, boxShadow: "0 20px 60px rgba(0,0,0,0.3)", animation: "fadeScale 0.2s ease" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: colors.textPrimary }}>{showExerciseChart.name}</div>
                <div style={{ fontSize: 11, color: colors.textMuted, marginTop: 1 }}>Weight Progress Over Sessions</div>
              </div>
              <button onClick={() => setShowExerciseChart(null)} style={{ width: 28, height: 28, borderRadius: "50%", background: colors.surface, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <X size={14} color={colors.textMuted} />
              </button>
            </div>
            {(() => {
              const data = showExerciseChart.data;
              const weights = data.map(d => d.weight);
              const minW = Math.min(...weights) - 5;
              const maxW = Math.max(...weights) + 5;
              const range = maxW - minW || 1;
              const pts = data.map((d, i) => ({
                x: 20 + (i / (data.length - 1)) * 270,
                y: 10 + ((maxW - d.weight) / range) * 80,
                d
              }));
              const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
              const area = line + ` L${pts[pts.length-1].x},100 L${pts[0].x},100 Z`;
              const last = pts[pts.length - 1];
              const first = pts[0];
              const isUp = last.d.weight >= first.d.weight;
              const diff = last.d.weight - first.d.weight;
              return (
                <>
                  <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                    <div style={{ flex: 1, background: isUp ? `${colors.success}10` : `${colors.error}10`, borderRadius: 10, padding: "8px 10px", textAlign: "center" }}>
                      <div style={{ fontSize: 11, color: colors.textMuted, fontWeight: 600 }}>Current</div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: colors.textPrimary }}>{last.d.weight} kg</div>
                    </div>
                    <div style={{ flex: 1, background: isUp ? `${colors.success}10` : `${colors.error}10`, borderRadius: 10, padding: "8px 10px", textAlign: "center" }}>
                      <div style={{ fontSize: 11, color: colors.textMuted, fontWeight: 600 }}>{tr("Change")}</div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: isUp ? colors.success : colors.error }}>{isUp ? "+" : ""}{diff} kg</div>
                    </div>
                  </div>
                  <svg viewBox="0 0 310 110" style={{ width: "100%", height: 110 }}>
                    <defs>
                      <linearGradient id="exChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={isUp ? colors.success : colors.error} stopOpacity="0.18"/>
                        <stop offset="100%" stopColor={isUp ? colors.success : colors.error} stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path d={area} fill="url(#exChartGrad)" />
                    <path d={line} fill="none" stroke={isUp ? colors.success : colors.error} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    {pts.map((p, i) => (
                      <g key={i}>
                        <circle cx={p.x} cy={p.y} r="4" fill={isUp ? colors.success : colors.error} stroke="#fff" strokeWidth="2" />
                        <text x={p.x} y="108" fontSize="8" fill={colors.textMuted} textAnchor="middle">{p.d.session}</text>
                      </g>
                    ))}
                    <text x={last.x + 6} y={last.y - 6} fontSize="9" fill={isUp ? colors.success : colors.error} fontWeight="700">{last.d.weight}kg</text>
                  </svg>
                  <div style={{ marginTop: 8, fontSize: 11, color: colors.textSecondary, textAlign: "center" }}>
                    {isUp ? `Weight increased by ${diff} kg over ${data.length} sessions` : `Weight decreased by ${Math.abs(diff)} kg over ${data.length} sessions`}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
}

// ═══════════════════════════════════════════════════════
// COACH SCREENS
// ═══════════════════════════════════════════════════════

function CoachDashboard({ onNavigate, onShowToast, freemium = {}, onOpenTrainee }) {
  const { isPremium, clientCount = 0, CLIENT_FREE_LIMIT = 3, canAddClient, workoutSets = [], nutritionSets = [], onUpgrade } = freemium;
  // Use shared trainee data
  const active = allTraineesData.filter(t => t.status === "active");
  const pending = allTraineesData.filter(t => t.status === "pending");
  const needsAttention = allTraineesData.filter(t => t.alerts && t.alerts.length > 0);
  const avgAdherence = active.length > 0 ? Math.round(active.reduce((a, t) => a + t.adherence, 0) / active.length) : 0;

  // Today's sessions
  const todaySessions = allTraineesData.filter(t => t.nextSession && t.nextSession.startsWith("Today")).map(t => ({
    ...t,
    sessionTime: t.nextSession.replace("Today, ", ""),
  }));

  // Top performers
  const topPerformers = [...active].sort((a, b) => b.adherence - a.adherence).slice(0, 3);

  // Recent activity feed
  const activityFeed = [
    { icon: CheckCircle2, color: colors.success, text: tr("Lina R. completed today's workout"), subtext: tr("6/6 exercises · 30 min ago"), trainee: "Lina R." },
    { icon: Apple, color: colors.success, text: tr("Fatima Z. logged all meals"), subtext: tr("Breakfast + Lunch + Snack · 1 hr ago"), trainee: "Fatima Z." },
    { icon: TrendingUp, color: colors.primary, text: tr("Sarah M. hit a new PR"), subtext: tr("Squat 65kg → 70kg · 2 hrs ago"), trainee: "Sarah M." },
    { icon: AlertTriangle, color: colors.warning, text: tr("Ahmed K. skipped nutrition log"), subtext: tr("No meals logged today · 4 hrs ago"), trainee: "Ahmed K." },
    { icon: MessageSquare, color: colors.primary, text: tr("Karim S. sent you a message"), subtext: tr("\"Coach, about tomorrow's plan...\" · 5 hrs ago"), trainee: "Karim S." },
    { icon: UserPlus, color: colors.textMuted, text: tr("Dana M. invitation sent"), subtext: tr("Pending acceptance · Just now"), trainee: "Dana M." },
  ];

  // Greeting based on time
  const hour = new Date().getHours();
  const greeting = hour < 12 ? tr("Good morning") : hour < 17 ? tr("Good afternoon") : tr("Good evening");

  // Dynamic date in Arabic or English
  const now = new Date();
  const dateStr = _lang === "Arabic"
    ? now.toLocaleDateString("ar-EG", { weekday: "long", month: "long", day: "numeric" })
    : now.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });

  // Adherence color helper
  const adherenceColor = (pct) => pct >= 80 ? colors.success : pct >= 60 ? colors.warning : colors.error;

  // Expandable sections state
  const [activityExpanded, setActivityExpanded] = useState(false);
  const [invitationsExpanded, setInvitationsExpanded] = useState(false);

  return (
    <div style={{ paddingBottom: 20 }}>
      {/* ─── GREETING + DATE ─── */}
      <div style={{ padding: "0 20px", marginBottom: 20 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: colors.textPrimary, lineHeight: 1.2, marginBottom: 2 }}>{greeting}, Mahmoud</h1>
        <p style={{ fontSize: 13, color: colors.textSecondary }}>
          {dateStr} · {todaySessions.length} {todaySessions.length !== 1 ? tr("sessions") : tr("session")} {tr("today")}
          {needsAttention.length > 0 && <span style={{ color: colors.error, fontWeight: 600 }}> · {needsAttention.length} {tr("need attention")}</span>}
        </p>
      </div>

      {/* ─── ADD TRAINEE CTA / UPGRADE PROMPT ─── */}
      <div style={{ padding: "0 20px", marginBottom: 16 }}>
        {canAddClient ? (
          <button onClick={() => onNavigate("coach-trainees")}
            style={{ width: "100%", padding: "15px 20px", borderRadius: 16, border: "none", background: `linear-gradient(135deg, ${colors.primary} 0%, #10B981 100%)`, color: "#fff", fontSize: 15, fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, boxShadow: "0 8px 24px rgba(52,211,153,0.35)", letterSpacing: -0.2 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <UserPlus size={18} color="#fff" />
            </div>
            {tr("Add New Trainee")}
            <ChevronRight size={18} color="rgba(255,255,255,0.8)" style={{ marginLeft: "auto" }} />
          </button>
        ) : (
          <div style={{ borderRadius: 16, border: `1.5px solid ${colors.warning}40`, background: colors.card, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <div style={{ padding: "12px 16px", background: `linear-gradient(135deg, ${colors.warning}12, ${colors.warning}06)`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: `${colors.warning}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Lock size={15} color={colors.warning} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("Client limit reached")}</div>
                  <div style={{ fontSize: 10, color: colors.textMuted, marginTop: 1 }}>{CLIENT_FREE_LIMIT}/{CLIENT_FREE_LIMIT} {tr("slots used on free plan")}</div>
                </div>
              </div>
              <button onClick={onUpgrade} style={{ padding: "7px 14px", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #7C3AED, #34D399)", color: "#fff", fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, boxShadow: "0 4px 12px rgba(124,58,237,0.3)" }}>
                <Zap size={12} fill="#fff" color="#fff" /> {tr("Upgrade")}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions removed */}

      {/* ─── KPI STAT CARDS ─── */}
      <div style={{ display: "flex", gap: 8, padding: "0 20px", marginBottom: 20 }}>
        <div onClick={() => onNavigate("coach-trainees")} style={{ flex: 1, background: colors.card, borderRadius: 14, padding: "14px 10px", textAlign: "center", border: `1px solid ${colors.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", cursor: "pointer" }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: colors.primary, letterSpacing: -0.5 }}>{active.length}</div>
          <div style={{ fontSize: 10, fontWeight: 600, color: colors.textMuted, marginTop: 2, letterSpacing: 0.2, textTransform: "uppercase" }}>{tr("Active")}</div>
        </div>
        <div onClick={() => onNavigate("coach-trainees")} style={{ flex: 1, background: colors.card, borderRadius: 14, padding: "14px 10px", textAlign: "center", border: `1px solid ${colors.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", cursor: "pointer" }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: avgAdherence >= 75 ? colors.success : colors.warning, letterSpacing: -0.5 }}>{avgAdherence}%</div>
          <div style={{ fontSize: 10, fontWeight: 600, color: colors.textMuted, marginTop: 2, letterSpacing: 0.2, textTransform: "uppercase" }}>{tr("Avg Adherence")}</div>
        </div>
        <div style={{ flex: 1, background: colors.card, borderRadius: 14, padding: "14px 10px", textAlign: "center", border: `1px solid ${colors.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: colors.textPrimary, letterSpacing: -0.5 }}>{todaySessions.length}</div>
          <div style={{ fontSize: 10, fontWeight: 600, color: colors.textMuted, marginTop: 2, letterSpacing: 0.2, textTransform: "uppercase" }}>{tr("Sessions Today")}</div>
        </div>
        <div style={{ flex: 1, background: needsAttention.length > 0 ? colors.errorLight : colors.card, borderRadius: 14, padding: "14px 10px", textAlign: "center", border: `1px solid ${needsAttention.length > 0 ? colors.error + "25" : colors.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", cursor: "pointer" }} onClick={() => onNavigate("coach-trainees")}>
          <div style={{ fontSize: 24, fontWeight: 900, color: needsAttention.length > 0 ? colors.error : colors.textMuted, letterSpacing: -0.5 }}>{needsAttention.length}</div>
          <div style={{ fontSize: 10, fontWeight: 600, color: needsAttention.length > 0 ? colors.error : colors.textMuted, marginTop: 2, letterSpacing: 0.2, textTransform: "uppercase" }}>{tr("Alerts")}</div>
        </div>
      </div>

      {/* ─── NEEDS ATTENTION (Priority Section) ─── */}
      {needsAttention.length > 0 && (
        <div style={{ padding: "0 20px", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: colors.error, animation: "typingDot 2s infinite" }} />
              <span style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("Needs Attention")}</span>
            </div>
            <button onClick={() => onNavigate("coach-trainees")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, color: colors.primary }}>{tr("View all")}</button>
          </div>
          {needsAttention.slice(0, 3).map((t, i) => {
            const alertMessages = {
              missed: { text: tr("Missed 2+ workouts this week"), bg: colors.errorLight, border: "#FECACA", dotColor: colors.error },
              nutrition: { text: tr("Nutrition adherence dropped to") + " " + t.nutritionAdherence + "%", bg: colors.warningLight, border: "#FDE68A", dotColor: colors.warning },
              noLogin: { text: tr("No login for 5+ days"), bg: colors.surface, border: colors.border, dotColor: colors.textMuted },
              plateau: { text: tr("Weight plateau for 3+ weeks"), bg: "#EDE9FE", border: "#C4B5FD", dotColor: "#8B5CF6" },
            };
            const primaryAlert = t.alerts[0];
            const alertInfo = alertMessages[primaryAlert] || alertMessages.missed;
            return (
              <div key={t.id} onClick={() => onOpenTrainee && onOpenTrainee(t.id)}
                style={{ background: alertInfo.bg, borderRadius: 14, padding: "12px 14px", marginBottom: 8, display: "flex", alignItems: "center", gap: 12, cursor: "pointer", border: `1px solid ${alertInfo.border}`, transition: "transform 0.15s" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative" }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: alertInfo.dotColor }}>{t.avatar}</span>
                  <div style={{ position: "absolute", top: -2, right: -2, width: 14, height: 14, borderRadius: "50%", background: alertInfo.dotColor, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid " + alertInfo.bg }}>
                    <span style={{ fontSize: 8, fontWeight: 800, color: "#fff" }}>{t.alerts.length}</span>
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{t.name}</span>
                    <span style={{ fontSize: 11, color: colors.textSecondary }}>{t.adherence}%</span>
                  </div>
                  <div style={{ fontSize: 12, color: colors.textSecondary, marginTop: 1 }}>{alertInfo.text}</div>
                </div>
                <ChevronRight size={16} color={colors.textMuted} style={{ flexShrink: 0 }} />
              </div>
            );
          })}
        </div>
      )}

      {/* ─── TODAY'S SCHEDULE ─── */}
      {todaySessions.length > 0 && (
        <div style={{ padding: "0 20px", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Calendar size={15} color={colors.primary} />
              <span style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("Today's Sessions")}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4 }}>
            {todaySessions.map((t, i) => (
              <div key={t.id} onClick={() => onOpenTrainee && onOpenTrainee(t.id)}
                style={{ minWidth: 150, background: colors.card, borderRadius: 16, padding: 14, border: `1px solid ${colors.border}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", cursor: "pointer", flexShrink: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: colors.primaryLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: colors.primary }}>{t.avatar}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: colors.textSecondary }}>{tr(t.goal)}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 8 }}>
                  <Clock size={13} color={colors.primary} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: colors.primary }}>{tr(t.sessionTime)}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <div style={{ flex: 1, height: 4, background: colors.surface, borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ width: `${t.adherence}%`, height: "100%", background: t.adherence >= 80 ? colors.success : t.adherence >= 60 ? colors.warning : colors.error, borderRadius: 2 }} />
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 600, color: t.adherence >= 80 ? colors.success : t.adherence >= 60 ? colors.warning : colors.error }}>{t.adherence}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions section removed */}

      {/* ─── TOP PERFORMERS ─── */}
      <div style={{ padding: "0 20px", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Award size={15} color={colors.warning} />
            <span style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("Top Performers")}</span>
          </div>
          <button onClick={() => onNavigate("coach-trainees")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, color: colors.primary }}>{tr("View all")}</button>
        </div>
        <div style={{ background: colors.card, borderRadius: 16, border: `1px solid ${colors.border}`, overflow: "hidden" }}>
          {topPerformers.map((t, i) => (
            <div key={t.id} onClick={() => onOpenTrainee && onOpenTrainee(t.id)}
              style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer",
                borderBottom: i < topPerformers.length - 1 ? `1px solid ${colors.border}` : "none" }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                background: i === 0 ? "#FEF3C7" : i === 1 ? colors.surface : colors.surface }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: i === 0 ? colors.warning : colors.textMuted }}>{i + 1}</span>
              </div>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: colors.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: colors.primary }}>{t.avatar}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>{t.name}</div>
                <div style={{ fontSize: 11, color: colors.textSecondary }}>{tr(t.goal)} · {t.streak > 0 ? <span style={{ display: "inline-flex", alignItems: "center", gap: 2 }}><Flame size={10} color="#F97316" strokeWidth={2.5} /> {t.streak}{tr("-day streak")}</span> : tr("No streak yet")}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: colors.success }}>{t.adherence}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── RECENT ACTIVITY FEED (expandable) ─── */}
      <div style={{ padding: "0 20px", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Activity size={15} color={colors.textSecondary} />
            <span style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("Recent Activity")}</span>
          </div>
          {activityFeed.length > 2 && (
            <button onClick={() => setActivityExpanded(!activityExpanded)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, color: colors.primary, display: "flex", alignItems: "center", gap: 4 }}>
              {activityExpanded ? <><ChevronUp size={14} /> {tr("Less")}</> : <>{tr("All")} ({activityFeed.length}) <ChevronDown size={14} /></>}
            </button>
          )}
        </div>
        <div style={{ background: colors.card, borderRadius: 16, border: `1px solid ${colors.border}`, overflow: "hidden" }}>
          {(activityExpanded ? activityFeed : activityFeed.slice(0, 2)).map((item, i, arr) => (
            <div key={i} style={{ padding: "11px 16px", display: "flex", alignItems: "flex-start", gap: 12,
              borderBottom: i < arr.length - 1 ? `1px solid ${colors.border}` : "none" }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: item.color + "15", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                <item.icon size={16} color={item.color} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: colors.textPrimary, lineHeight: 1.4 }}>{item.text}</div>
                <div style={{ fontSize: 11, color: colors.textMuted, marginTop: 2 }}>{item.subtext}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── PENDING INVITATIONS (expandable) ─── */}
      {pending.length > 0 && (
        <div style={{ padding: "0 20px", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Mail size={15} color={colors.textMuted} />
              <span style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("Pending Invitations")}</span>
              <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6, background: colors.warningLight, color: colors.warning }}>{pending.length}</span>
            </div>
            {pending.length > 2 && (
              <button onClick={() => setInvitationsExpanded(!invitationsExpanded)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, color: colors.primary, display: "flex", alignItems: "center", gap: 4 }}>
                {invitationsExpanded ? <><ChevronUp size={14} /> {tr("Less")}</> : <>{tr("All")} ({pending.length}) <ChevronDown size={14} /></>}
              </button>
            )}
          </div>
          {(invitationsExpanded ? pending : pending.slice(0, 2)).map(t => (
            <div key={t.id} style={{ background: colors.card, borderRadius: 14, padding: "12px 14px", marginBottom: 8, display: "flex", alignItems: "center", gap: 12, border: `1px solid ${colors.border}`, opacity: 0.75 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: colors.surface, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Mail size={16} color={colors.textMuted} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{t.email}</div>
                <div style={{ fontSize: 11, color: colors.textMuted }}>{tr("Invited")} {tr(t.joined)} · {tr("Pending")}</div>
              </div>
              <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 8, background: colors.warningLight, color: colors.warning }}>{tr("Pending")}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TraineeDetail({ onBack, onNavigate, onShowToast }) {
  const [activeTab, setActiveTab] = useState("progress");
  const tabs = ["profile", "plans", "progress"];

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 20 }}>
        <button onClick={onBack} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronLeft size={20} color={colors.textPrimary} /></button>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: colors.textPrimary }}>Sarah M.</h2>
      </div>

      <div style={{ display: "flex", gap: 4, marginBottom: 20, background: colors.surface, marginLeft: 20, marginRight: 20, borderRadius: 12, padding: 4 }}>
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: "none", background: activeTab === tab ? colors.card : "transparent", color: activeTab === tab ? colors.primary : colors.textMuted, fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize", boxShadow: activeTab === tab ? "0 1px 3px rgba(0,0,0,0.08)" : "none", transition: "all 0.2s" }}>{tab}</button>
        ))}
      </div>

      {activeTab === "progress" && (
        <div style={{ padding: "0 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 13, color: colors.textSecondary }}>Last 30 days</span>
          </div>

          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary, marginBottom: 12 }}>{tr("Weight Trend")}</div>
            <svg viewBox="0 0 300 120" style={{ width: "100%", height: 120 }}>
              <defs><linearGradient id="wg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={colors.primary} stopOpacity="0.15"/><stop offset="100%" stopColor={colors.primary} stopOpacity="0"/></linearGradient></defs>
              <path d="M20,20 L80,35 L140,25 L200,50 L260,65 L280,60" fill="none" stroke={colors.primary} strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M20,20 L80,35 L140,25 L200,50 L260,65 L280,60 L280,110 L20,110 Z" fill="url(#wg)"/>
              <circle cx="280" cy="60" r="5" fill={colors.primary} stroke="#fff" strokeWidth="2"/>
              <text x="268" y="54" fontSize="10" fill={colors.primary} fontWeight="700">74.5</text>
              {["W1","W2","W3","W4"].map((w,i) => (<text key={i} x={20 + i*85} y="108" fontSize="9" fill={colors.textMuted} textAnchor="middle">{w}</text>))}
            </svg>
          </div>

          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary, marginBottom: 14 }}>Adherence This Week</div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: colors.textSecondary }}>{tr("Workouts")}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: colors.success }}>4/5 (80%)</span>
              </div>
              <ProgressBar value={4} max={5} color={colors.success} />
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: colors.textSecondary }}>{tr("Nutrition")}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: colors.warning }}>3/5 (60%)</span>
              </div>
              <ProgressBar value={3} max={5} color={colors.warning} />
            </div>
          </div>

          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary, marginBottom: 12 }}>{tr("Measurements")}</div>
            {[["Waist", "82cm", "79cm", "-3cm"], ["Arms", "32cm", "33cm", "+1cm"]].map(([part, from, to, diff], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: i === 0 ? `1px solid ${colors.border}` : "none" }}>
                <span style={{ fontSize: 13, color: colors.textSecondary }}>{part}</span>
                <span style={{ fontSize: 13, color: colors.textPrimary }}>{from} → {to} <span style={{ color: diff.startsWith("-") ? colors.success : colors.primary, fontWeight: 600 }}>({diff})</span></span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => onNavigate("workout-builder")} style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: "none", background: colors.primary, color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}><Edit3 size={16} /> {tr("Adjust Plan")}</button>
            <button onClick={() => onShowToastr("Reminder sent to Sarah M.")} style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: `1.5px solid ${colors.border}`, background: "#fff", color: colors.textPrimary, fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}><Bell size={16} /> {tr("Remind")}</button>
          </div>
        </div>
      )}

      {activeTab === "profile" && (
        <div style={{ padding: "0 20px" }}>
          <div style={{ background: colors.card, borderRadius: 16, padding: 20, border: `1px solid ${colors.border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: colors.primaryLight, display: "flex", alignItems: "center", justifyContent: "center" }}><User size={32} color={colors.primary} /></div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>Sarah M.</div>
                <div style={{ fontSize: 13, color: colors.textSecondary }}>Joined Feb 1, 2026</div>
              </div>
            </div>
            {[["Goal", "Weight loss"], ["Level", "Intermediate"], ["Weight", "74.5 kg"], ["Height", "165 cm"], ["Note", "Knee injury — avoid deep squats"]].map(([label, val], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderTop: `1px solid ${colors.border}` }}>
                <span style={{ fontSize: 13, color: colors.textMuted, fontWeight: 600 }}>{label}</span>
                <span style={{ fontSize: 13, color: colors.textPrimary, fontWeight: 500, textAlign: "right", maxWidth: "60%" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "plans" && (
        <div style={{ padding: "0 20px" }}>
          {["Week 1 — Fat Burn", "Week 2 — Strength"].map((plan, i) => (
            <div key={i} style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 10, cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: colors.textPrimary }}>{plan}</div>
                  <div style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2 }}>{i === 0 ? "Active · Assigned Feb 10" : "Draft · Created Feb 14"}</div>
                </div>
                <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 6, background: i === 0 ? colors.successLight : colors.surface, color: i === 0 ? colors.success : colors.textMuted }}>{i === 0 ? "Active" : "Draft"}</span>
              </div>
            </div>
          ))}
          <button onClick={() => onNavigate("workout-builder")} style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: `2px dashed ${colors.border}`, background: "transparent", color: colors.primary, fontSize: 14, fontWeight: 600, cursor: "pointer", marginTop: 8 }}>+ Create New Plan</button>
        </div>
      )}

    </div>
  );
}

// ═══════════════════════════════════════════════════════
// COACH CHAT SYSTEM (Full: Conversation List + Thread)
// ═══════════════════════════════════════════════════════

const chatConversations = [
  { id: 1, traineeId: 1, name: "Sarah M.", goal: "Weight loss", avatar: "S", online: true, unread: 2, pinned: true,
    lastMsg: "Should I increase weight next week?", lastTime: "3:01 PM", lastFrom: "trainee" },
  { id: 2, traineeId: 2, name: "Ahmed K.", goal: "Muscle gain", avatar: "A", online: false, unread: 0, pinned: false,
    lastMsg: "Got it, thanks coach!", lastTime: "Yesterday", lastFrom: "trainee" },
  { id: 3, traineeId: 3, name: "Lina R.", goal: "Toning", avatar: "L", online: true, unread: 1, pinned: false,
    lastMsg: "New workout plan assigned", lastTime: "Yesterday", lastFrom: "system" },
  { id: 4, traineeId: 4, name: "Omar T.", goal: "Endurance", avatar: "O", online: false, unread: 0, pinned: false,
    lastMsg: "Welcome to guider.!", lastTime: "Feb 12", lastFrom: "system" },
  { id: 5, traineeId: 5, name: "Nadia H.", goal: "Flexibility", avatar: "N", online: false, unread: 0, pinned: false,
    lastMsg: "I'll try the new stretching routine", lastTime: "Feb 10", lastFrom: "trainee" },
];

const chatThreads = {
  1: [
    { id: 1, from: "system", text: "Workout plan 'Week 1 — Fat Burn' assigned to Sarah M.", time: "9:00 AM", date: "Today", type: "plan_assigned" },
    { id: 2, from: "coach", text: "Hey Sarah! I've assigned your new workout plan. Let me know if you have any questions about the exercises.", time: "9:05 AM", date: "Today", status: "read" },
    { id: 3, from: "trainee", text: "Thanks coach! I saw it. Quick question — for the barbell squats, should I go heavy or focus on form first?", time: "9:12 AM", date: "Today", status: "read" },
    { id: 4, from: "coach", text: "Great question. With your knee history, let's start with lighter weight and focus on form. Once you're comfortable, we'll increase gradually.", time: "9:15 AM", date: "Today", status: "read" },
    { id: 5, from: "system", text: "Sarah completed today's workout (6/6 exercises)", time: "11:30 AM", date: "Today", type: "workout_done" },
    { id: 6, from: "coach", text: "Great job on yesterday's workout! Keep it up.", time: "2:30 PM", date: "Today", status: "read" },
    { id: 7, from: "trainee", text: "Thanks coach! I felt the squats were easier today", time: "2:45 PM", date: "Today" },
    { id: 8, from: "trainee", text: "Should I increase weight next week?", time: "3:01 PM", date: "Today" },
  ],
  2: [
    { id: 1, from: "coach", text: "Ahmed, I've updated your nutrition plan. New protein target: 180g/day.", time: "10:00 AM", date: "Yesterday", status: "read" },
    { id: 2, from: "trainee", text: "Got it, thanks coach!", time: "10:15 AM", date: "Yesterday" },
  ],
  3: [
    { id: 1, from: "system", text: "New workout plan assigned to Lina R.", time: "4:00 PM", date: "Yesterday", type: "plan_assigned" },
    { id: 2, from: "trainee", text: "Hi coach, I'm excited to start!", time: "4:30 PM", date: "Yesterday" },
  ],
};

// Quick reply templates
const quickReplies = [
  "Great job today! Keep it up! 💪",
  "Don't forget your workout today!",
  "How are you feeling after yesterday?",
  "Let me know if the plan feels too easy or too hard.",
  "Remember to log your meals today!",
  "Your progress is looking amazing!",
];

function CoachChatSystem({ onShowToast, onNavigate }) {
  const [activeConvo, setActiveConvo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [filterUnread, setFilterUnread] = useState(false);
  const [conversations, setConversations] = useState(chatConversations);
  const [threads, setThreads] = useState(chatThreads);
  const [msg, setMsg] = useState("");
  const [showQuickReplies, setShowQuickReplies] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showJumpToLatest, setShowJumpToLatest] = useState(false);
  const [profileOverlayTrainee, setProfileOverlayTrainee] = useState(null);
  const messagesEndRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Scroll to bottom
  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  // Filter & sort conversations
  const sortedConvos = [...conversations]
    .filter(c => {
      if (filterUnread && c.unread === 0) return false;
      if (searchQuery) return c.name.toLowerCase().includes(searchQuery.toLowerCase());
      return true;
    })
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      if (a.unread > 0 && b.unread === 0) return -1;
      if (a.unread === 0 && b.unread > 0) return 1;
      return 0;
    });

  const totalUnread = conversations.reduce((a, c) => a + c.unread, 0);

  // Send message
  const sendMessage = (text) => {
    const t = text || msg;
    if (!t.trim() || !activeConvo) return;
    const newMsg = { id: Date.now(), from: "coach", text: t, time: "Now", date: "Today", status: "sent" };
    setThreads(prev => ({
      ...prev,
      [activeConvo.id]: [...(prev[activeConvo.id] || []), newMsg]
    }));
    setConversations(prev => prev.map(c =>
      c.id === activeConvo.id ? { ...c, lastMsg: t, lastTime: "Now", lastFrom: "coach" } : c
    ));
    setMsg("");
    setShowQuickReplies(false);

    // Simulate delivery status change
    setTimeout(() => {
      setThreads(prev => ({
        ...prev,
        [activeConvo.id]: (prev[activeConvo.id] || []).map(m =>
          m.id === newMsg.id ? { ...m, status: "delivered" } : m
        )
      }));
    }, 800);

    // Simulate typing + reply for Sarah
    if (activeConvo.id === 1) {
      setTimeout(() => setIsTyping(true), 1500);
      setTimeout(() => {
        setIsTyping(false);
        const reply = { id: Date.now() + 1, from: "trainee", text: "Thanks for the advice, coach! I'll keep that in mind.", time: "Now", date: "Today" };
        setThreads(prev => ({
          ...prev,
          [activeConvo.id]: [...(prev[activeConvo.id] || []), reply]
        }));
        setConversations(prev => prev.map(c =>
          c.id === activeConvo.id ? { ...c, lastMsg: reply.text, lastTime: "Now", lastFrom: "trainee" } : c
        ));
      }, 3500);
    }
  };

  // Open conversation
  const openConvo = (convo) => {
    setActiveConvo(convo);
    setConversations(prev => prev.map(c => c.id === convo.id ? { ...c, unread: 0 } : c));
    setShowQuickReplies(false);
    setMsg("");
  };

  // Mark as unread
  const markUnread = (id) => {
    setConversations(prev => prev.map(c => c.id === id ? { ...c, unread: 1 } : c));
    onShowToastr("Marked as unread");
  };

  // Pin/unpin
  const togglePin = (id) => {
    setConversations(prev => prev.map(c => c.id === id ? { ...c, pinned: !c.pinned } : c));
  };

  // ─── CONVERSATION THREAD VIEW ───
  if (activeConvo) {
    const thread = threads[activeConvo.id] || [];
    const convo = conversations.find(c => c.id === activeConvo.id);

    // Group messages by date
    const groupedByDate = [];
    let currentDate = "";
    thread.forEach(m => {
      if (m.date !== currentDate) {
        currentDate = m.date;
        groupedByDate.push({ type: "date", date: m.date });
      }
      groupedByDate.push(m);
    });

    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%", marginTop: -20 }}>
        {/* Thread Header */}
        <div style={{ padding: "12px 20px", background: colors.card, borderBottom: `1px solid ${colors.border}`, display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <button onClick={() => setActiveConvo(null)}
            style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <ChevronLeft size={20} color={colors.textPrimary} />
          </button>
          {/* Avatar (non-clickable display only) */}
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: colors.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative" }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: colors.primary }}>{convo.avatar}</span>
            {convo.online && (
              <div style={{ position: "absolute", bottom: 0, right: 0, width: 12, height: 12, borderRadius: "50%", background: colors.success, border: "2px solid #fff" }} />
            )}
          </div>
          {/* Name (clickable) → opens full TraineeProfileScreen */}
          <div style={{ flex: 1 }}>
            <button
              onClick={() => {
                const trainee = allTraineesData.find(t => t.id === convo.traineeId);
                if (trainee) setProfileOverlayTrainee(trainee);
              }}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer", textAlign: "left" }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: colors.primary, textDecoration: "underline", textDecorationColor: `${colors.primary}40`, textUnderlineOffset: 3 }}>{convo.name}</div>
            </button>
            <div style={{ fontSize: 11, color: convo.online ? colors.success : colors.textMuted, fontWeight: 500 }}>
              {convo.online ? "🟢 Online" : "⚫ Last seen recently"}
            </div>
          </div>
        </div>

        {/* Trainee Profile Overlay */}
        {profileOverlayTrainee && (
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 600, display: "flex", alignItems: "flex-end" }}
            onClick={e => { if (e.target === e.currentTarget) setProfileOverlayTrainee(null); }}>
            <div style={{ width: "100%", maxHeight: "92%", background: colors.background, borderRadius: "24px 24px 0 0", overflow: "auto", animation: "slideUp 0.3s ease" }}>
              <div style={{ display: "flex", justifyContent: "flex-end", padding: "12px 16px 0" }}>
                <button onClick={() => setProfileOverlayTrainee(null)}
                  style={{ background: colors.surface, border: "none", borderRadius: 10, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <X size={16} color={colors.textMuted} />
                </button>
              </div>
              <TraineeProfileScreen
                trainee={profileOverlayTrainee}
                onBack={() => setProfileOverlayTrainee(null)}
                onNavigate={onNavigate}
                onShowToast={onShowToast}
                onArchive={() => { setProfileOverlayTrainee(null); onShowToast("Trainee archived", "warning"); }}
                onReactivate={() => { setProfileOverlayTrainee(null); onShowToastr("Trainee reactivated"); }}
                onDelete={() => { setProfileOverlayTrainee(null); onShowToast("Trainee removed", "warning"); }}
              />
            </div>
          </div>
        )}

        {/* Messages Area */}
        <div ref={scrollContainerRef}
          onScroll={(e) => {
            const el = e.target;
            setShowJumpToLatest(el.scrollHeight - el.scrollTop - el.clientHeight > 200);
          }}
          style={{ flex: 1, overflow: "auto", padding: "12px 16px", display: "flex", flexDirection: "column", gap: 4 }}>

          {/* Load previous */}
          <div style={{ textAlign: "center", padding: "8px 0 16px" }}>
            <button style={{ background: "none", border: "none", color: colors.primary, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
              Load previous messages
            </button>
          </div>

          {groupedByDate.map((item, i) => {
            // Date separator
            if (item.type === "date") {
              return (
                <div key={`date-${i}`} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0 8px" }}>
                  <div style={{ flex: 1, height: 1, background: colors.border }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, whiteSpace: "nowrap" }}>{item.date}</span>
                  <div style={{ flex: 1, height: 1, background: colors.border }} />
                </div>
              );
            }

            // System message
            if (item.from === "system") {
              return (
                <div key={item.id} style={{ display: "flex", justifyContent: "center", padding: "6px 0" }}>
                  <div style={{ background: colors.surface, borderRadius: 10, padding: "6px 14px", display: "flex", alignItems: "center", gap: 6, maxWidth: "85%" }}>
                    {item.type === "workout_done" ? <CheckCircle2 size={13} color={colors.success} /> :
                     item.type === "plan_assigned" ? <Dumbbell size={13} color={colors.primary} /> :
                     <Bell size={13} color={colors.textMuted} />}
                    <span style={{ fontSize: 11, color: colors.textSecondary, lineHeight: 1.4 }}>{item.text}</span>
                  </div>
                </div>
              );
            }

            const isCoach = item.from === "coach";
            const statusIcon = item.status === "read" ? "✓✓" : item.status === "delivered" ? "✓✓" : item.status === "sent" ? "✓" : "";
            const statusColor = item.status === "read" ? "#60A5FA" : "rgba(255,255,255,0.5)";

            return (
              <div key={item.id} style={{ display: "flex", justifyContent: isCoach ? "flex-end" : "flex-start", animation: "slideUp 0.2s ease" }}>
                {!isCoach && (
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: colors.surface, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginRight: 6, marginTop: 4 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted }}>{convo.avatar}</span>
                  </div>
                )}
                <div style={{ maxWidth: "75%", padding: "10px 14px",
                  borderRadius: isCoach ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  background: isCoach ? colors.primary : colors.card,
                  color: isCoach ? "#fff" : colors.textPrimary,
                  fontSize: 13, lineHeight: 1.5,
                  border: isCoach ? "none" : `1px solid ${colors.border}`,
                  boxShadow: isCoach ? "0 2px 8px rgba(52,211,153,0.2)" : "0 1px 3px rgba(0,0,0,0.04)" }}>
                  {item.text}
                  <div style={{ fontSize: 10, marginTop: 4, opacity: 0.6, textAlign: "right", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 3 }}>
                    {item.time}
                    {isCoach && statusIcon && (
                      <span style={{ color: item.status === "read" ? (isCoach ? "#93C5FD" : "#60A5FA") : undefined, fontWeight: 600 }}>{statusIcon}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing indicator */}
          {isTyping && (
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0", animation: "slideUp 0.2s ease" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: colors.surface, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted }}>{convo.avatar}</span>
              </div>
              <div style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 16, padding: "10px 16px", display: "flex", gap: 4, alignItems: "center" }}>
                {[0, 1, 2].map(d => (
                  <div key={d} style={{ width: 7, height: 7, borderRadius: "50%", background: colors.textMuted,
                    animation: `typingDot 1.2s ${d * 0.2}s infinite ease-in-out` }} />
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Jump to latest */}
        {showJumpToLatest && (
          <div style={{ position: "absolute", bottom: 140, left: "50%", transform: "translateX(-50%)", zIndex: 50 }}>
            <button onClick={scrollToBottom}
              style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 20, padding: "6px 16px", fontSize: 11, fontWeight: 600, color: colors.primary, cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", gap: 4 }}>
              <ChevronDown size={14} /> Jump to latest
            </button>
          </div>
        )}

        {/* Quick Replies Panel */}
        {showQuickReplies && (
          <div style={{ padding: "8px 16px", background: colors.surface, borderTop: `1px solid ${colors.border}`, maxHeight: 140, overflow: "auto", flexShrink: 0 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>{tr("Quick Replies")}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {quickReplies.map((qr, i) => (
                <button key={i} onClick={() => sendMessage(qr)}
                  style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 10, padding: "7px 12px", fontSize: 12, color: colors.textPrimary, cursor: "pointer", fontWeight: 500, lineHeight: 1.3 }}>
                  {qr}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Bar */}
        <div style={{ padding: "10px 16px 12px", background: colors.card, borderTop: `1px solid ${colors.border}`, flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
            <button onClick={() => setShowQuickReplies(!showQuickReplies)}
              style={{ width: 40, height: 40, borderRadius: 12, border: `1px solid ${showQuickReplies ? colors.primary : colors.border}`, background: showQuickReplies ? colors.primaryLight : "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
              <Zap size={16} color={showQuickReplies ? colors.primary : colors.textMuted} />
            </button>
            <div style={{ flex: 1, position: "relative" }}>
              <textarea value={msg} onChange={e => setMsg(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                placeholder="Type a message..." maxLength={1000} rows={1}
                style={{ width: "100%", minHeight: 40, maxHeight: 100, borderRadius: 12, border: `1.5px solid ${colors.border}`, padding: "10px 14px", fontSize: 14, outline: "none", resize: "none", fontFamily: "inherit", boxSizing: "border-box", lineHeight: 1.4 }} />
              {msg.length > 0 && (
                <span style={{ position: "absolute", right: 10, bottom: 4, fontSize: 10,
                  color: msg.length > 950 ? colors.error : msg.length > 800 ? colors.warning : colors.textMuted }}>
                  {msg.length}/1000
                </span>
              )}
            </div>
            <button onClick={() => sendMessage()} disabled={!msg.trim()}
              style={{ width: 40, height: 40, borderRadius: 12, border: "none",
                background: msg.trim() ? colors.primary : colors.surface,
                display: "flex", alignItems: "center", justifyContent: "center", cursor: msg.trim() ? "pointer" : "default", flexShrink: 0,
                transition: "background 0.2s", boxShadow: msg.trim() ? "0 2px 8px rgba(52,211,153,0.3)" : "none" }}>
              <Send size={16} color={msg.trim() ? "#fff" : colors.textMuted} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── CONVERSATION LIST VIEW ───
  return (
    <div style={{ paddingBottom: 20 }}>
      {/* Header */}
      <div style={{ padding: "0 20px", marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: colors.textPrimary }}>{tr("Messages")}</h1>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setShowSearch(!showSearch)}
              style={{ background: showSearch ? colors.primaryLight : colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Search size={16} color={showSearch ? colors.primary : colors.textSecondary} />
            </button>
            <button onClick={() => setFilterUnread(!filterUnread)}
              style={{ background: filterUnread ? colors.primaryLight : colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", position: "relative" }}>
              <Filter size={16} color={filterUnread ? colors.primary : colors.textSecondary} />
              {filterUnread && <div style={{ position: "absolute", top: 4, right: 4, width: 6, height: 6, borderRadius: "50%", background: colors.primary }} />}
            </button>
          </div>
        </div>

        {/* Unread summary */}
        {totalUnread > 0 && !filterUnread && (
          <div style={{ fontSize: 13, color: colors.textSecondary, marginBottom: 8 }}>
            <span style={{ fontWeight: 700, color: colors.primary }}>{totalUnread}</span> unread conversation{totalUnread > 1 ? "s" : ""}
          </div>
        )}

        {/* Search bar */}
        {showSearch && (
          <div style={{ position: "relative", marginBottom: 8 }}>
            <Search size={16} color={colors.textMuted} style={{ position: "absolute", left: 12, top: 13 }} />
            <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search conversations..." autoFocus
              style={{ width: "100%", height: 42, borderRadius: 12, border: `1.5px solid ${colors.border}`, paddingLeft: 36, paddingRight: 14, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")}
                style={{ position: "absolute", right: 10, top: 11, background: colors.surface, border: "none", borderRadius: 8, width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <X size={12} color={colors.textMuted} />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Conversation cards */}
      <div style={{ padding: "0 20px" }}>
        {sortedConvos.length === 0 && (
          <div style={{ textAlign: "center", padding: "48px 20px" }}>
            <div style={{ width: 64, height: 64, borderRadius: 20, background: colors.surface, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <MessageSquare size={28} color={colors.textMuted} />
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: colors.textPrimary, marginBottom: 4 }}>
              {filterUnread ? "No unread messages" : searchQuery ? "No results found" : "No conversations yet"}
            </div>
            <div style={{ fontSize: 13, color: colors.textSecondary, marginBottom: 20 }}>
              {filterUnread ? "You're all caught up!" : searchQuery ? "Try a different search term" : "Start a conversation with your trainee"}
            </div>
            {filterUnread && (
              <button onClick={() => setFilterUnread(false)}
                style={{ background: colors.primaryLight, border: "none", borderRadius: 12, padding: "10px 20px", color: colors.primary, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                Show all conversations
              </button>
            )}
          </div>
        )}

        {sortedConvos.map((convo, i) => (
          <div key={convo.id} onClick={() => openConvo(convo)}
            style={{ background: convo.unread > 0 ? colors.primaryGhost : colors.card, borderRadius: 16, padding: "14px 16px", marginBottom: 8,
              border: `1px solid ${convo.unread > 0 ? colors.primary + "20" : colors.border}`,
              display: "flex", alignItems: "center", gap: 14, cursor: "pointer", transition: "all 0.15s" }}>

            {/* Avatar */}
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: convo.unread > 0 ? colors.primaryLight : colors.surface, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative" }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: convo.unread > 0 ? colors.primary : colors.textMuted }}>{convo.avatar}</span>
              {convo.online && (
                <div style={{ position: "absolute", bottom: 1, right: 1, width: 12, height: 12, borderRadius: "50%", background: colors.success, border: "2px solid " + (convo.unread > 0 ? "rgba(52,211,153,0.08)" : colors.card) }} />
              )}
            </div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  {convo.pinned && <Bookmark size={11} color={colors.primary} fill={colors.primary} />}
                  <span style={{ fontSize: 14, fontWeight: convo.unread > 0 ? 700 : 600, color: colors.textPrimary }}>{convo.name}</span>
                </div>
                <span style={{ fontSize: 11, color: convo.unread > 0 ? colors.primary : colors.textMuted, fontWeight: convo.unread > 0 ? 600 : 400, flexShrink: 0 }}>{convo.lastTime}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontSize: 13, color: convo.unread > 0 ? colors.textPrimary : colors.textSecondary,
                  fontWeight: convo.unread > 0 ? 600 : 400,
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", paddingRight: 8 }}>
                  {convo.lastFrom === "coach" && <span style={{ color: colors.textMuted }}>You: </span>}
                  {convo.lastFrom === "system" && <FileText size={10} color={colors.textMuted} style={{ marginRight: 2 }} />}
                  {convo.lastMsg}
                </div>
                {convo.unread > 0 && (
                  <div style={{ minWidth: 20, height: 20, borderRadius: 10, background: colors.primary, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: "0 6px" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#fff" }}>{convo.unread}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Legacy inline chat for trainee-detail messages tab
function CoachChat({ onShowToast }) {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([
    { from: "coach", text: "Great job on yesterday's workout! Keep it up.", time: "2:30 PM", status: "read" },
    { from: "trainee", text: "Thanks coach! I felt the squats were easier today", time: "2:45 PM", status: "read" },
    { from: "trainee", text: "Should I increase weight next week?", time: "3:01 PM", status: "sent" },
  ]);

  const sendMessage = () => {
    if (!msg.trim()) return;
    setMessages([...messages, { from: "coach", text: msg, time: "Now", status: "sent" }]);
    setMsg("");
    onShowToastr("Message sent");
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.from === "coach" ? "flex-end" : "flex-start" }}>
            <div style={{ maxWidth: "80%", padding: "10px 14px", borderRadius: m.from === "coach" ? "14px 14px 4px 14px" : "14px 14px 14px 4px", background: m.from === "coach" ? colors.primary : colors.surface, color: m.from === "coach" ? "#fff" : colors.textPrimary, fontSize: 13, lineHeight: 1.5 }}>
              {m.text}
              <div style={{ fontSize: 10, marginTop: 4, opacity: 0.7, textAlign: "right" }}>
                {m.time} {m.from === "coach" && (m.status === "read" ? " ✓✓" : " ✓")}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input value={msg} onChange={e => setMsg(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} placeholder="Type a message..." maxLength={1000} style={{ flex: 1, height: 44, borderRadius: 12, border: `1.5px solid ${colors.border}`, padding: "0 14px", fontSize: 14, outline: "none" }} />
        <button onClick={sendMessage} style={{ width: 44, height: 44, borderRadius: 12, border: "none", background: colors.primary, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><Send size={18} /></button>
      </div>
      {msg.length > 0 && <div style={{ fontSize: 11, color: msg.length > 950 ? colors.error : colors.textMuted, textAlign: "right", marginTop: 4 }}>{msg.length}/1000</div>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// WORKOUT BUILDER (Complete Production Version)
// ═══════════════════════════════════════════════════════

// Exercise library database
const exerciseLibrary = [
  { id: 1, name: "Barbell Squat", muscle: "Legs", type: "compound", equipment: "Barbell" },
  { id: 2, name: "Leg Press", muscle: "Legs", type: "compound", equipment: "Machine" },
  { id: 3, name: "Walking Lunge", muscle: "Legs", type: "compound", equipment: "Bodyweight" },
  { id: 4, name: "Leg Curl", muscle: "Legs", type: "isolation", equipment: "Machine" },
  { id: 5, name: "Leg Extension", muscle: "Legs", type: "isolation", equipment: "Machine" },
  { id: 6, name: "Bench Press", muscle: "Chest", type: "compound", equipment: "Barbell" },
  { id: 7, name: "Incline Dumbbell Press", muscle: "Chest", type: "compound", equipment: "Dumbbell" },
  { id: 8, name: "Cable Fly", muscle: "Chest", type: "isolation", equipment: "Cable" },
  { id: 9, name: "Push-ups", muscle: "Chest", type: "compound", equipment: "Bodyweight" },
  { id: 10, name: "Deadlift", muscle: "Back", type: "compound", equipment: "Barbell" },
  { id: 11, name: "Lat Pulldown", muscle: "Back", type: "compound", equipment: "Cable" },
  { id: 12, name: "Bent Over Row", muscle: "Back", type: "compound", equipment: "Barbell" },
  { id: 13, name: "Seated Cable Row", muscle: "Back", type: "compound", equipment: "Cable" },
  { id: 14, name: "Overhead Press", muscle: "Shoulders", type: "compound", equipment: "Barbell" },
  { id: 15, name: "Lateral Raise", muscle: "Shoulders", type: "isolation", equipment: "Dumbbell" },
  { id: 16, name: "Face Pull", muscle: "Shoulders", type: "isolation", equipment: "Cable" },
  { id: 17, name: "Bicep Curl", muscle: "Arms", type: "isolation", equipment: "Dumbbell" },
  { id: 18, name: "Tricep Pushdown", muscle: "Arms", type: "isolation", equipment: "Cable" },
  { id: 19, name: "Hammer Curl", muscle: "Arms", type: "isolation", equipment: "Dumbbell" },
  { id: 20, name: "Plank", muscle: "Core", type: "isometric", equipment: "Bodyweight" },
  { id: 21, name: "Russian Twist", muscle: "Core", type: "isolation", equipment: "Bodyweight" },
  { id: 22, name: "Cable Crunch", muscle: "Core", type: "isolation", equipment: "Cable" },
  { id: 23, name: "Treadmill Walk", muscle: "Cardio", type: "cardio", equipment: "Machine" },
  { id: 24, name: "Jump Rope", muscle: "Cardio", type: "cardio", equipment: "Bodyweight" },
  { id: 25, name: "Foam Rolling", muscle: "Recovery", type: "cooldown", equipment: "Bodyweight" },
  { id: 26, name: "Static Stretching", muscle: "Recovery", type: "cooldown", equipment: "Bodyweight" },
  { id: 27, name: "Dynamic Warm-up", muscle: "Warm-up", type: "warmup", equipment: "Bodyweight" },
  { id: 28, name: "Light Jogging", muscle: "Warm-up", type: "warmup", equipment: "Bodyweight" },
];

// Video library (sample videos organized by muscle)
const videoLibraryData = [
  { id: "v1", title: "Barbell Back Squat Form", muscle: "Legs", duration: "3:20", thumbnail: "legs" },
  { id: "v2", title: "Leg Press Technique", muscle: "Legs", duration: "2:15", thumbnail: "legs" },
  { id: "v3", title: "Romanian Deadlift Guide", muscle: "Legs", duration: "4:10", thumbnail: "legs" },
  { id: "v4", title: "Walking Lunges Tutorial", muscle: "Legs", duration: "2:45", thumbnail: "legs" },
  { id: "v5", title: "Calf Raise Variations", muscle: "Legs", duration: "3:00", thumbnail: "legs" },
  { id: "v6", title: "Flat Bench Press Form", muscle: "Chest", duration: "4:30", thumbnail: "chest" },
  { id: "v7", title: "Incline Dumbbell Press", muscle: "Chest", duration: "3:15", thumbnail: "chest" },
  { id: "v8", title: "Cable Fly Tutorial", muscle: "Chest", duration: "2:50", thumbnail: "chest" },
  { id: "v9", title: "Push-up Variations", muscle: "Chest", duration: "5:00", thumbnail: "chest" },
  { id: "v10", title: "Conventional Deadlift", muscle: "Back", duration: "5:20", thumbnail: "back" },
  { id: "v11", title: "Lat Pulldown Form", muscle: "Back", duration: "3:10", thumbnail: "back" },
  { id: "v12", title: "Barbell Row Guide", muscle: "Back", duration: "3:45", thumbnail: "back" },
  { id: "v13", title: "Seated Cable Row", muscle: "Back", duration: "2:30", thumbnail: "back" },
  { id: "v14", title: "Overhead Press Form", muscle: "Shoulders", duration: "4:00", thumbnail: "shoulder" },
  { id: "v15", title: "Lateral Raise Tutorial", muscle: "Shoulders", duration: "2:20", thumbnail: "shoulder" },
  { id: "v16", title: "Face Pull Guide", muscle: "Shoulders", duration: "3:00", thumbnail: "shoulder" },
  { id: "v17", title: "Rear Delt Fly", muscle: "Shoulders", duration: "2:10", thumbnail: "shoulder" },
  { id: "v18", title: "Bicep Curl Variations", muscle: "Arms", duration: "4:15", thumbnail: "arms" },
  { id: "v19", title: "Tricep Pushdown Guide", muscle: "Arms", duration: "2:40", thumbnail: "arms" },
  { id: "v20", title: "Hammer Curl Form", muscle: "Arms", duration: "2:00", thumbnail: "arms" },
  { id: "v21", title: "Skull Crushers Tutorial", muscle: "Arms", duration: "3:30", thumbnail: "arms" },
  { id: "v22", title: "Plank Variations", muscle: "Core", duration: "4:45", thumbnail: "core" },
  { id: "v23", title: "Russian Twist Guide", muscle: "Core", duration: "2:15", thumbnail: "core" },
  { id: "v24", title: "Cable Crunch Form", muscle: "Core", duration: "2:30", thumbnail: "core" },
  { id: "v25", title: "HIIT Treadmill Workout", muscle: "Cardio", duration: "6:00", thumbnail: "cardio" },
  { id: "v26", title: "Jump Rope Basics", muscle: "Cardio", duration: "3:30", thumbnail: "cardio" },
  { id: "v27", title: "Foam Rolling Guide", muscle: "Recovery", duration: "8:00", thumbnail: "recovery" },
  { id: "v28", title: "Dynamic Warm-up Routine", muscle: "Warm-up", duration: "5:00", thumbnail: "warmup" },
];

// Workout templates
const workoutTemplates = [
  { id: 1, name: "Fat Burn — Lower Body", desc: "Legs + Cardio", duration: "45 min", level: "Intermediate", exercises: [
    { name: "Dynamic Warm-up", sets: 1, reps: "5 min", weight: "—", rest: "—", section: "warmup", note: "Leg swings, hip circles, high knees" },
    { name: "Barbell Squat", sets: 4, reps: 12, weight: "40 kg", rest: "60s", section: "main", note: "Keep knees behind toes" },
    { name: "Leg Press", sets: 3, reps: 15, weight: "60 kg", rest: "45s", section: "main", note: "" },
    { name: "Walking Lunge", sets: 3, reps: 12, weight: "12 kg", rest: "45s", section: "main", note: "Per leg" },
    { name: "Leg Curl", sets: 3, reps: 12, weight: "25 kg", rest: "45s", section: "main", note: "" },
    { name: "Treadmill Walk", sets: 1, reps: "10 min", weight: "—", rest: "—", section: "main", note: "Incline 8%, speed 5.5" },
    { name: "Static Stretching", sets: 1, reps: "5 min", weight: "—", rest: "—", section: "cooldown", note: "Focus on hamstrings and quads" },
  ]},
  { id: 2, name: "Push Day — Chest & Shoulders", desc: "Upper push", duration: "50 min", level: "Advanced", exercises: [
    { name: "Light Jogging", sets: 1, reps: "5 min", weight: "—", rest: "—", section: "warmup", note: "" },
    { name: "Bench Press", sets: 4, reps: 8, weight: "70 kg", rest: "90s", section: "main", note: "Touch chest" },
    { name: "Incline Dumbbell Press", sets: 3, reps: 10, weight: "24 kg", rest: "60s", section: "main", note: "" },
    { name: "Cable Fly", sets: 3, reps: 15, weight: "15 kg", rest: "45s", section: "main", note: "" },
    { name: "Overhead Press", sets: 4, reps: 10, weight: "30 kg", rest: "60s", section: "main", note: "" },
    { name: "Lateral Raise", sets: 3, reps: 15, weight: "8 kg", rest: "30s", section: "main", note: "" },
    { name: "Tricep Pushdown", sets: 3, reps: 12, weight: "20 kg", rest: "45s", section: "main", note: "" },
    { name: "Foam Rolling", sets: 1, reps: "5 min", weight: "—", rest: "—", section: "cooldown", note: "" },
  ]},
  { id: 3, name: "Pull Day — Back & Biceps", desc: "Upper pull", duration: "50 min", level: "Intermediate", exercises: [
    { name: "Dynamic Warm-up", sets: 1, reps: "5 min", weight: "—", rest: "—", section: "warmup", note: "" },
    { name: "Deadlift", sets: 4, reps: 8, weight: "80 kg", rest: "120s", section: "main", note: "Brace core" },
    { name: "Lat Pulldown", sets: 3, reps: 12, weight: "45 kg", rest: "60s", section: "main", note: "" },
    { name: "Seated Cable Row", sets: 3, reps: 12, weight: "40 kg", rest: "60s", section: "main", note: "" },
    { name: "Face Pull", sets: 3, reps: 15, weight: "15 kg", rest: "30s", section: "main", note: "" },
    { name: "Bicep Curl", sets: 3, reps: 12, weight: "12 kg", rest: "45s", section: "main", note: "" },
    { name: "Hammer Curl", sets: 3, reps: 12, weight: "10 kg", rest: "45s", section: "main", note: "" },
    { name: "Static Stretching", sets: 1, reps: "5 min", weight: "—", rest: "—", section: "cooldown", note: "" },
  ]},
  { id: 4, name: "Core & Cardio HIIT", desc: "Full body burn", duration: "35 min", level: "Beginner", exercises: [
    { name: "Light Jogging", sets: 1, reps: "3 min", weight: "—", rest: "—", section: "warmup", note: "" },
    { name: "Jump Rope", sets: 5, reps: "1 min", weight: "—", rest: "30s", section: "main", note: "" },
    { name: "Plank", sets: 3, reps: "45s", weight: "—", rest: "30s", section: "main", note: "" },
    { name: "Russian Twist", sets: 3, reps: 20, weight: "5 kg", rest: "30s", section: "main", note: "" },
    { name: "Push-ups", sets: 3, reps: 15, weight: "—", rest: "30s", section: "main", note: "" },
    { name: "Static Stretching", sets: 1, reps: "5 min", weight: "—", rest: "—", section: "cooldown", note: "" },
  ]},
];

function WorkoutBuilder({ onBack, onShowToast }) {
  // ── STEP STATE: "trainees" → "template" → "builder" → "schedule" → "review" ──
  const [step, setStep] = useState("trainees");

  // Step 1: Trainee selection
  const [selectedTrainees, setSelectedTrainees] = useState([]);
  const [traineeSearch, setTraineeSearch] = useState("");

  // Step 2: Template selection
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Step 3: Builder
  const [workoutName, setWorkoutName] = useState("");
  const [exercises, setExercises] = useState([]);
  const [showExerciseLib, setShowExerciseLib] = useState(false);
  const [libSearch, setLibSearch] = useState("");
  const [libFilter, setLibFilter] = useState("All");
  const [expandedSection, setExpandedSection] = useState("main");
  const [editingNote, setEditingNote] = useState(null);
  const [dragIdx, setDragIdx] = useState(null);

  // Video library modal
  const [showVideoLibModal, setShowVideoLibModal] = useState(null); // null or { exerciseId, field } where field = "main"|"alt"
  const [videoLibMuscle, setVideoLibMuscle] = useState("All");
  const [videoLibSearch, setVideoLibSearch] = useState("");
  const [selectedVideos, setSelectedVideos] = useState([]);

  // Muscle dropdown per exercise
  const [showMuscleDropdown, setShowMuscleDropdown] = useState(null); // exerciseId or null

  // Plan-level fields
  const [planInstruction, setPlanInstruction] = useState("");
  const [planCaution, setPlanCaution] = useState("");
  const [planDifficulty, setPlanDifficulty] = useState("Medium");

  // Step 4: Schedule
  const [scheduleDate, setScheduleDate] = useState("2026-02-16");
  const [scheduleTime, setScheduleTime] = useState("09:00");
  const [recurrence, setRecurrence] = useState("none");
  const [notifyTrainee, setNotifyTrainee] = useState(true);
  const [alertIfMissed, setAlertIfMissed] = useState(true);

  // Step 5: Review
  const [showConfirm, setShowConfirm] = useState(false);

  // Steps config
  const steps = [
    { key: "trainees", label: "Trainees", num: 1 },
    { key: "template", label: "Template", num: 2 },
    { key: "builder", label: "Exercises", num: 3 },
    { key: "schedule", label: "Schedule", num: 4 },
    { key: "review", label: "Review", num: 5 },
  ];
  const currentStepIdx = steps.findIndex(s => s.key === step);

  // Filter active trainees for selection
  const selectableTrainees = allTraineesData.filter(t => t.status === "active");
  const filteredTrainees = selectableTrainees.filter(t =>
    !traineeSearch || t.name.toLowerCase().includes(traineeSearch.toLowerCase()) || t.email.toLowerCase().includes(traineeSearch.toLowerCase())
  );

  // Toggle trainee selection
  const toggleTrainee = (id) => {
    setSelectedTrainees(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };
  const selectAll = () => {
    if (selectedTrainees.length === selectableTrainees.length) setSelectedTrainees([]);
    else setSelectedTrainees(selectableTrainees.map(t => t.id));
  };

  // Load template
  const loadTemplate = (tpl) => {
    setSelectedTemplate(tpl);
    setWorkoutName(tpl.name);
    setExercises(tpl.exercises.map((e, i) => ({ ...e, id: Date.now() + i })));
    setStep("builder");
  };

  // Start custom
  const startCustom = () => {
    setSelectedTemplate(null);
    setWorkoutName("");
    setExercises([
      { id: Date.now(), name: "Dynamic Warm-up", sets: 1, reps: "5 min", weight: "—", rest: "—", section: "warmup", note: "" },
    ]);
    setStep("builder");
  };

  // Exercise builder helpers
  const addExercise = (libExercise, section = "main") => {
    setExercises(prev => [...prev, {
      id: Date.now(), name: libExercise.name, sets: 3, reps: 10, weight: "—", rest: "45s",
      section, note: "", muscle: libExercise.muscle, instruction: "", caution: "", mainVideo: "", altVideos: []
    }]);
    setShowExerciseLib(false);
    onShowToast(`${libExercise.name} added`);
  };
  const muscleOptions = ["Legs", "Chest", "Back", "Shoulders", "Arms", "Core", "Cardio", "Recovery", "Warm-up"];
  const addBlankExercise = (section = "main") => {
    setExercises(prev => [...prev, { id: Date.now(), name: "", sets: 3, reps: 10, weight: "—", rest: "45s", section, note: "", muscle: "", instruction: "", caution: "", mainVideo: "", altVideos: [] }]);
  };
  const removeExercise = (id) => {
    setExercises(prev => prev.filter(e => e.id !== id));
    onShowToast("Exercise removed", "warning");
  };
  const updateExercise = (id, field, value) => {
    setExercises(prev => prev.map(e => e.id === id ? { ...e, [field]: value } : e));
  };
  const duplicateExercise = (id) => {
    const ex = exercises.find(e => e.id === id);
    if (ex) {
      const copy = { ...ex, id: Date.now(), name: ex.name + " (Copy)" };
      const idx = exercises.findIndex(e => e.id === id);
      const updated = [...exercises];
      updated.splice(idx + 1, 0, copy);
      setExercises(updated);
      onShowToastr("Exercise duplicated");
    }
  };
  const moveExercise = (fromIdx, direction) => {
    const toIdx = fromIdx + direction;
    if (toIdx < 0 || toIdx >= exercises.length) return;
    const updated = [...exercises];
    [updated[fromIdx], updated[toIdx]] = [updated[toIdx], updated[fromIdx]];
    setExercises(updated);
  };

  // Exercise counts by section
  const warmupExs = exercises.filter(e => e.section === "warmup");
  const mainExs = exercises.filter(e => e.section === "main");
  const cooldownExs = exercises.filter(e => e.section === "cooldown");

  // Validation
  const hasEmptyName = exercises.some(e => !e.name.trim());
  const hasExercises = exercises.length > 0;
  const hasTrainees = selectedTrainees.length > 0;
  const hasName = workoutName.trim().length > 0;
  const canConfirm = hasTrainees && hasExercises && !hasEmptyName && hasName;

  // Estimated duration
  const estDuration = exercises.reduce((t, e) => {
    const sets = typeof e.sets === "number" ? e.sets : parseInt(e.sets) || 1;
    const restSec = parseInt(e.rest) || 45;
    return t + (sets * 1.5) + (sets * restSec / 60);
  }, 0);

  // Muscle group tags
  const muscleGroups = [...new Set(exercises.filter(e => e.muscle).map(e => e.muscle))];

  // Section color helper
  const sectionColor = (s) => s === "warmup" ? "#F97316" : s === "cooldown" ? "#06B6D4" : colors.primary;

  // Selected trainee names
  const selectedTraineeNames = allTraineesData.filter(t => selectedTrainees.includes(t.id)).map(t => t.name);

  // Format time 24h to 12h
  const fmt12 = (t) => {
    if (!t) return "";
    const [h, m] = t.split(":").map(Number);
    return `${h % 12 || 12}:${m.toString().padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`;
  };

  // ─── STEP PROGRESS BAR ───
  const StepBar = () => (
    <div style={{ padding: "0 20px", marginBottom: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
        {steps.map((s, i) => (
          <div key={s.key} style={{ flex: 1, display: "flex", alignItems: "center", gap: 2 }}>
            <div onClick={() => { if (i <= currentStepIdx) setStep(s.key); }}
              style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, cursor: i <= currentStepIdx ? "pointer" : "default",
                background: i < currentStepIdx ? colors.success : i === currentStepIdx ? colors.primary : colors.surface,
                color: i <= currentStepIdx ? "#fff" : colors.textMuted, transition: "all 0.2s" }}>
              {i < currentStepIdx ? <Check size={14} /> : s.num}
            </div>
            {i < steps.length - 1 && (
              <div style={{ flex: 1, height: 2, background: i < currentStepIdx ? colors.success : colors.border, borderRadius: 1, transition: "background 0.3s" }} />
            )}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
        {steps.map((s, i) => (
          <span key={s.key} style={{ fontSize: 9, fontWeight: 600, color: i === currentStepIdx ? colors.primary : colors.textMuted, textAlign: "center", width: `${100 / steps.length}%` }}>{s.label}</span>
        ))}
      </div>
    </div>
  );

  // ════════════════════════════════════════════
  // STEP 1: SELECT TRAINEES
  // ════════════════════════════════════════════
  if (step === "trainees") {
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 12 }}>
          <button onClick={onBack} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronLeft size={20} color={colors.textPrimary} /></button>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>{tr("Workout Builder")}</h2>
            <span style={{ fontSize: 12, color: colors.textSecondary }}>Step 1: Select trainees</span>
          </div>
        </div>
        <StepBar />

        {/* Search */}
        <div style={{ padding: "0 20px", marginBottom: 12, position: "relative" }}>
          <Search size={16} color={colors.textMuted} style={{ position: "absolute", left: 32, top: 13 }} />
          <input value={traineeSearch} onChange={e => setTraineeSearch(e.target.value)} placeholder="Search trainees..."
            style={{ width: "100%", height: 42, borderRadius: 12, border: `1.5px solid ${colors.border}`, paddingLeft: 38, paddingRight: 14, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
        </div>

        {/* Select All */}
        <div style={{ padding: "0 20px", marginBottom: 10 }}>
          <button onClick={selectAll}
            style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, color: colors.primary, padding: 0 }}>
            <div style={{ width: 20, height: 20, borderRadius: 6, border: selectedTrainees.length === selectableTrainees.length ? "none" : `2px solid ${colors.border}`, background: selectedTrainees.length === selectableTrainees.length ? colors.primary : "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {selectedTrainees.length === selectableTrainees.length && <Check size={12} color="#fff" strokeWidth={3} />}
            </div>
            Select all active trainees ({selectableTrainees.length})
          </button>
        </div>

        {/* Trainee list */}
        <div style={{ padding: "0 20px" }}>
          {filteredTrainees.map(t => {
            const isSelected = selectedTrainees.includes(t.id);
            const adherenceCol = t.adherence >= 80 ? colors.success : t.adherence >= 60 ? colors.warning : colors.error;
            return (
              <div key={t.id} onClick={() => toggleTrainee(t.id)}
                style={{ background: isSelected ? colors.primaryLight : colors.card, borderRadius: 14, padding: "12px 14px", marginBottom: 8,
                  border: `1.5px solid ${isSelected ? colors.primary : colors.border}`, display: "flex", alignItems: "center", gap: 12, cursor: "pointer", transition: "all 0.15s" }}>
                <div style={{ width: 22, height: 22, borderRadius: 7, border: isSelected ? "none" : `2px solid ${colors.border}`,
                  background: isSelected ? colors.primary : "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {isSelected && <Check size={14} color="#fff" strokeWidth={3} />}
                </div>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: isSelected ? "rgba(52,211,153,0.15)" : colors.surface, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: isSelected ? colors.primary : colors.textMuted }}>{t.avatar}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>{t.name}</span>
                    {t.alerts && t.alerts.length > 0 && (
                      <span style={{ fontSize: 9, fontWeight: 700, padding: "1px 6px", borderRadius: 4, background: colors.errorLight, color: colors.error }}>!</span>
                    )}
                  </div>
                  <div style={{ fontSize: 11, color: colors.textSecondary, marginTop: 1 }}>
                    {t.goal} · {t.level}
                    {t.note && <span style={{ color: colors.warning }}> · ⚠ {t.note.split("—")[0].trim()}</span>}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: adherenceCol }}>{t.adherence}%</div>
                  <div style={{ fontSize: 9, color: colors.textMuted }}>adherence</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ padding: "16px 20px 8px", position: "sticky", bottom: 0, background: colors.background }}>
          <button onClick={() => hasTrainees && setStep("template")} disabled={!hasTrainees}
            style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: "none",
              background: hasTrainees ? colors.primary : colors.surface, color: hasTrainees ? "#fff" : colors.textMuted,
              fontSize: 15, fontWeight: 700, cursor: hasTrainees ? "pointer" : "not-allowed",
              boxShadow: hasTrainees ? "0 4px 14px rgba(52,211,153,0.25)" : "none" }}>
            Continue with {selectedTrainees.length} trainee{selectedTrainees.length !== 1 ? "s" : ""} →
          </button>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════
  // STEP 2: TEMPLATE SELECTION
  // ════════════════════════════════════════════
  if (step === "template") {
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 12 }}>
          <button onClick={() => setStep("trainees")} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronLeft size={20} color={colors.textPrimary} /></button>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>Choose Starting Point</h2>
            <span style={{ fontSize: 12, color: colors.textSecondary }}>Step 2: Template or custom</span>
          </div>
        </div>
        <StepBar />

        {/* Custom CTA */}
        <div style={{ padding: "0 20px", marginBottom: 16 }}>
          <button onClick={startCustom}
            style={{ width: "100%", background: gradients.workout, borderRadius: 18, padding: 20, border: "none", cursor: "pointer", textAlign: "left", boxShadow: "0 6px 20px rgba(52,211,153,0.25)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <Plus size={20} color="rgba(255,255,255,0.9)" />
              <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{tr("Start from Scratch")}</span>
            </div>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>Build a completely custom workout</span>
          </button>
        </div>

        {/* My Drafts */}
        <div style={{ padding: "0 20px", marginBottom: 16 }}>
          <button onClick={() => setStep("drafts")}
            style={{ width: "100%", background: colors.card, borderRadius: 16, padding: 16, border: `1.5px dashed ${colors.border}`, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${colors.warning}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FileText size={20} color={colors.warning} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("My Drafts")}</div>
              <div style={{ fontSize: 12, color: colors.textSecondary }}>Continue editing saved plans</div>
            </div>
            <ChevronRight size={16} color={colors.textMuted} style={{ marginLeft: "auto" }} />
          </button>
        </div>

        {/* Templates */}
        <div style={{ padding: "0 20px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: colors.textMuted, marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>Saved Templates</div>
          {workoutTemplates.map(tpl => (
            <div key={tpl.id} onClick={() => loadTemplate(tpl)}
              style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 10, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: colors.textPrimary }}>{tpl.name}</div>
                  <div style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2 }}>{tpl.desc} · {tpl.duration}</div>
                </div>
                <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 6, background: tpl.level === "Beginner" ? colors.successLight : tpl.level === "Advanced" ? colors.errorLight : colors.primaryLight,
                  color: tpl.level === "Beginner" ? colors.success : tpl.level === "Advanced" ? colors.error : colors.primary }}>{tpl.level}</span>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {tpl.exercises.filter(e => e.section === "main").slice(0, 4).map((e, i) => (
                  <span key={i} style={{ fontSize: 10, fontWeight: 500, padding: "3px 8px", borderRadius: 6, background: colors.surface, color: colors.textSecondary }}>{e.name}</span>
                ))}
                {tpl.exercises.filter(e => e.section === "main").length > 4 && (
                  <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 6, background: colors.surface, color: colors.textMuted }}>+{tpl.exercises.filter(e => e.section === "main").length - 4} more</span>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                <span style={{ fontSize: 11, color: colors.textMuted }}>{tpl.exercises.length} exercises</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: colors.primary }}>Use template →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════
  // STEP 2B: MY DRAFTS
  // ════════════════════════════════════════════
  if (step === "drafts") {
    // Sample draft data (in production, would come from props/context)
    const draftWorkouts = [
      { id: 101, name: "Lower Body Power", exercises: 10, created: "Feb 14", status: "draft" },
      { id: 102, name: "Morning HIIT", exercises: 6, created: "Feb 12", status: "draft" },
    ];
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 12 }}>
          <button onClick={() => setStep("template")} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronLeft size={20} color={colors.textPrimary} /></button>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>{tr("My Drafts")}</h2>
            <span style={{ fontSize: 12, color: colors.textSecondary }}>Continue editing your saved drafts</span>
          </div>
        </div>

        {draftWorkouts.length === 0 ? (
          <div style={{ padding: "40px 20px", textAlign: "center" }}>
            <div style={{ fontSize: 14, color: colors.textSecondary, marginBottom: 10 }}>{tr("No draft workouts yet")}</div>
            <div style={{ fontSize: 12, color: colors.textMuted }}>Start by creating a new workout</div>
          </div>
        ) : (
          <div style={{ padding: "0 20px" }}>
            {draftWorkouts.map(draft => (
              <div key={draft.id} onClick={() => { setWorkoutName(draft.name); setStep("builder"); }}
                style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 10, cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: colors.textPrimary }}>{draft.name}</div>
                    <div style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2 }}>{draft.exercises} exercises · Last edited: {draft.created}</div>
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 600, padding: "4px 10px", borderRadius: 6, background: colors.warningLight, color: colors.warning }}>{tr("Draft")}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                  <span style={{ fontSize: 11, color: colors.textMuted }}>Tap to continue editing</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: colors.primary }}>Edit Draft →</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ════════════════════════════════════════════
  // STEP 3: EXERCISE BUILDER
  // ════════════════════════════════════════════
  if (step === "builder") {
    // Muscle filter options for library
    const muscleFilters = ["All", ...new Set(exerciseLibrary.map(e => e.muscle))];
    const filteredLib = exerciseLibrary.filter(e =>
      (libFilter === "All" || e.muscle === libFilter) &&
      (!libSearch || e.name.toLowerCase().includes(libSearch.toLowerCase()))
    );

    // Render exercise card
    const ExerciseCard = ({ ex, idx, total }) => {
      const isEditing = editingNote === ex.id;
      const nameInvalid = !ex.name.trim();
      return (
        <div style={{ background: colors.card, borderRadius: 14, padding: 12, marginBottom: 8,
          border: `1.5px solid ${nameInvalid ? colors.error + "60" : colors.border}`, transition: "border-color 0.2s" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <button onClick={() => moveExercise(idx, -1)} disabled={idx === 0}
                style={{ background: "none", border: "none", cursor: idx === 0 ? "default" : "pointer", padding: 0, opacity: idx === 0 ? 0.3 : 1 }}>
                <ChevronUp size={14} color={colors.textMuted} />
              </button>
              <button onClick={() => moveExercise(idx, 1)} disabled={idx === total - 1}
                style={{ background: "none", border: "none", cursor: idx === total - 1 ? "default" : "pointer", padding: 0, opacity: idx === total - 1 ? 0.3 : 1 }}>
                <ChevronDown size={14} color={colors.textMuted} />
              </button>
            </div>
            <input value={ex.name}
              onChange={e => updateExercise(ex.id, "name", e.target.value)}
              placeholder="Exercise name *"
              style={{ flex: 1, border: "none", fontSize: 14, fontWeight: 700, color: nameInvalid ? colors.error : colors.textPrimary, outline: "none", background: "transparent" }} />
            <button onClick={() => duplicateExercise(ex.id)} title="Duplicate"
              style={{ background: colors.surface, border: "none", borderRadius: 6, width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Copy size={12} color={colors.textMuted} />
            </button>
            <button onClick={() => removeExercise(ex.id)} title="Remove"
              style={{ background: colors.errorLight, border: "none", borderRadius: 6, width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Trash2 size={12} color={colors.error} />
            </button>
          </div>
          {nameInvalid && <div style={{ fontSize: 10, color: colors.error, marginBottom: 6 }}>Exercise name is required</div>}

          {/* Sets/Reps/Weight/Rest */}
          <div style={{ display: "flex", gap: 6 }}>
            {[["Sets", "sets"], ["Reps", "reps"], ["Weight", "weight"], ["Rest", "rest"]].map(([label, key]) => (
              <div key={key} style={{ flex: 1 }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: colors.textMuted, marginBottom: 3, letterSpacing: 0.5, textTransform: "uppercase" }}>{label}</div>
                <input value={ex[key]}
                  onChange={e => updateExercise(ex.id, key, e.target.value)}
                  style={{ width: "100%", height: 32, borderRadius: 8, border: `1px solid ${colors.border}`, textAlign: "center",
                    fontSize: 13, fontWeight: 600, color: colors.textPrimary, outline: "none", boxSizing: "border-box" }} />
              </div>
            ))}
          </div>

          {/* Muscle Target Dropdown */}
          <div style={{ marginTop: 8, position: "relative" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: colors.textMuted, marginBottom: 3, letterSpacing: 0.5, textTransform: "uppercase" }}>Muscle Target</div>
            <button onClick={() => setShowMuscleDropdown(showMuscleDropdown === ex.id ? null : ex.id)}
              style={{ width: "100%", height: 34, borderRadius: 8, border: `1px solid ${ex.muscle ? colors.primary + "40" : colors.border}`,
                background: ex.muscle ? `${colors.primary}06` : "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 10px" }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: ex.muscle ? colors.textPrimary : colors.textMuted }}>{ex.muscle || "Select muscle group..."}</span>
              <ChevronDown size={14} color={colors.textMuted} />
            </button>
            {showMuscleDropdown === ex.id && (
              <>
                <div onClick={() => setShowMuscleDropdown(null)} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 50 }} />
                <div style={{ position: "absolute", top: 40, left: 0, right: 0, background: colors.card, borderRadius: 10, border: `1px solid ${colors.border}`,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)", zIndex: 51, maxHeight: 180, overflowY: "auto" }}>
                  {muscleOptions.map(m => (
                    <div key={m} onClick={() => { updateExercise(ex.id, "muscle", m); setShowMuscleDropdown(null); }}
                      style={{ padding: "8px 12px", fontSize: 12, fontWeight: ex.muscle === m ? 700 : 500,
                        color: ex.muscle === m ? colors.primary : colors.textPrimary, background: ex.muscle === m ? colors.primaryLight : "transparent",
                        cursor: "pointer", borderBottom: `1px solid ${colors.border}20` }}>
                      {m}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Instruction & Caution fields */}
          <div style={{ marginTop: 8, display: "flex", gap: 6 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: colors.primary, marginBottom: 3, letterSpacing: 0.5, textTransform: "uppercase" }}>{tr("Instruction")}</div>
              <textarea value={ex.instruction || ""} onChange={e => updateExercise(ex.id, "instruction", e.target.value)}
                placeholder="How to perform..." rows={2}
                style={{ width: "100%", borderRadius: 8, border: `1px solid ${colors.border}`, padding: "6px 8px", fontSize: 11, outline: "none", resize: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: colors.warning, marginBottom: 3, letterSpacing: 0.5, textTransform: "uppercase" }}>{tr("Caution")}</div>
              <textarea value={ex.caution || ""} onChange={e => updateExercise(ex.id, "caution", e.target.value)}
                placeholder="Safety notes..." rows={2}
                style={{ width: "100%", borderRadius: 8, border: `1px solid ${colors.warning}30`, padding: "6px 8px", fontSize: 11, outline: "none", resize: "none", fontFamily: "inherit", boxSizing: "border-box", background: `${colors.warning}04` }} />
            </div>
          </div>

          {/* Video Library */}
          <div style={{ marginTop: 8 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: colors.textMuted, letterSpacing: 0.5, textTransform: "uppercase" }}>Videos</div>
              <button onClick={() => { setVideoLibMuscle(ex.muscle || "All"); setVideoLibSearch(""); setSelectedVideos([]); setShowVideoLibModal({ exerciseId: ex.id }); }}
                style={{ background: colors.primaryLight, border: "none", borderRadius: 6, width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                title="Browse video library">
                <Plus size={12} color={colors.primary} />
              </button>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button onClick={() => updateExercise(ex.id, "mainVideo", ex.mainVideo ? "" : "main-demo.mp4")}
                style={{ flex: 1, height: 38, borderRadius: 8, border: ex.mainVideo ? `2px solid ${colors.primary}` : `1.5px dashed ${colors.border}`, background: ex.mainVideo ? `${colors.primary}08` : "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                <Video size={12} color={ex.mainVideo ? colors.primary : colors.textMuted} />
                <span style={{ fontSize: 10, fontWeight: 600, color: ex.mainVideo ? colors.primary : colors.textMuted }}>{ex.mainVideo ? "Main ✓" : "+ Main Video"}</span>
              </button>
              {[0, 1].map(vi => {
                const hasAlt = ex.altVideos && ex.altVideos[vi];
                return (
                  <button key={vi} onClick={() => {
                    const alts = [...(ex.altVideos || [])];
                    if (hasAlt) alts.splice(vi, 1); else alts[vi] = `alt-${vi + 1}.mp4`;
                    updateExercise(ex.id, "altVideos", alts);
                  }}
                    style={{ width: 38, height: 38, borderRadius: 8, border: hasAlt ? `1.5px solid ${colors.success}` : `1.5px dashed ${colors.border}`, background: hasAlt ? `${colors.success}08` : "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Video size={10} color={hasAlt ? colors.success : colors.textMuted} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notes */}
          {isEditing ? (
            <div style={{ marginTop: 8 }}>
              <textarea value={ex.note} onChange={e => updateExercise(ex.id, "note", e.target.value)}
                placeholder="Additional notes..." rows={2} autoFocus
                style={{ width: "100%", borderRadius: 8, border: `1px solid ${colors.border}`, padding: "8px 10px", fontSize: 12, outline: "none", resize: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
              <button onClick={() => setEditingNote(null)}
                style={{ marginTop: 4, background: "none", border: "none", fontSize: 11, fontWeight: 600, color: colors.primary, cursor: "pointer" }}>{tr("Done")}</button>
            </div>
          ) : (
            <div style={{ marginTop: 6, display: "flex", alignItems: "center", gap: 6 }}>
              {ex.note ? (
                <div onClick={() => setEditingNote(ex.id)} style={{ fontSize: 11, color: colors.textSecondary, fontStyle: "italic", cursor: "pointer", flex: 1 }}>📝 {ex.note}</div>
              ) : (
                <button onClick={() => setEditingNote(ex.id)}
                  style={{ background: "none", border: "none", fontSize: 11, color: colors.textMuted, cursor: "pointer", padding: 0 }}>+ Add note</button>
              )}
            </div>
          )}
        </div>
      );
    };

    // Section renderer
    const SectionBlock = ({ title, icon, color, sectionKey, exs }) => {
      const isExpanded = expandedSection === sectionKey;
      return (
        <div style={{ marginBottom: 12 }}>
          <div onClick={() => setExpandedSection(isExpanded ? "" : sectionKey)}
            style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: isExpanded ? 8 : 0, cursor: "pointer", padding: "6px 0" }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: color + "15", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {icon}
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary, flex: 1 }}>{title}</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted }}>{exs.length}</span>
            {isExpanded ? <ChevronUp size={16} color={colors.textMuted} /> : <ChevronDown size={16} color={colors.textMuted} />}
          </div>
          {isExpanded && (
            <div>
              {exs.map((ex, i) => {
                const globalIdx = exercises.findIndex(e => e.id === ex.id);
                return <ExerciseCard key={ex.id} ex={ex} idx={globalIdx} total={exercises.length} />;
              })}
              <div style={{ display: "flex", gap: 6 }}>
                <button onClick={() => { addBlankExercise(sectionKey); }}
                  style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: `1.5px dashed ${color}40`, background: color + "08",
                    color, fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                  <Plus size={13} /> Add
                </button>
                <button onClick={() => setShowExerciseLib(sectionKey)}
                  style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: `1px solid ${colors.border}`, background: "#fff",
                    color: colors.textSecondary, fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                  <Search size={13} /> Library
                </button>
              </div>
            </div>
          )}
        </div>
      );
    };

    return (
      <div>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 20px", marginBottom: 12 }}>
          <button onClick={() => setStep("template")} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronLeft size={20} color={colors.textPrimary} /></button>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: colors.textPrimary }}>{tr("Build Workout")}</h2>
            <span style={{ fontSize: 11, color: colors.textSecondary }}>Step 3: Add & customize exercises</span>
          </div>
          <button onClick={() => onShowToastr("Draft saved ✓")} title="Save draft"
            style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <Save size={16} color={colors.textSecondary} />
          </button>
        </div>
        <StepBar />

        {/* Trainee context */}
        <div style={{ margin: "0 20px 10px", background: colors.primaryLight, borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, border: `1px solid ${colors.primary}15` }}>
          <Users size={14} color={colors.primary} />
          <span style={{ fontSize: 12, fontWeight: 600, color: colors.primary }}>{selectedTraineeNames.slice(0, 2).join(", ")}{selectedTrainees.length > 2 ? ` +${selectedTrainees.length - 2} more` : ""}</span>
        </div>

        {/* Workout name */}
        <div style={{ padding: "0 20px", marginBottom: 12 }}>
          <input value={workoutName} onChange={e => setWorkoutName(e.target.value)}
            placeholder="Workout name *"
            style={{ width: "100%", height: 44, borderRadius: 12, border: `1.5px solid ${!hasName && exercises.length > 1 ? colors.error : colors.border}`, padding: "0 14px", fontSize: 15, fontWeight: 700, color: colors.textPrimary, outline: "none", boxSizing: "border-box" }} />
        </div>

        {/* Difficulty Level */}
        <div style={{ padding: "0 20px", marginBottom: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 4, letterSpacing: 0.5, textTransform: "uppercase" }}>{tr("Difficulty Level")}</div>
          <div style={{ display: "flex", gap: 6 }}>
            {["Easy", "Medium", "Hard"].map(lvl => {
              const lvlColor = lvl === "Easy" ? colors.success : lvl === "Medium" ? colors.warning : colors.error;
              const isActive = planDifficulty === lvl;
              return (
                <button key={lvl} onClick={() => setPlanDifficulty(lvl)}
                  style={{ flex: 1, padding: "8px 0", borderRadius: 10, border: isActive ? `2px solid ${lvlColor}` : `1.5px solid ${colors.border}`, background: isActive ? `${lvlColor}10` : "transparent", fontSize: 12, fontWeight: isActive ? 700 : 500, color: isActive ? lvlColor : colors.textSecondary, cursor: "pointer", transition: "all 0.2s" }}>
                  {lvl}
                </button>
              );
            })}
          </div>
        </div>

        {/* Plan-level Instruction & Caution */}
        <div style={{ padding: "0 20px", marginBottom: 12 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: colors.primary, marginBottom: 4, letterSpacing: 0.5, textTransform: "uppercase" }}>Plan Instruction</div>
              <textarea value={planInstruction} onChange={e => setPlanInstruction(e.target.value)}
                placeholder="General instructions for this plan..."
                rows={2}
                style={{ width: "100%", borderRadius: 10, border: `1.5px solid ${colors.border}`, padding: "8px 10px", fontSize: 12, outline: "none", resize: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: colors.warning, marginBottom: 4, letterSpacing: 0.5, textTransform: "uppercase" }}>Plan Caution</div>
              <textarea value={planCaution} onChange={e => setPlanCaution(e.target.value)}
                placeholder="Safety warnings for plan..."
                rows={2}
                style={{ width: "100%", borderRadius: 10, border: `1.5px solid ${colors.warning}30`, padding: "8px 10px", fontSize: 12, outline: "none", resize: "none", fontFamily: "inherit", boxSizing: "border-box", background: `${colors.warning}04` }} />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ display: "flex", gap: 8, padding: "0 20px", marginBottom: 14 }}>
          <div style={{ flex: 1, padding: "8px 0", background: colors.surface, borderRadius: 10, textAlign: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: colors.textPrimary }}>{exercises.length}</div>
            <div style={{ fontSize: 9, color: colors.textMuted, fontWeight: 600, textTransform: "uppercase" }}>{tr("Exercises")}</div>
          </div>
          <div style={{ flex: 1, padding: "8px 0", background: colors.surface, borderRadius: 10, textAlign: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: colors.textPrimary }}>~{Math.round(estDuration)}</div>
            <div style={{ fontSize: 9, color: colors.textMuted, fontWeight: 600, textTransform: "uppercase" }}>{tr("Minutes")}</div>
          </div>
          <div style={{ flex: 1, padding: "8px 0", background: colors.surface, borderRadius: 10, textAlign: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: colors.textPrimary }}>{muscleGroups.length}</div>
            <div style={{ fontSize: 9, color: colors.textMuted, fontWeight: 600, textTransform: "uppercase" }}>Muscles</div>
          </div>
        </div>

        {/* Exercise sections */}
        <div style={{ padding: "0 20px" }}>
          <SectionBlock title="Warm-up" sectionKey="warmup" color="#F97316" exs={warmupExs}
            icon={<Flame size={14} color="#F97316" />} />
          <SectionBlock title="Main Exercises" sectionKey="main" color={colors.primary} exs={mainExs}
            icon={<Dumbbell size={14} color={colors.primary} />} />
          <SectionBlock title="Cool-down" sectionKey="cooldown" color="#06B6D4" exs={cooldownExs}
            icon={<Activity size={14} color="#06B6D4" />} />
        </div>

        {/* Muscle tags */}
        {muscleGroups.length > 0 && (
          <div style={{ padding: "4px 20px 12px", display: "flex", gap: 4, flexWrap: "wrap" }}>
            {muscleGroups.map(m => (
              <span key={m} style={{ fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 8, background: colors.surface, color: colors.textSecondary }}>{m}</span>
            ))}
          </div>
        )}

        {/* Validation */}
        <div style={{ padding: "0 20px", marginBottom: 8 }}>
          <div style={{ background: hasExercises && !hasEmptyName ? colors.successLight : colors.warningLight, borderRadius: 10, padding: "8px 12px", display: "flex", alignItems: "center", gap: 6 }}>
            {hasExercises && !hasEmptyName ? <Check size={14} color={colors.success} /> : <AlertTriangle size={14} color={colors.warning} />}
            <span style={{ fontSize: 12, fontWeight: 600, color: hasExercises && !hasEmptyName ? colors.success : colors.warning }}>
              {!hasExercises ? "Add at least one exercise" : hasEmptyName ? "Some exercises have no name" : !hasName ? "Add a workout name" : `${exercises.length} exercises ready`}
            </span>
          </div>
        </div>

        {/* Next CTA */}
        <div style={{ padding: "8px 20px 12px" }}>
          <button onClick={() => hasExercises && !hasEmptyName && hasName && setStep("schedule")}
            disabled={!hasExercises || hasEmptyName || !hasName}
            style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: "none",
              background: hasExercises && !hasEmptyName && hasName ? colors.primary : colors.surface,
              color: hasExercises && !hasEmptyName && hasName ? "#fff" : colors.textMuted,
              fontSize: 15, fontWeight: 700, cursor: hasExercises && !hasEmptyName && hasName ? "pointer" : "not-allowed",
              boxShadow: hasExercises && !hasEmptyName && hasName ? "0 4px 14px rgba(52,211,153,0.25)" : "none" }}>
            Continue to Schedule →
          </button>
        </div>

        {/* Exercise Library Bottom Sheet */}
        {showExerciseLib && (
          <BottomSheet title="Exercise Library" onClose={() => { setShowExerciseLib(false); setLibSearch(""); setLibFilter("All"); }}>
            {/* Search */}
            <div style={{ position: "relative", marginBottom: 10 }}>
              <Search size={16} color={colors.textMuted} style={{ position: "absolute", left: 12, top: 13 }} />
              <input value={libSearch} onChange={e => setLibSearch(e.target.value)} placeholder="Search exercises..." autoFocus
                style={{ width: "100%", height: 42, borderRadius: 12, border: `1.5px solid ${colors.border}`, paddingLeft: 36, paddingRight: 14, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
            </div>
            {/* Muscle filters */}
            <div style={{ display: "flex", gap: 4, marginBottom: 12, overflowX: "auto", paddingBottom: 4 }}>
              {muscleFilters.map(m => (
                <button key={m} onClick={() => setLibFilter(m)}
                  style={{ padding: "5px 12px", borderRadius: 8, border: "none", fontSize: 11, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
                    background: libFilter === m ? colors.primary : colors.surface, color: libFilter === m ? "#fff" : colors.textSecondary }}>
                  {m}
                </button>
              ))}
            </div>
            {/* Exercise list */}
            <div style={{ maxHeight: 280, overflow: "auto" }}>
              {filteredLib.map(ex => (
                <div key={ex.id} onClick={() => addExercise(ex, typeof showExerciseLib === "string" ? showExerciseLib : "main")}
                  style={{ padding: "11px 0", borderBottom: `1px solid ${colors.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>{ex.name}</div>
                    <div style={{ fontSize: 11, color: colors.textSecondary, marginTop: 1 }}>{ex.muscle} · {ex.equipment} · {ex.type}</div>
                  </div>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: colors.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Plus size={14} color={colors.primary} />
                  </div>
                </div>
              ))}
              {filteredLib.length === 0 && (
                <div style={{ textAlign: "center", padding: "24px 0", color: colors.textMuted, fontSize: 13 }}>{tr("No exercises found")}</div>
              )}
            </div>
          </BottomSheet>
        )}

        {/* Video Library Modal */}
        {showVideoLibModal && (
          <BottomSheet title="Video Library" onClose={() => { setShowVideoLibModal(null); setSelectedVideos([]); setVideoLibSearch(""); setVideoLibMuscle("All"); }}>
            <div style={{ position: "relative", marginBottom: 10 }}>
              <Search size={16} color={colors.textMuted} style={{ position: "absolute", left: 12, top: 13 }} />
              <input value={videoLibSearch} onChange={e => setVideoLibSearch(e.target.value)} placeholder="Search videos..." autoFocus
                style={{ width: "100%", height: 42, borderRadius: 12, border: `1.5px solid ${colors.border}`, paddingLeft: 36, paddingRight: 14, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
            </div>
            <div style={{ display: "flex", gap: 4, marginBottom: 10, overflowX: "auto", paddingBottom: 4 }}>
              {["All", ...new Set(videoLibraryData.map(v => v.muscle))].map(m => (
                <button key={m} onClick={() => setVideoLibMuscle(m)}
                  style={{ padding: "5px 12px", borderRadius: 8, border: "none", fontSize: 11, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
                    background: videoLibMuscle === m ? colors.primary : colors.surface, color: videoLibMuscle === m ? "#fff" : colors.textSecondary }}>
                  {m}
                </button>
              ))}
            </div>
            {selectedVideos.length > 0 && (
              <div style={{ padding: "6px 10px", borderRadius: 8, background: colors.primaryLight, marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: colors.primary }}>{selectedVideos.length} video{selectedVideos.length > 1 ? "s" : ""} selected (max 3)</span>
                <button onClick={() => setSelectedVideos([])} style={{ background: "none", border: "none", fontSize: 11, fontWeight: 600, color: colors.error, cursor: "pointer" }}>{tr("Clear")}</button>
              </div>
            )}
            <div style={{ maxHeight: 240, overflow: "auto" }}>
              {videoLibraryData.filter(v => (videoLibMuscle === "All" || v.muscle === videoLibMuscle) && (!videoLibSearch || v.title.toLowerCase().includes(videoLibSearch.toLowerCase()))).map(v => (
                <div key={v.id} onClick={() => { if (selectedVideos.includes(v.id)) { setSelectedVideos(selectedVideos.filter(sv => sv !== v.id)); } else if (selectedVideos.length < 3) { setSelectedVideos([...selectedVideos, v.id]); } }}
                  style={{ padding: "10px 8px", borderBottom: `1px solid ${colors.border}`, display: "flex", alignItems: "center", gap: 10,
                    cursor: !selectedVideos.includes(v.id) && selectedVideos.length >= 3 ? "not-allowed" : "pointer",
                    opacity: !selectedVideos.includes(v.id) && selectedVideos.length >= 3 ? 0.4 : 1,
                    background: selectedVideos.includes(v.id) ? colors.primaryLight : "transparent" }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, border: selectedVideos.includes(v.id) ? "none" : `2px solid ${colors.border}`,
                    background: selectedVideos.includes(v.id) ? colors.primary : "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {selectedVideos.includes(v.id) && <Check size={12} color="#fff" strokeWidth={3} />}
                  </div>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: colors.surface, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                    {getVideoIcon(v.thumbnail)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{v.title}</div>
                    <div style={{ fontSize: 11, color: colors.textSecondary, marginTop: 1 }}>{v.muscle} · {v.duration}</div>
                  </div>
                  <Play size={14} color={colors.textMuted} />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12 }}>
              <button onClick={() => {
                if (selectedVideos.length > 0 && showVideoLibModal) {
                  updateExercise(showVideoLibModal.exerciseId, "mainVideo", selectedVideos[0]);
                  if (selectedVideos.length > 1) updateExercise(showVideoLibModal.exerciseId, "altVideos", selectedVideos.slice(1, 3));
                  onShowToast(selectedVideos.length + " video" + (selectedVideos.length > 1 ? "s" : "") + " attached");
                }
                setShowVideoLibModal(null); setSelectedVideos([]);
              }} disabled={selectedVideos.length === 0}
                style={{ width: "100%", padding: "12px 0", borderRadius: 12, border: "none",
                  background: selectedVideos.length > 0 ? colors.primary : colors.surface,
                  color: selectedVideos.length > 0 ? "#fff" : colors.textMuted,
                  fontSize: 14, fontWeight: 700, cursor: selectedVideos.length > 0 ? "pointer" : "not-allowed" }}>
                {selectedVideos.length > 0 ? "Attach " + selectedVideos.length + " Video" + (selectedVideos.length > 1 ? "s" : "") : "Attach Videos"}
              </button>
            </div>
          </BottomSheet>
        )}
      </div>
    );
  }

  // ════════════════════════════════════════════
  // STEP 4: SCHEDULE ASSIGNMENT
  // ════════════════════════════════════════════
  if (step === "schedule") {
    // Mock conflict detection
    const hasConflict = scheduleTime === "16:00" && selectedTrainees.includes(1);

    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 12 }}>
          <button onClick={() => setStep("builder")} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronLeft size={20} color={colors.textPrimary} /></button>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>Schedule</h2>
            <span style={{ fontSize: 12, color: colors.textSecondary }}>Step 4: When to assign</span>
          </div>
        </div>
        <StepBar />

        <div style={{ padding: "0 20px" }}>
          {/* Date */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Date</div>
            <input type="date" value={scheduleDate} onChange={e => setScheduleDate(e.target.value)}
              style={{ width: "100%", height: 48, borderRadius: 12, border: `1.5px solid ${colors.border}`, padding: "0 14px", fontSize: 14, fontWeight: 600, color: colors.textPrimary, outline: "none", boxSizing: "border-box" }} />
          </div>

          {/* Time */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Time</div>
            <input type="time" value={scheduleTime} onChange={e => setScheduleTime(e.target.value)}
              style={{ width: "100%", height: 48, borderRadius: 12, border: `1.5px solid ${hasConflict ? colors.warning : colors.border}`, padding: "0 14px", fontSize: 14, fontWeight: 600, color: colors.textPrimary, outline: "none", boxSizing: "border-box" }} />
            {hasConflict && (
              <div style={{ marginTop: 6, padding: "8px 12px", background: colors.warningLight, borderRadius: 10, display: "flex", alignItems: "center", gap: 6 }}>
                <AlertTriangle size={13} color={colors.warning} />
                <span style={{ fontSize: 12, color: colors.warning, fontWeight: 600 }}>Sarah M. already has a session at this time</span>
              </div>
            )}
          </div>

          {/* Recurrence */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Recurrence</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {[["none", "One-time"], ["weekly", "Weekly"], ["biweekly", "Bi-weekly"], ["monthly", "Monthly"]].map(([key, label]) => (
                <button key={key} onClick={() => setRecurrence(key)}
                  style={{ padding: "10px 16px", borderRadius: 10, border: "none", fontSize: 13, fontWeight: 600, cursor: "pointer",
                    background: recurrence === key ? colors.primaryLight : colors.surface,
                    color: recurrence === key ? colors.primary : colors.textSecondary }}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div style={{ background: colors.card, borderRadius: 16, border: `1px solid ${colors.border}`, padding: 16, marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary, marginBottom: 14 }}>{tr("Notifications")}</div>
            {[
              { label: "Remind trainee before session", value: notifyTrainee, toggle: () => setNotifyTrainee(!notifyTrainee) },
              { label: "Alert me if workout missed", value: alertIfMissed, toggle: () => setAlertIfMissed(!alertIfMissed) },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderTop: i > 0 ? `1px solid ${colors.border}` : "none" }}>
                <span style={{ fontSize: 13, color: colors.textSecondary }}>{item.label}</span>
                <button onClick={item.toggle}
                  style={{ width: 44, height: 24, borderRadius: 12, border: "none", background: item.value ? colors.success : colors.surface, cursor: "pointer", position: "relative", transition: "background 0.2s" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#fff", position: "absolute", top: 2, left: item.value ? 22 : 2, transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} />
                </button>
              </div>
            ))}
          </div>

          {/* Visual calendar preview */}
          <div style={{ background: colors.card, borderRadius: 16, border: `1px solid ${colors.border}`, padding: 16, marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary, marginBottom: 12 }}>{tr("Preview")}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: colors.primaryLight, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 8, fontWeight: 700, color: colors.primary, textTransform: "uppercase" }}>
                  {new Date(scheduleDate + "T12:00:00").toLocaleDateString("en", { month: "short" })}
                </span>
                <span style={{ fontSize: 18, fontWeight: 900, color: colors.primary, lineHeight: 1 }}>
                  {new Date(scheduleDate + "T12:00:00").getDate()}
                </span>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>{workoutName}</div>
                <div style={{ fontSize: 12, color: colors.textSecondary }}>{fmt12(scheduleTime)} · {exercises.length} exercises · ~{Math.round(estDuration)} min</div>
                <div style={{ fontSize: 11, color: colors.textMuted, marginTop: 2 }}>
                  {recurrence !== "none" ? `Repeats ${recurrence}` : "One-time session"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: "0 20px 12px" }}>
          <button onClick={() => setStep("review")}
            style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: "none", background: colors.primary, color: "#fff",
              fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 14px rgba(52,211,153,0.25)" }}>
            Review & Confirm →
          </button>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════
  // STEP 5: REVIEW & CONFIRM
  // ════════════════════════════════════════════
  if (step === "review") {
    const selectedTraineeObjs = allTraineesData.filter(t => selectedTrainees.includes(t.id));

    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 12 }}>
          <button onClick={() => setStep("schedule")} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronLeft size={20} color={colors.textPrimary} /></button>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>Review & Confirm</h2>
            <span style={{ fontSize: 12, color: colors.textSecondary }}>Step 5: Final check</span>
          </div>
        </div>
        <StepBar />

        <div style={{ padding: "0 20px" }}>
          {/* Workout summary card */}
          <div style={{ background: gradients.workout, borderRadius: 20, padding: 20, marginBottom: 16, boxShadow: "0 6px 24px rgba(52,211,153,0.25)" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 4 }}>{workoutName}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginBottom: 12 }}>
              {exercises.length} exercises · ~{Math.round(estDuration)} min
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {muscleGroups.map(m => (
                <span key={m} style={{ fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 8, background: "rgba(255,255,255,0.2)", color: "#fff" }}>{m}</span>
              ))}
            </div>
          </div>

          {/* Trainees */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>Assigned to</div>
              <button onClick={() => setStep("trainees")} style={{ background: "none", border: "none", fontSize: 12, fontWeight: 600, color: colors.primary, cursor: "pointer" }}>{tr("Edit")}</button>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {selectedTraineeObjs.map(t => (
                <div key={t.id} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px 6px 6px", borderRadius: 20, background: colors.surface }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: colors.primaryLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: colors.primary }}>{t.avatar}</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: colors.textPrimary }}>{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>Schedule</div>
              <button onClick={() => setStep("schedule")} style={{ background: "none", border: "none", fontSize: 12, fontWeight: 600, color: colors.primary, cursor: "pointer" }}>{tr("Edit")}</button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Calendar size={18} color={colors.primary} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>
                  {new Date(scheduleDate + "T12:00:00").toLocaleDateString("en", { weekday: "long", month: "long", day: "numeric" })}
                </div>
                <div style={{ fontSize: 12, color: colors.textSecondary }}>
                  {fmt12(scheduleTime)} · {recurrence !== "none" ? `Repeats ${recurrence}` : "One-time"}
                </div>
              </div>
            </div>
          </div>

          {/* Exercise list */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("Exercises")}</div>
              <button onClick={() => setStep("builder")} style={{ background: "none", border: "none", fontSize: 12, fontWeight: 600, color: colors.primary, cursor: "pointer" }}>{tr("Edit")}</button>
            </div>
            {exercises.map((ex, i) => (
              <div key={ex.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderTop: i > 0 ? `1px solid ${colors.border}` : "none" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                  background: ex.section === "warmup" ? "#F97316" : ex.section === "cooldown" ? "#06B6D4" : colors.primary }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{ex.name}</div>
                  <div style={{ fontSize: 11, color: colors.textSecondary }}>{ex.sets} sets × {ex.reps} · {ex.weight} · Rest {ex.rest}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Notifications */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary, marginBottom: 8 }}>{tr("Notifications")}</div>
            <div style={{ fontSize: 12, color: colors.textSecondary }}>
              {notifyTrainee ? "✓ Trainee will be reminded" : "✗ No trainee reminder"}
              {" · "}
              {alertIfMissed ? "✓ Alert if missed" : "✗ No missed alert"}
            </div>
          </div>

          {/* Save as template */}
          <button onClick={() => onShowToastr("Saved as template ✓")}
            style={{ width: "100%", padding: "12px 0", borderRadius: 12, border: `1.5px dashed ${colors.border}`, background: "transparent",
              color: colors.primary, fontSize: 13, fontWeight: 600, cursor: "pointer", marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <Bookmark size={14} /> Save as Template
          </button>

          {/* Confirm */}
          <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
            <button onClick={() => onShowToastr("Draft saved ✓")}
              style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 14, fontWeight: 600, color: colors.textPrimary, cursor: "pointer" }}>
              Save Draft
            </button>
            <button onClick={() => setShowConfirm(true)} disabled={!canConfirm}
              style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: "none",
                background: canConfirm ? colors.primary : colors.surface, color: canConfirm ? "#fff" : colors.textMuted,
                fontSize: 14, fontWeight: 700, cursor: canConfirm ? "pointer" : "not-allowed",
                boxShadow: canConfirm ? "0 4px 14px rgba(52,211,153,0.25)" : "none" }}>
              Assign Workout →
            </button>
          </div>
        </div>

        {showConfirm && (
          <ConfirmDialog
            title="Assign Workout?"
            message={`Assign "${workoutName}" to ${selectedTrainees.length} trainee${selectedTrainees.length > 1 ? "s" : ""}? They will be notified immediately.`}
            onConfirm={() => { setShowConfirm(false); onShowToast(`Workout assigned to ${selectedTrainees.length} trainee${selectedTrainees.length > 1 ? "s" : ""}! 🎉`); onBack(); }}
            onCancel={() => setShowConfirm(false)}
          />
        )}
      </div>
    );
  }

  return null;
}

// ═══════════════════════════════════════════════════════
// NUTRITION PLAN BUILDER (Coach)
// ═══════════════════════════════════════════════════════

// Macro color map
const macroColors = { protein: "#8B5CF6", carbs: "#F59E0B", fat: "#EF4444" };

// Food database for search
const foodDatabase = [
  { name: "Chicken Breast (grilled)", cal: 165, p: 31, c: 0, f: 3.6, unit: "100g" },
  { name: "Brown Rice (cooked)", cal: 123, p: 2.7, c: 25.6, f: 1, unit: "100g" },
  { name: "Broccoli (steamed)", cal: 55, p: 3.7, c: 11, f: 0.6, unit: "100g" },
  { name: "Salmon Fillet", cal: 208, p: 20, c: 0, f: 13, unit: "100g" },
  { name: "Sweet Potato (baked)", cal: 103, p: 2.3, c: 24, f: 0.1, unit: "100g" },
  { name: "Egg (whole, boiled)", cal: 78, p: 6, c: 0.6, f: 5, unit: "50g" },
  { name: "Oatmeal (cooked)", cal: 71, p: 2.5, c: 12, f: 1.5, unit: "100g" },
  { name: "Greek Yogurt (plain)", cal: 59, p: 10, c: 3.6, f: 0.4, unit: "100g" },
  { name: "Banana", cal: 105, p: 1.3, c: 27, f: 0.4, unit: "120g" },
  { name: "Whey Protein Shake", cal: 120, p: 24, c: 3, f: 1.5, unit: "30g" },
  { name: "Olive Oil", cal: 119, p: 0, c: 0, f: 14, unit: "14g" },
  { name: "Avocado", cal: 160, p: 2, c: 8.5, f: 14.7, unit: "100g" },
  { name: "Almond Butter", cal: 98, p: 3.4, c: 3, f: 9, unit: "15g" },
  { name: "Tuna (canned, drained)", cal: 116, p: 25.5, c: 0, f: 0.8, unit: "100g" },
  { name: "Quinoa (cooked)", cal: 120, p: 4.4, c: 21, f: 1.9, unit: "100g" },
  { name: "Mixed Salad Greens", cal: 20, p: 1.5, c: 3.5, f: 0.2, unit: "100g" },
];

// Macro Ring SVG
function MacroRing({ label, current, target, color, size = 56 }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(current / target, 1.2);
  const offset = circ - pct * circ;
  const overTarget = current > target * 1.1;
  const strokeColor = overTarget ? colors.error : color;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={colors.surface} strokeWidth="5" />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={strokeColor} strokeWidth="5"
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round" style={{ transition: "stroke-dashoffset 0.5s ease, stroke 0.3s" }} />
      </svg>
      <div style={{ position: "relative", marginTop: -size + 2, height: size, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: overTarget ? colors.error : colors.textPrimary }}>{current}g</span>
      </div>
      <div style={{ fontSize: 10, fontWeight: 600, color: colors.textMuted, marginTop: 2 }}>{label}</div>
      <div style={{ fontSize: 9, color: overTarget ? colors.error : colors.textMuted }}>{target}g target</div>
    </div>
  );
}

// Macro Slider
function MacroSlider({ label, value, color, pct, onChange }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 3, background: color }} />
          <span style={{ fontSize: 12, fontWeight: 600, color: colors.textPrimary }}>{label}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{value}g</span>
          <span style={{ fontSize: 11, color: colors.textMuted }}>({pct}%)</span>
        </div>
      </div>
      <input type="range" min="0" max="400" value={value} onChange={e => onChange(Number(e.target.value))}
        style={{ width: "100%", height: 6, appearance: "none", background: colors.surface, borderRadius: 3, outline: "none",
          accentColor: color }} />
    </div>
  );
}

// Food Search Bottom Sheet
function FoodSearchSheet({ onClose, onAddFood }) {
  const [query, setQuery] = useState("");
  const [recentTab, setRecentTab] = useState("search");
  const filtered = foodDatabase.filter(f => f.name.toLowerCase().includes(query.toLowerCase()));

  const recents = foodDatabase.slice(0, 5);

  return (
    <BottomSheet title="Add Food Item" onClose={onClose}>
      <div style={{ display: "flex", gap: 4, background: colors.surface, borderRadius: 10, padding: 3, marginBottom: 14 }}>
        {["search", "recent", "favorites"].map(tab => (
          <button key={tab} onClick={() => setRecentTab(tab)}
            style={{ flex: 1, padding: "8px 0", borderRadius: 8, border: "none", background: recentTab === tab ? colors.card : "transparent",
              color: recentTab === tab ? colors.primary : colors.textMuted, fontSize: 11, fontWeight: 600, cursor: "pointer",
              textTransform: "capitalize", boxShadow: recentTab === tab ? "0 1px 3px rgba(0,0,0,0.08)" : "none" }}>
            {tab === "search" && "Search"}{tab === "recent" && "Recent"}{tab === "favorites" && "Favorites"}
          </button>
        ))}
      </div>

      {recentTab === "search" && (
        <div style={{ position: "relative", marginBottom: 12 }}>
          <Search size={16} color={colors.textMuted} style={{ position: "absolute", left: 12, top: 14 }} />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search foods..." autoFocus
            style={{ width: "100%", height: 44, borderRadius: 12, border: `1.5px solid ${colors.border}`, paddingLeft: 36, paddingRight: 14, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
        </div>
      )}

      <div style={{ maxHeight: 280, overflow: "auto" }}>
        {(recentTab === "search" ? filtered : recents).map((food, i) => (
          <div key={i} onClick={() => { onAddFood({ ...food, qty: 1 }); onClose(); }}
            style={{ padding: "12px 0", borderBottom: `1px solid ${colors.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>{food.name}</div>
              <div style={{ fontSize: 11, color: colors.textSecondary, marginTop: 2 }}>
                {food.cal} cal · P: {food.p}g · C: {food.c}g · F: {food.f}g · per {food.unit}
              </div>
            </div>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: colors.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Plus size={14} color={colors.primary} />
            </div>
          </div>
        ))}
        {recentTab === "search" && filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "24px 0", color: colors.textMuted, fontSize: 13 }}>
            No foods found. Try a different search.
          </div>
        )}
      </div>
    </BottomSheet>
  );
}

// Trainee Selector Screen
function TraineeSelector({ onSelect, onBack }) {
  const trainees = [
    { name: "Sarah M.", goal: "Weight loss", level: "Intermediate", status: "active", note: "Knee injury" },
    { name: "Ahmed K.", goal: "Muscle gain", level: "Advanced", status: "active", note: "" },
    { name: "Lina R.", goal: "Toning", level: "Beginner", status: "active", note: "" },
    { name: "Omar T.", goal: "Endurance", level: "Intermediate", status: "pending", note: "" },
  ];
  const [searchQ, setSearchQ] = useState("");
  const filtered = trainees.filter(t => t.name.toLowerCase().includes(searchQ.toLowerCase()));

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 16 }}>
        <button onClick={onBack} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <ChevronLeft size={20} color={colors.textPrimary} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>{tr("Select Trainee")}</h2>
      </div>

      <div style={{ padding: "0 20px", marginBottom: 16, position: "relative" }}>
        <Search size={16} color={colors.textMuted} style={{ position: "absolute", left: 32, top: 14 }} />
        <input value={searchQ} onChange={e => setSearchQ(e.target.value)} placeholder="Search trainees..."
          style={{ width: "100%", height: 44, borderRadius: 12, border: `1.5px solid ${colors.border}`, paddingLeft: 36, paddingRight: 14, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
      </div>

      <div style={{ padding: "0 20px" }}>
        {filtered.map((t, i) => {
          const disabled = t.status === "pending";
          return (
            <div key={i} onClick={() => !disabled && onSelect(t)}
              style={{ background: colors.card, borderRadius: 16, padding: 16, marginBottom: 10, border: `1px solid ${colors.border}`,
                display: "flex", alignItems: "center", gap: 14, cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.5 : 1, transition: "transform 0.15s" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: disabled ? colors.surface : colors.primaryLight,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <User size={22} color={disabled ? colors.textMuted : colors.primary} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: colors.textPrimary }}>{t.name}</span>
                  <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6,
                    background: !disabled ? colors.successLight : colors.surface,
                    color: !disabled ? colors.success : colors.textMuted }}>
                    {!disabled ? "Active" : "Pending"}
                  </span>
                </div>
                <div style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2 }}>
                  {t.goal} · {t.level}
                  {t.note && <span style={{ color: colors.warning }}> · ⚠ {t.note}</span>}
                </div>
              </div>
              <ChevronRight size={18} color={disabled ? colors.surface : colors.textMuted} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Main Nutrition Plan Builder
function NutritionPlanBuilder({ onBack, onShowToast }) {
  // Step: "trainees" → "template" → "builder" → "schedule" → "review"
  const [step, setStep] = useState("trainees");

  // Step 1: Trainee selection
  const [selectedTrainees, setSelectedTrainees] = useState([]);
  const [traineeSearch, setTraineeSearch] = useState("");

  // Step 2: Template selection
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Step 4: Schedule (date range)
  const [fromDate, setFromDate] = useState("2025-02-17");
  const [toDate, setToDate] = useState("2025-02-23");
  const [notifyTrainee, setNotifyTrainee] = useState(true);
  const [alertIfMissed, setAlertIfMissed] = useState(true);

  // Plan metadata
  const [planName, setPlanName] = useState("Week 1 — Lean Cut");
  const [targetCal, setTargetCal] = useState(2100);

  // Macro targets (grams)
  const [proteinG, setProteinG] = useState(150);
  const [carbsG, setCarbsG] = useState(230);
  const [fatG, setFatG] = useState(70);

  // Days & active day
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [activeDay, setActiveDay] = useState(0);
  const [sameEveryDay, setSameEveryDay] = useState(true);

  // Meals per day (7 days, each with meals array)
  // Format 24h time to 12h display
  const formatTime = (t) => {
    if (!t) return "";
    const [h, m] = t.split(":").map(Number);
    const ampm = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 || 12;
    return `${h12}:${m.toString().padStart(2, "0")} ${ampm}`;
  };

  const defaultMeals = [
    { name: "Breakfast", time: "07:30", expanded: true, instruction: "", caution: "", foods: [
      { name: "Oatmeal (cooked)", qty: 2, unit: "100g", cal: 142, p: 5, c: 24, f: 3 },
      { name: "Banana", qty: 1, unit: "1 medium", cal: 105, p: 1.3, c: 27, f: 0.4 },
      { name: "Whey Protein Shake", qty: 1, unit: "1 scoop", cal: 120, p: 24, c: 3, f: 1.5 },
    ]},
    { name: "Lunch", time: "12:30", expanded: false, instruction: "", caution: "", foods: [
      { name: "Chicken Breast (grilled)", qty: 1.5, unit: "100g", cal: 248, p: 46.5, c: 0, f: 5.4 },
      { name: "Brown Rice (cooked)", qty: 1.5, unit: "100g", cal: 185, p: 4, c: 38.4, f: 1.5 },
      { name: "Broccoli (steamed)", qty: 1, unit: "100g", cal: 55, p: 3.7, c: 11, f: 0.6 },
    ]},
    { name: "Dinner", time: "19:00", expanded: false, instruction: "", caution: "", foods: [
      { name: "Salmon Fillet", qty: 1.5, unit: "100g", cal: 312, p: 30, c: 0, f: 19.5 },
      { name: "Sweet Potato (baked)", qty: 2, unit: "100g", cal: 206, p: 4.6, c: 48, f: 0.2 },
      { name: "Mixed Salad Greens", qty: 1, unit: "100g", cal: 20, p: 1.5, c: 3.5, f: 0.2 },
      { name: "Olive Oil", qty: 1, unit: "1 tbsp", cal: 119, p: 0, c: 0, f: 14 },
    ]},
    { name: "Snack", time: "16:00", expanded: false, instruction: "", caution: "", foods: [
      { name: "Greek Yogurt (plain)", qty: 1.5, unit: "100g", cal: 89, p: 15, c: 5.4, f: 0.6 },
      { name: "Almond Butter", qty: 1, unit: "1 tbsp", cal: 98, p: 3.4, c: 3, f: 9 },
    ]},
  ];

  const [dayMeals, setDayMeals] = useState(
    Array(7).fill(null).map(() => JSON.parse(JSON.stringify(defaultMeals)))
  );

  // Water intake per day
  const [waterLitersPerDay, setWaterLitersPerDay] = useState(2.5);
  const waterLitersPerWeek = (waterLitersPerDay * 7).toFixed(1);

  // Plan-level instruction & caution
  const [nutritionPlanInstruction, setNutritionPlanInstruction] = useState("");
  const [nutritionPlanCaution, setNutritionPlanCaution] = useState("");

  // UI state
  const [showFoodSearch, setShowFoodSearch] = useState(null); // meal index or null
  const [showConfirm, setShowConfirm] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showCopyDay, setShowCopyDay] = useState(false);

  // Steps config
  const steps = [
    { key: "trainees", label: "Trainees", num: 1 },
    { key: "template", label: "Template", num: 2 },
    { key: "builder", label: "Meals", num: 3 },
    { key: "schedule", label: "Schedule", num: 4 },
    { key: "review", label: "Review", num: 5 },
  ];
  const currentStepIdx = steps.findIndex(s => s.key === step);

  // ─── STEP PROGRESS BAR ───
  const StepBar = () => (
    <div style={{ padding: "0 20px", marginBottom: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
        {steps.map((s, i) => (
          <div key={s.key} style={{ flex: 1, display: "flex", alignItems: "center", gap: 2 }}>
            <div onClick={() => { if (i <= currentStepIdx) setStep(s.key); }}
              style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, cursor: i <= currentStepIdx ? "pointer" : "default",
                background: i < currentStepIdx ? colors.success : i === currentStepIdx ? colors.primary : colors.surface,
                color: i <= currentStepIdx ? "#fff" : colors.textMuted, transition: "all 0.2s" }}>
              {i < currentStepIdx ? <Check size={14} /> : s.num}
            </div>
            {i < steps.length - 1 && (
              <div style={{ flex: 1, height: 2, background: i < currentStepIdx ? colors.success : colors.border, borderRadius: 1, transition: "background 0.3s" }} />
            )}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
        {steps.map((s, i) => (
          <span key={s.key} style={{ fontSize: 9, fontWeight: 600, color: i === currentStepIdx ? colors.primary : colors.textMuted, textAlign: "center", width: `${100 / steps.length}%` }}>{s.label}</span>
        ))}
      </div>
    </div>
  );

  // Get current day's meals
  const currentMeals = sameEveryDay ? dayMeals[0] : dayMeals[activeDay];
  const setCurrentMeals = (meals) => {
    const newDayMeals = [...dayMeals];
    if (sameEveryDay) {
      newDayMeals.forEach((_, i) => newDayMeals[i] = JSON.parse(JSON.stringify(meals)));
    } else {
      newDayMeals[activeDay] = meals;
    }
    setDayMeals(newDayMeals);
  };

  // Calculate totals
  const totalCal = currentMeals.reduce((a, m) => a + m.foods.reduce((b, f) => b + f.cal, 0), 0);
  const totalP = currentMeals.reduce((a, m) => a + m.foods.reduce((b, f) => b + f.p, 0), 0);
  const totalC = currentMeals.reduce((a, m) => a + m.foods.reduce((b, f) => b + f.c, 0), 0);
  const totalF = currentMeals.reduce((a, m) => a + m.foods.reduce((b, f) => b + f.f, 0), 0);

  // Calorie deviation
  const calDev = Math.round(((totalCal - targetCal) / targetCal) * 100);
  const calStatus = Math.abs(calDev) <= 5 ? "green" : Math.abs(calDev) <= 10 ? "yellow" : "red";
  const calStatusColor = calStatus === "green" ? colors.success : calStatus === "yellow" ? colors.warning : colors.error;

  // Macro % calc
  const totalMacroCal = (totalP * 4) + (totalC * 4) + (totalF * 9);
  const proteinPct = totalMacroCal > 0 ? Math.round((totalP * 4 / totalMacroCal) * 100) : 0;
  const carbsPct = totalMacroCal > 0 ? Math.round((totalC * 4 / totalMacroCal) * 100) : 0;
  const fatPct = totalMacroCal > 0 ? Math.round((totalF * 9 / totalMacroCal) * 100) : 0;

  // Validation
  const hasEmptyMealName = currentMeals.some(m => !m.name.trim());
  const hasEmptyFoods = currentMeals.some(m => m.foods.length === 0);
  const isOverCal = Math.abs(calDev) > 10;
  const canAssign = !hasEmptyMealName && !hasEmptyFoods && selectedTrainees.length > 0;

  // Toggle meal expand
  const toggleMealExpand = (mealIdx) => {
    const updated = currentMeals.map((m, i) => i === mealIdx ? { ...m, expanded: !m.expanded } : m);
    setCurrentMeals(updated);
  };

  // Remove food
  const removeFood = (mealIdx, foodIdx) => {
    const updated = [...currentMeals];
    updated[mealIdx] = { ...updated[mealIdx], foods: updated[mealIdx].foods.filter((_, i) => i !== foodIdx) };
    setCurrentMeals(updated);
  };

  // Add food to meal
  const addFoodToMeal = (mealIdx, food) => {
    const updated = [...currentMeals];
    updated[mealIdx] = { ...updated[mealIdx], foods: [...updated[mealIdx].foods, food] };
    setCurrentMeals(updated);
    onShowToast(`${food.name} added`);
  };

  // Update food qty
  const updateFoodQty = (mealIdx, foodIdx, newQty) => {
    if (newQty < 0.5) return;
    const updated = [...currentMeals];
    const orig = foodDatabase.find(f => f.name === updated[mealIdx].foods[foodIdx].name) || updated[mealIdx].foods[foodIdx];
    const ratio = newQty;
    updated[mealIdx].foods[foodIdx] = {
      ...updated[mealIdx].foods[foodIdx],
      qty: newQty,
      cal: Math.round(orig.cal * ratio),
      p: Math.round(orig.p * ratio * 10) / 10,
      c: Math.round(orig.c * ratio * 10) / 10,
      f: Math.round(orig.f * ratio * 10) / 10,
    };
    setCurrentMeals(updated);
  };

  // Duplicate meal
  const duplicateMeal = (mealIdx) => {
    const meal = currentMeals[mealIdx];
    const copy = JSON.parse(JSON.stringify(meal));
    copy.name = `${meal.name} (Copy)`;
    copy.expanded = true;
    const updated = [...currentMeals];
    updated.splice(mealIdx + 1, 0, copy);
    setCurrentMeals(updated);
    onShowToastr("Meal duplicated");
  };

  // Remove meal
  const removeMeal = (mealIdx) => {
    if (currentMeals.length <= 1) return;
    const updated = currentMeals.filter((_, i) => i !== mealIdx);
    setCurrentMeals(updated);
    onShowToast("Meal removed", "warning");
  };

  // Add new meal
  const addMeal = () => {
    const updated = [...currentMeals, { name: "", time: "", expanded: true, instruction: "", caution: "", foods: [] }];
    setCurrentMeals(updated);
  };

  // Copy day to all
  const copyDayToAll = () => {
    const src = JSON.parse(JSON.stringify(dayMeals[activeDay]));
    const newDayMeals = Array(7).fill(null).map(() => JSON.parse(JSON.stringify(src)));
    setDayMeals(newDayMeals);
    setShowCopyDay(false);
    onShowToast(`${days[activeDay]} plan copied to all days`);
  };

  // ════════════════════════════════════════════
  // STEP 1: SELECT TRAINEES
  // ════════════════════════════════════════════
  if (step === "trainees") {
    const selectableTrainees = allTraineesData.filter(t => t.status === "active");
    const filteredTrainees = selectableTrainees.filter(t =>
      !traineeSearch || t.name.toLowerCase().includes(traineeSearch.toLowerCase()) || t.email.toLowerCase().includes(traineeSearch.toLowerCase())
    );

    const toggleTrainee = (id) => {
      setSelectedTrainees(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };
    const selectAll = () => {
      if (selectedTrainees.length === selectableTrainees.length) setSelectedTrainees([]);
      else setSelectedTrainees(selectableTrainees.map(t => t.id));
    };
    const hasTrainees = selectedTrainees.length > 0;

    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 12 }}>
          <button onClick={onBack} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronLeft size={20} color={colors.textPrimary} /></button>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>Nutrition Builder</h2>
            <span style={{ fontSize: 12, color: colors.textSecondary }}>Step 1: Select trainees</span>
          </div>
        </div>
        <StepBar />

        {/* Search */}
        <div style={{ padding: "0 20px", marginBottom: 12, position: "relative" }}>
          <Search size={16} color={colors.textMuted} style={{ position: "absolute", left: 32, top: 13 }} />
          <input value={traineeSearch} onChange={e => setTraineeSearch(e.target.value)} placeholder="Search trainees..."
            style={{ width: "100%", height: 42, borderRadius: 12, border: `1.5px solid ${colors.border}`, paddingLeft: 38, paddingRight: 14, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
        </div>

        {/* Select All */}
        <div style={{ padding: "0 20px", marginBottom: 10 }}>
          <button onClick={selectAll}
            style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, color: colors.primary, padding: 0 }}>
            <div style={{ width: 20, height: 20, borderRadius: 6, border: selectedTrainees.length === selectableTrainees.length ? "none" : `2px solid ${colors.border}`, background: selectedTrainees.length === selectableTrainees.length ? colors.primary : "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {selectedTrainees.length === selectableTrainees.length && <Check size={12} color="#fff" strokeWidth={3} />}
            </div>
            Select all active trainees ({selectableTrainees.length})
          </button>
        </div>

        {/* Trainee list */}
        <div style={{ padding: "0 20px" }}>
          {filteredTrainees.map(t => {
            const isSelected = selectedTrainees.includes(t.id);
            const adherenceCol = t.adherence >= 80 ? colors.success : t.adherence >= 60 ? colors.warning : colors.error;
            return (
              <div key={t.id} onClick={() => toggleTrainee(t.id)}
                style={{ background: isSelected ? colors.primaryLight : colors.card, borderRadius: 14, padding: "12px 14px", marginBottom: 8,
                  border: `1.5px solid ${isSelected ? colors.primary : colors.border}`, display: "flex", alignItems: "center", gap: 12, cursor: "pointer", transition: "all 0.15s" }}>
                <div style={{ width: 22, height: 22, borderRadius: 7, border: isSelected ? "none" : `2px solid ${colors.border}`,
                  background: isSelected ? colors.primary : "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {isSelected && <Check size={14} color="#fff" strokeWidth={3} />}
                </div>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: isSelected ? "rgba(52,211,153,0.15)" : colors.surface, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: isSelected ? colors.primary : colors.textMuted }}>{t.avatar}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>{t.name}</span>
                    {t.alerts && t.alerts.length > 0 && (
                      <span style={{ fontSize: 9, fontWeight: 700, padding: "1px 6px", borderRadius: 4, background: colors.errorLight, color: colors.error }}>!</span>
                    )}
                  </div>
                  <div style={{ fontSize: 11, color: colors.textSecondary, marginTop: 1 }}>
                    {t.goal} · {t.level}
                    {t.note && <span style={{ color: colors.warning }}> · ⚠ {t.note.split("—")[0].trim()}</span>}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: adherenceCol }}>{t.adherence}%</div>
                  <div style={{ fontSize: 9, color: colors.textMuted }}>adherence</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ padding: "16px 20px 8px", position: "sticky", bottom: 0, background: colors.background }}>
          <button onClick={() => hasTrainees && setStep("template")} disabled={!hasTrainees}
            style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: "none",
              background: hasTrainees ? colors.primary : colors.surface, color: hasTrainees ? "#fff" : colors.textMuted,
              fontSize: 15, fontWeight: 700, cursor: hasTrainees ? "pointer" : "not-allowed",
              boxShadow: hasTrainees ? "0 4px 14px rgba(52,211,153,0.25)" : "none" }}>
            Continue with {selectedTrainees.length} trainee{selectedTrainees.length !== 1 ? "s" : ""} →
          </button>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════
  // STEP 2: CHOOSE STARTING POINT (TEMPLATE)
  // ════════════════════════════════════════════
  if (step === "template") {
    const nutritionTemplates = [
      { id: 1, name: "Lean Cut (2,100 cal)", desc: "High protein, moderate carbs", icon: "salad", color: colors.successLight },
      { id: 2, name: "Muscle Gain (2,800 cal)", desc: "High calorie, high protein", icon: "bicep", color: colors.errorLight },
      { id: 3, name: "Maintenance (2,400 cal)", desc: "Balanced macros", icon: "scale", color: colors.primaryLight },
      { id: 4, name: "Keto (1,800 cal)", desc: "High fat, very low carb", icon: "leaf", color: "#FEF3C7" },
    ];
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 12 }}>
          <button onClick={() => setStep("trainees")} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronLeft size={20} color={colors.textPrimary} /></button>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>Choose Starting Point</h2>
            <span style={{ fontSize: 12, color: colors.textSecondary }}>Step 2: Template or custom</span>
          </div>
        </div>
        <StepBar />

        {/* Custom CTA */}
        <div style={{ padding: "0 20px", marginBottom: 16 }}>
          <button onClick={() => { setPlanName("Custom Plan"); setStep("builder"); }}
            style={{ width: "100%", background: gradients.nutrition, borderRadius: 18, padding: 20, border: "none", cursor: "pointer", textAlign: "left", boxShadow: "0 6px 20px rgba(16,185,129,0.25)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <Plus size={20} color="rgba(255,255,255,0.9)" />
              <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{tr("Start from Scratch")}</span>
            </div>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>Build a completely custom nutrition plan</span>
          </button>
        </div>

        {/* My Drafts */}
        <div style={{ padding: "0 20px", marginBottom: 16 }}>
          <button onClick={() => setStep("nutrition-drafts")}
            style={{ width: "100%", background: colors.card, borderRadius: 16, padding: 16, border: `1.5px dashed ${colors.border}`, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${colors.warning}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FileText size={20} color={colors.warning} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("My Drafts")}</div>
              <div style={{ fontSize: 12, color: colors.textSecondary }}>Continue editing saved plans</div>
            </div>
            <ChevronRight size={16} color={colors.textMuted} style={{ marginLeft: "auto" }} />
          </button>
        </div>

        {/* Templates */}
        <div style={{ padding: "0 20px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: colors.textMuted, marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>Saved Templates</div>
          {nutritionTemplates.map(tpl => (
            <div key={tpl.id} onClick={() => { setPlanName(tpl.name); setSelectedTemplate(tpl.id); setStep("builder"); }}
              style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 10, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: tpl.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{getNutritionIcon(tpl.icon)}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: colors.textPrimary }}>{tpl.name}</div>
                  <div style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2 }}>{tpl.desc}</div>
                </div>
                <ChevronRight size={16} color={colors.textMuted} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════
  // STEP 2C: MY NUTRITION DRAFTS
  // ════════════════════════════════════════════
  if (step === "nutrition-drafts") {
    const draftNutritionPlans = [
      { id: 201, name: "Lean Cut (2,100 cal)", meals: 4, created: "Feb 18", status: "draft" },
      { id: 202, name: "Keto Starter", meals: 3, created: "Feb 15", status: "draft" },
      { id: 203, name: "Bulk Season Plan", meals: 5, created: "Feb 10", status: "draft" },
    ];
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 12 }}>
          <button onClick={() => setStep("template")} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronLeft size={20} color={colors.textPrimary} /></button>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>My Nutrition Drafts</h2>
            <span style={{ fontSize: 12, color: colors.textSecondary }}>Continue editing your saved nutrition plans</span>
          </div>
        </div>

        {draftNutritionPlans.length === 0 ? (
          <div style={{ padding: "40px 20px", textAlign: "center" }}>
            <div style={{ fontSize: 14, color: colors.textSecondary, marginBottom: 10 }}>{tr("No draft nutrition plans yet")}</div>
            <div style={{ fontSize: 12, color: colors.textMuted }}>Start by creating a new nutrition plan</div>
          </div>
        ) : (
          <div style={{ padding: "0 20px" }}>
            {draftNutritionPlans.map(draft => (
              <div key={draft.id} onClick={() => { setPlanName(draft.name); setStep("builder"); }}
                style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 10, cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: colors.textPrimary }}>{draft.name}</div>
                    <div style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2 }}>{draft.meals} meals · Last edited: {draft.created}</div>
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 600, padding: "4px 10px", borderRadius: 6, background: "rgba(245,158,11,0.1)", color: colors.warning }}>{tr("Draft")}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                  <span style={{ fontSize: 11, color: colors.textMuted }}>Tap to continue editing</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: colors.primary }}>Edit Draft →</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ════════════════════════════════════════════
  // STEP 4: SCHEDULE (DATE RANGE)
  // ════════════════════════════════════════════
  if (step === "schedule") {
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 12 }}>
          <button onClick={() => setStep("builder")} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronLeft size={20} color={colors.textPrimary} /></button>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>Schedule</h2>
            <span style={{ fontSize: 12, color: colors.textSecondary }}>Step 4: When to assign</span>
          </div>
        </div>
        <StepBar />

        <div style={{ padding: "0 20px" }}>
          {/* Dates */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>From Date</div>
            <input type="date" value={fromDate} onChange={e => setFromDate(e.target.value)}
              style={{ width: "100%", height: 48, borderRadius: 12, border: `1.5px solid ${colors.border}`, padding: "0 14px", fontSize: 14, fontWeight: 600, color: colors.textPrimary, outline: "none", boxSizing: "border-box" }} />
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>To Date</div>
            <input type="date" value={toDate} onChange={e => setToDate(e.target.value)}
              style={{ width: "100%", height: 48, borderRadius: 12, border: `1.5px solid ${colors.border}`, padding: "0 14px", fontSize: 14, fontWeight: 600, color: colors.textPrimary, outline: "none", boxSizing: "border-box" }} />
          </div>

          {/* Notifications */}
          <div style={{ background: colors.card, borderRadius: 16, border: `1px solid ${colors.border}`, padding: 16, marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary, marginBottom: 14 }}>{tr("Notifications")}</div>
            {[
              { label: "Remind trainee when plan starts", value: notifyTrainee, toggle: () => setNotifyTrainee(!notifyTrainee) },
              { label: "Alert if meals not logged", value: alertIfMissed, toggle: () => setAlertIfMissed(!alertIfMissed) },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderTop: i > 0 ? `1px solid ${colors.border}` : "none" }}>
                <span style={{ fontSize: 13, color: colors.textSecondary }}>{item.label}</span>
                <button onClick={item.toggle}
                  style={{ width: 44, height: 24, borderRadius: 12, border: "none", background: item.value ? colors.success : colors.surface, cursor: "pointer", position: "relative", transition: "background 0.2s" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#fff", position: "absolute", top: 2, left: item.value ? 22 : 2, transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} />
                </button>
              </div>
            ))}
          </div>

          {/* Visual calendar preview */}
          <div style={{ background: colors.card, borderRadius: 16, border: `1px solid ${colors.border}`, padding: 16, marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary, marginBottom: 12 }}>{tr("Preview")}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: colors.primaryLight, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 8, fontWeight: 700, color: colors.primary, textTransform: "uppercase" }}>
                  {new Date(fromDate + "T12:00:00").toLocaleDateString("en", { month: "short" })}
                </span>
                <span style={{ fontSize: 18, fontWeight: 900, color: colors.primary, lineHeight: 1 }}>
                  {new Date(fromDate + "T12:00:00").getDate()}
                </span>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>{planName}</div>
                <div style={{ fontSize: 12, color: colors.textSecondary }}>{fromDate} → {toDate} · {currentMeals.length} meals · {totalCal} cal</div>
                <div style={{ fontSize: 11, color: colors.textMuted, marginTop: 2 }}>
                  ~{Math.round((new Date(toDate) - new Date(fromDate)) / (1000 * 60 * 60 * 24))} days
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: "0 20px 12px" }}>
          <button onClick={() => setStep("review")}
            style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: "none", background: colors.primary, color: "#fff",
              fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 14px rgba(52,211,153,0.25)" }}>
            Review & Confirm →
          </button>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════
  // STEP 5: REVIEW & ASSIGN
  // ════════════════════════════════════════════
  if (step === "review") {
    const selectedTraineeObjs = allTraineesData.filter(t => selectedTrainees.includes(t.id));

    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 12 }}>
          <button onClick={() => setStep("schedule")} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronLeft size={20} color={colors.textPrimary} /></button>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>Review & Confirm</h2>
            <span style={{ fontSize: 12, color: colors.textSecondary }}>Step 5: Final check</span>
          </div>
        </div>
        <StepBar />

        <div style={{ padding: "0 20px" }}>
          {/* Nutrition summary card */}
          <div style={{ background: gradients.nutrition, borderRadius: 20, padding: 20, marginBottom: 16, boxShadow: "0 6px 24px rgba(16,185,129,0.25)" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 4 }}>{planName}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginBottom: 12 }}>
              {currentMeals.length} meals · {totalCal} cal · {proteinG}p/{carbsG}c/{fatG}f
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {currentMeals.map(m => (
                <span key={m.name} style={{ fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 8, background: "rgba(255,255,255,0.2)", color: "#fff" }}>{m.name}</span>
              ))}
            </div>
          </div>

          {/* Trainees */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>Assigned to</div>
              <button onClick={() => setStep("trainees")} style={{ background: "none", border: "none", fontSize: 12, fontWeight: 600, color: colors.primary, cursor: "pointer" }}>{tr("Edit")}</button>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {selectedTraineeObjs.map(t => (
                <div key={t.id} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px 6px 6px", borderRadius: 20, background: colors.surface }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: colors.primaryLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: colors.primary }}>{t.avatar}</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: colors.textPrimary }}>{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>Schedule</div>
              <button onClick={() => setStep("schedule")} style={{ background: "none", border: "none", fontSize: 12, fontWeight: 600, color: colors.primary, cursor: "pointer" }}>{tr("Edit")}</button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Calendar size={18} color={colors.primary} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>
                  {new Date(fromDate + "T12:00:00").toLocaleDateString("en", { month: "short", day: "numeric" })} — {new Date(toDate + "T12:00:00").toLocaleDateString("en", { month: "short", day: "numeric" })}
                </div>
                <div style={{ fontSize: 12, color: colors.textSecondary }}>
                  {Math.round((new Date(toDate) - new Date(fromDate)) / (1000 * 60 * 60 * 24))} days
                </div>
              </div>
            </div>
          </div>

          {/* Meals */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("Meals")}</div>
              <button onClick={() => setStep("builder")} style={{ background: "none", border: "none", fontSize: 12, fontWeight: 600, color: colors.primary, cursor: "pointer" }}>{tr("Edit")}</button>
            </div>
            {currentMeals.map((meal, i) => (
              <div key={meal.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderTop: i > 0 ? `1px solid ${colors.border}` : "none" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", flexShrink: 0, background: colors.primary }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{meal.name}</div>
                  <div style={{ fontSize: 11, color: colors.textSecondary }}>{meal.foods.reduce((a, f) => a + f.cal, 0)} cal</div>
                </div>
              </div>
            ))}
          </div>

          {/* Macros */}
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary, marginBottom: 12 }}>Macro Targets</div>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: macroColors.protein }}>{proteinG}g</div>
                <div style={{ fontSize: 10, color: colors.textMuted, marginTop: 2 }}>{tr("Protein")}</div>
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: macroColors.carbs }}>{carbsG}g</div>
                <div style={{ fontSize: 10, color: colors.textMuted, marginTop: 2 }}>{tr("Carbs")}</div>
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: macroColors.fat }}>{fatG}g</div>
                <div style={{ fontSize: 10, color: colors.textMuted, marginTop: 2 }}>{tr("Fat")}</div>
              </div>
            </div>
          </div>

          {/* Save as template */}
          <button onClick={() => onShowToastr("Saved as template ✓")}
            style={{ width: "100%", padding: "12px 0", borderRadius: 12, border: `1.5px dashed ${colors.border}`, background: "transparent",
              color: colors.primary, fontSize: 13, fontWeight: 600, cursor: "pointer", marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <Bookmark size={14} /> Save as Template
          </button>

          {/* Confirm */}
          <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
            <button onClick={() => onShowToastr("Draft saved ✓")}
              style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 14, fontWeight: 600, color: colors.textPrimary, cursor: "pointer" }}>
              Save Draft
            </button>
            <button onClick={() => { onShowToast(`Nutrition plan assigned to ${selectedTrainees.length} trainee${selectedTrainees.length > 1 ? "s" : ""}! 🎉`); onBack(); }} disabled={!canAssign}
              style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: "none",
                background: canAssign ? colors.primary : colors.surface, color: canAssign ? "#fff" : colors.textMuted,
                fontSize: 14, fontWeight: 700, cursor: canAssign ? "pointer" : "not-allowed",
                boxShadow: canAssign ? "0 4px 14px rgba(52,211,153,0.25)" : "none" }}>
              Assign to {selectedTrainees.length} trainee{selectedTrainees.length !== 1 ? "s" : ""} →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── PREVIEW MODE ───
  if (previewMode) {
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 16 }}>
          <button onClick={() => setPreviewMode(false)} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <ChevronLeft size={20} color={colors.textPrimary} />
          </button>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: colors.textPrimary }}>Preview as Trainee</h2>
            <span style={{ fontSize: 11, color: colors.textSecondary }}>This is what the trainee will see</span>
          </div>
          <div style={{ padding: "4px 10px", borderRadius: 8, background: colors.warningLight, fontSize: 10, fontWeight: 700, color: colors.warning }}>PREVIEW</div>
        </div>

        <div style={{ padding: "0 20px", marginBottom: 16 }}>
          <ProgressBar value={totalCal} max={targetCal} color={calStatusColor} />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 12 }}>
            <span style={{ color: colors.textSecondary }}>{totalCal} / {targetCal} cal</span>
            <span style={{ color: calStatusColor, fontWeight: 600 }}>
              {calStatus === "green" ? "On target" : calStatus === "yellow" ? "Close" : "Off target"}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 20, padding: "0 20px", marginBottom: 20 }}>
          <MacroRing label="Protein" current={Math.round(totalP)} target={proteinG} color={macroColors.protein} />
          <MacroRing label="Carbs" current={Math.round(totalC)} target={carbsG} color={macroColors.carbs} />
          <MacroRing label="Fat" current={Math.round(totalF)} target={fatG} color={macroColors.fat} />
        </div>

        <div style={{ padding: "0 20px" }}>
          {currentMeals.map((meal, mi) => (
            <div key={mi} style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 1 }}>{meal.name}</span>
                  {meal.time && <span style={{ fontSize: 11, color: colors.textMuted, marginLeft: 8 }}>{formatTime(meal.time)}</span>}
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: colors.textPrimary }}>
                  {meal.foods.reduce((a, f) => a + f.cal, 0)} cal
                </span>
              </div>
              {meal.foods.map((food, fi) => (
                <div key={fi} style={{ display: "flex", alignItems: "center", gap: 7, padding: "4px 0" }}>
                  <span style={{ fontSize: 12, color: colors.textMuted }}>•</span>
                  <span style={{ fontSize: 13, color: colors.textSecondary, flex: 1 }}>{food.name}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: colors.primary, background: `${colors.primary}12`, padding: "1px 7px", borderRadius: 6, border: `1px solid ${colors.primary}20`, flexShrink: 0 }}>{Math.round(food.qty * 100)}g</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ padding: "12px 20px" }}>
          <button onClick={() => setPreviewMode(false)}
            style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: `1.5px solid ${colors.border}`, background: "#fff", color: colors.textPrimary, fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <EyeOff size={16} /> Exit Preview
          </button>
        </div>
      </div>
    );
  }

  // ─── MAIN BUILDER ───
  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 20px", marginBottom: 14 }}>
        <button onClick={onBack} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <ChevronLeft size={20} color={colors.textPrimary} />
        </button>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 17, fontWeight: 700, color: colors.textPrimary }}>{tr("Nutrition Plan Builder")}</h2>
        </div>
        <button onClick={() => setPreviewMode(true)} title="Preview as Trainee"
          style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <Eye size={18} color={colors.textSecondary} />
        </button>
        <button onClick={() => setShowTemplates(true)} title="Templates"
          style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <Bookmark size={18} color={colors.textSecondary} />
        </button>
      </div>

      {/* Trainees Context Panel */}
      <div style={{ margin: "0 20px 12px", background: "linear-gradient(135deg, #059669, #10B981)", borderRadius: 14, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Users size={18} color="#fff" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{selectedTrainees.length} Trainee{selectedTrainees.length !== 1 ? "s" : ""} Selected</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)" }}>Assigned to: {selectedTrainees.length > 0 ? selectedTrainees.map(id => `Trainee ${id}`).join(", ") : "None"}</div>
        </div>
        <button onClick={() => setStep("trainees")} style={{ background: "rgba(255,255,255,0.2)", border: "none", borderRadius: 8, padding: "4px 10px", color: "#fff", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>{tr("Change")}</button>
      </div>

      {/* Plan Name */}
      <div style={{ padding: "0 20px", marginBottom: 12 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 4, letterSpacing: 1, textTransform: "uppercase" }}>{tr("Plan Name")}</div>
        <input value={planName} onChange={e => setPlanName(e.target.value)}
          style={{ width: "100%", height: 42, borderRadius: 12, border: `1.5px solid ${colors.border}`, padding: "0 14px", fontSize: 14, fontWeight: 600, color: colors.textPrimary, outline: "none", boxSizing: "border-box" }} />
      </div>

      {/* ── WATER INTAKE PER DAY ── */}
      <div style={{ padding: "0 20px", marginBottom: 12 }}>
        <div style={{ background: colors.card, borderRadius: 14, padding: "12px 16px", border: `1px solid ${colors.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: "#3B82F620", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Droplets size={16} color="#3B82F6" />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("Water Intake")}</div>
              <div style={{ fontSize: 10, color: colors.textMuted }}>{waterLitersPerWeek} L / week</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button onClick={() => setWaterLitersPerDay(Math.max(0.5, waterLitersPerDay - 0.5))}
              style={{ width: 28, height: 28, borderRadius: 8, border: `1px solid ${colors.border}`, background: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: colors.textSecondary }}>−</button>
            <span style={{ fontSize: 16, fontWeight: 800, color: "#3B82F6", minWidth: 36, textAlign: "center" }}>{waterLitersPerDay}</span>
            <button onClick={() => setWaterLitersPerDay(waterLitersPerDay + 0.5)}
              style={{ width: 28, height: 28, borderRadius: 8, border: `1px solid ${colors.border}`, background: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: colors.textSecondary }}>+</button>
            <span style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted }}>L/day</span>
          </div>
        </div>
      </div>

      {/* ── PLAN-LEVEL INSTRUCTION & CAUTION ── */}
      <div style={{ padding: "0 20px", marginBottom: 12 }}>
        <details style={{ background: colors.card, borderRadius: 14, border: `1px solid ${colors.border}`, overflow: "hidden" }}>
          <summary style={{ padding: "12px 14px", fontSize: 13, fontWeight: 700, color: colors.textPrimary, cursor: "pointer", listStyle: "none", display: "flex", alignItems: "center", gap: 6 }}>
            <FileText size={14} color={colors.primary} />
            Plan Instructions & Cautions
            <span style={{ marginLeft: "auto", fontSize: 11, color: colors.textMuted }}>Tap to edit</span>
          </summary>
          <div style={{ padding: "8px 14px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: colors.textSecondary, marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
                <FileText size={11} color={colors.primary} /> Plan Instruction
              </div>
              <textarea value={nutritionPlanInstruction} onChange={e => setNutritionPlanInstruction(e.target.value)}
                placeholder="General nutrition instructions for the trainee..."
                rows={2}
                style={{ width: "100%", borderRadius: 10, border: `1.5px solid ${colors.border}`, padding: "8px 12px", fontSize: 12, color: colors.textPrimary, outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: colors.warning, marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
                <AlertTriangle size={11} color={colors.warning} /> Plan Caution
              </div>
              <textarea value={nutritionPlanCaution} onChange={e => setNutritionPlanCaution(e.target.value)}
                placeholder="Allergens, restrictions, medical notes..."
                rows={2}
                style={{ width: "100%", borderRadius: 10, border: `1.5px solid ${colors.warning}30`, padding: "8px 12px", fontSize: 12, color: colors.textPrimary, outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", background: `${colors.warningLight}` }} />
            </div>
          </div>
        </details>
      </div>

      {/* ── STICKY MACRO SUMMARY BAR ── */}
      <div style={{ margin: "0 20px 12px", background: colors.card, borderRadius: 16, padding: 14, border: `1.5px solid ${calStatusColor}30`, boxShadow: `0 2px 12px ${calStatusColor}15` }}>
        {/* Calorie bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontSize: 20, fontWeight: 900, color: colors.textPrimary, letterSpacing: -0.5 }}>{totalCal}</span>
          <span style={{ fontSize: 13, color: colors.textSecondary }}>/ {targetCal} cal</span>
          <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
            background: calStatus === "green" ? colors.successLight : calStatus === "yellow" ? colors.warningLight : colors.errorLight,
            color: calStatusColor }}>
            {calDev > 0 ? "+" : ""}{calDev}%
          </span>
        </div>
        <ProgressBar value={totalCal} max={targetCal} color={calStatusColor} height={6} />

        {/* Macro rings row */}
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: 14 }}>
          <MacroRing label="Protein" current={Math.round(totalP)} target={proteinG} color={macroColors.protein} size={50} />
          <MacroRing label="Carbs" current={Math.round(totalC)} target={carbsG} color={macroColors.carbs} size={50} />
          <MacroRing label="Fat" current={Math.round(totalF)} target={fatG} color={macroColors.fat} size={50} />
        </div>

        {/* Over-calorie warning */}
        {isOverCal && (
          <div style={{ marginTop: 10, background: calDev > 0 ? colors.errorLight : colors.warningLight, borderRadius: 10, padding: "8px 12px", display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: calDev > 0 ? colors.error : colors.warning, fontWeight: 600 }}>
            <AlertTriangle size={14} />
            {calDev > 0 ? `Totals are ${calDev}% over target. Adjust meals or increase target.` : `Totals are ${Math.abs(calDev)}% under target. Consider adding foods.`}
          </div>
        )}
      </div>

      {/* ── MACRO TARGET SLIDERS ── */}
      <div style={{ padding: "0 20px", marginBottom: 12 }}>
        <details style={{ background: colors.card, borderRadius: 14, border: `1px solid ${colors.border}`, overflow: "hidden" }}>
          <summary style={{ padding: "12px 14px", fontSize: 13, fontWeight: 700, color: colors.textPrimary, cursor: "pointer", listStyle: "none", display: "flex", alignItems: "center", gap: 6 }}>
            <Target size={14} color={colors.primary} />
            Macro Targets
            <span style={{ marginLeft: "auto", fontSize: 11, color: colors.textMuted }}>Tap to adjust</span>
          </summary>
          <div style={{ padding: "8px 14px 14px" }}>
            <div style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: colors.textPrimary }}>{tr("Daily Calorie Target")}</span>
              </div>
              <input type="number" value={targetCal} onChange={e => setTargetCal(Number(e.target.value) || 0)}
                style={{ width: "100%", height: 40, borderRadius: 10, border: `1.5px solid ${colors.border}`, textAlign: "center", fontSize: 16, fontWeight: 700, color: colors.textPrimary, outline: "none", boxSizing: "border-box" }} />
            </div>
            <MacroSlider label="Protein" value={proteinG} pct={proteinPct} color={macroColors.protein} onChange={setProteinG} />
            <MacroSlider label="Carbs" value={carbsG} pct={carbsPct} color={macroColors.carbs} onChange={setCarbsG} />
            <MacroSlider label="Fat" value={fatG} pct={fatPct} color={macroColors.fat} onChange={setFatG} />
          </div>
        </details>
      </div>

      {/* ── DAY TABS ── */}
      <div style={{ padding: "0 20px", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: colors.textSecondary }}>Same plan every day</span>
            <button onClick={() => setSameEveryDay(!sameEveryDay)}
              style={{ width: 40, height: 22, borderRadius: 11, border: "none", background: sameEveryDay ? colors.success : colors.surface, cursor: "pointer", position: "relative", transition: "background 0.2s" }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#fff", position: "absolute", top: 2, left: sameEveryDay ? 20 : 2, transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} />
            </button>
          </div>
          {!sameEveryDay && (
            <button onClick={() => setShowCopyDay(true)} style={{ background: colors.primaryLight, border: "none", borderRadius: 8, padding: "4px 10px", fontSize: 11, fontWeight: 600, color: colors.primary, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
              <Copy size={12} /> Copy to all
            </button>
          )}
        </div>

        {!sameEveryDay && (
          <div style={{ display: "flex", gap: 4 }}>
            {days.map((day, i) => (
              <button key={i} onClick={() => setActiveDay(i)}
                style={{ flex: 1, padding: "8px 0", borderRadius: 10, border: "none",
                  background: activeDay === i ? colors.primary : colors.surface,
                  color: activeDay === i ? "#fff" : colors.textMuted,
                  fontSize: 11, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}>
                {day}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── MEAL CARDS ── */}
      <div style={{ padding: "0 20px" }}>
        {currentMeals.map((meal, mi) => {
          const mealCal = meal.foods.reduce((a, f) => a + f.cal, 0);
          const mealP = meal.foods.reduce((a, f) => a + f.p, 0);
          const mealC = meal.foods.reduce((a, f) => a + f.c, 0);
          const mealF = meal.foods.reduce((a, f) => a + f.f, 0);

          return (
            <div key={mi} style={{ background: colors.card, borderRadius: 16, border: `1.5px solid ${meal.expanded ? colors.primary + "30" : colors.border}`, marginBottom: 10, overflow: "hidden", transition: "border-color 0.2s" }}>
              {/* Meal Header */}
              <div onClick={() => toggleMealExpand(mi)}
                style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: meal.expanded ? colors.primaryLight : colors.surface, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Apple size={16} color={meal.expanded ? colors.primary : colors.textMuted} />
                </div>
                <div style={{ flex: 1 }}>
                  <input value={meal.name}
                    onChange={e => { e.stopPropagation(); const u = [...currentMeals]; u[mi].name = e.target.value; setCurrentMeals(u); }}
                    onClick={e => e.stopPropagation()}
                    placeholder="Meal name *"
                    style={{ border: "none", fontSize: 14, fontWeight: 700, color: !meal.name.trim() ? colors.error : colors.textPrimary, outline: "none", background: "transparent", width: "100%" }} />
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}
                    onClick={e => e.stopPropagation()}>
                    <Clock size={11} color={meal.time ? colors.primary : colors.textMuted} />
                    <input
                      type="time"
                      value={meal.time || ""}
                      onChange={e => { const u = [...currentMeals]; u[mi].time = e.target.value; setCurrentMeals(u); }}
                      style={{ border: "none", background: "transparent", fontSize: 11, fontWeight: 600,
                        color: meal.time ? colors.primary : colors.textMuted, outline: "none", padding: 0,
                        width: meal.time ? 70 : 80, cursor: "pointer" }}
                    />
                    {!meal.time && <span style={{ fontSize: 10, color: colors.textMuted, fontStyle: "italic" }}>Set time</span>}
                  </div>
                  {!meal.name.trim() && <div style={{ fontSize: 10, color: colors.error, marginTop: 2 }}>Meal name is required</div>}
                </div>
                <div style={{ textAlign: "right", marginRight: 4 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{mealCal}</div>
                  <div style={{ fontSize: 10, color: colors.textMuted }}>cal</div>
                </div>
                {meal.expanded ? <ChevronUp size={16} color={colors.textMuted} /> : <ChevronDown size={16} color={colors.textMuted} />}
              </div>

              {/* Meal macro bar (always visible) */}
              <div style={{ padding: "0 14px 8px", display: "flex", gap: 8, fontSize: 10, color: colors.textMuted }}>
                <span style={{ display: "flex", alignItems: "center", gap: 3 }}><span style={{ width: 6, height: 6, borderRadius: 2, background: macroColors.protein, display: "inline-block" }} />P: {Math.round(mealP)}g</span>
                <span style={{ display: "flex", alignItems: "center", gap: 3 }}><span style={{ width: 6, height: 6, borderRadius: 2, background: macroColors.carbs, display: "inline-block" }} />C: {Math.round(mealC)}g</span>
                <span style={{ display: "flex", alignItems: "center", gap: 3 }}><span style={{ width: 6, height: 6, borderRadius: 2, background: macroColors.fat, display: "inline-block" }} />F: {Math.round(mealF)}g</span>
              </div>

              {/* Expanded: Food items */}
              {meal.expanded && (
                <div style={{ borderTop: `1px solid ${colors.border}`, padding: "10px 14px" }}>
                  {meal.foods.length === 0 && (
                    <div style={{ padding: "16px 0", textAlign: "center" }}>
                      <div style={{ fontSize: 13, color: colors.textMuted, marginBottom: 8 }}>{tr("No food items yet.")}</div>
                    </div>
                  )}

                  {meal.foods.map((food, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 0", borderBottom: fi < meal.foods.length - 1 ? `1px solid ${colors.border}` : "none" }}>
                      <GripVertical size={14} color={colors.textMuted} style={{ cursor: "grab", flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{food.name}</span>
                          <span style={{ fontSize: 10, fontWeight: 700, color: colors.primary, background: `${colors.primary}12`, padding: "1px 7px", borderRadius: 6, border: `1px solid ${colors.primary}20`, flexShrink: 0 }}>{Math.round(food.qty * 100)}g</span>
                        </div>
                        <div style={{ fontSize: 10, color: colors.textSecondary, marginTop: 1 }}>
                          {food.cal} cal · P: {food.p}g · C: {food.c}g · F: {food.f}g
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                        <input
                          type="number"
                          value={Math.round(food.qty * 100)}
                          onChange={e => { const g = parseInt(e.target.value) || 0; if (g >= 0) updateFoodQty(mi, fi, g / 100); }}
                          style={{ width: 48, padding: "4px 6px", borderRadius: 6, border: `1.5px solid ${colors.border}`, fontSize: 12, fontWeight: 700, textAlign: "center", color: colors.textPrimary, outline: "none" }}
                          min="0"
                        />
                        <span style={{ fontSize: 10, fontWeight: 600, color: colors.textMuted }}>g</span>
                      </div>
                      <button onClick={() => removeFood(mi, fi)}
                        style={{ width: 24, height: 24, borderRadius: 6, background: colors.errorLight, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                        <Trash2 size={12} color={colors.error} />
                      </button>
                    </div>
                  ))}

                  {/* Meal Instruction & Caution */}
                  <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 10, fontWeight: 600, color: colors.textSecondary, marginBottom: 3, display: "flex", alignItems: "center", gap: 3 }}>
                        <FileText size={9} color={colors.primary} /> Instruction
                      </div>
                      <textarea value={meal.instruction || ""} onChange={e => { const u = [...currentMeals]; u[mi] = { ...u[mi], instruction: e.target.value }; setCurrentMeals(u); }}
                        placeholder="Meal prep notes..."
                        rows={2}
                        style={{ width: "100%", borderRadius: 8, border: `1px solid ${colors.border}`, padding: "6px 10px", fontSize: 11, color: colors.textPrimary, outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 10, fontWeight: 600, color: colors.warning, marginBottom: 3, display: "flex", alignItems: "center", gap: 3 }}>
                        <AlertTriangle size={9} color={colors.warning} /> Caution
                      </div>
                      <textarea value={meal.caution || ""} onChange={e => { const u = [...currentMeals]; u[mi] = { ...u[mi], caution: e.target.value }; setCurrentMeals(u); }}
                        placeholder="Allergens, timing..."
                        rows={2}
                        style={{ width: "100%", borderRadius: 8, border: `1px solid ${colors.warning}25`, padding: "6px 10px", fontSize: 11, color: colors.textPrimary, outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", background: `${colors.warningLight}` }} />
                    </div>
                  </div>

                  {/* Add Food + Meal Actions */}
                  <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                    <button onClick={() => setShowFoodSearch(mi)}
                      style={{ flex: 1, padding: "10px 0", borderRadius: 12, border: `1.5px dashed ${colors.primary}40`, background: colors.primaryGhost, color: colors.primary, fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                      <Plus size={14} /> Add Food
                    </button>
                    <button onClick={() => duplicateMeal(mi)} title="Duplicate meal"
                      style={{ width: 40, borderRadius: 12, border: `1px solid ${colors.border}`, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                      <Copy size={14} color={colors.textSecondary} />
                    </button>
                    <button onClick={() => removeMeal(mi)} title="Remove meal"
                      style={{ width: 40, borderRadius: 12, border: `1px solid ${colors.border}`, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                      <Trash2 size={14} color={colors.error} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Add Meal */}
        <button onClick={addMeal}
          style={{ width: "100%", padding: "12px 0", borderRadius: 14, border: `2px dashed ${colors.border}`, background: "transparent", color: colors.primary, fontSize: 14, fontWeight: 600, cursor: "pointer", marginBottom: 12 }}>
          + Add Meal
        </button>

        {/* Validation Status */}
        <div style={{ background: canAssign && !isOverCal ? colors.successLight : isOverCal ? colors.warningLight : colors.errorLight, borderRadius: 12, padding: "10px 14px", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
          {canAssign && !isOverCal ? <Check size={16} color={colors.success} /> : <AlertTriangle size={16} color={isOverCal ? colors.warning : colors.error} />}
          <span style={{ fontSize: 12, fontWeight: 600, color: canAssign && !isOverCal ? colors.success : isOverCal ? colors.warning : colors.error }}>
            {hasEmptyMealName ? "Some meals have no name" : hasEmptyFoods ? "Some meals have no food items" : isOverCal ? `Calories are ${Math.abs(calDev)}% ${calDev > 0 ? "over" : "under"} target` : "All valid · Ready to assign"}
          </span>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
          <button onClick={() => onShowToastr("Draft saved ✓")}
            style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: `1.5px solid ${colors.border}`, background: "#fff", color: colors.textPrimary, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
            Save Draft
          </button>
          <button onClick={() => canAssign && selectedTrainees.length > 0 && setStep("schedule")} disabled={!canAssign || selectedTrainees.length === 0}
            style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: "none",
              background: (canAssign && selectedTrainees.length > 0) ? colors.primary : colors.surface,
              color: (canAssign && selectedTrainees.length > 0) ? "#000" : colors.textMuted,
              fontSize: 14, fontWeight: 600, cursor: (canAssign && selectedTrainees.length > 0) ? "pointer" : "not-allowed",
              boxShadow: (canAssign && selectedTrainees.length > 0) ? "0 4px 14px rgba(52,211,153,0.25)" : "none" }}>
            Next: Schedule →
          </button>
        </div>
      </div>

      {/* ── FOOD SEARCH SHEET ── */}
      {showFoodSearch !== null && (
        <FoodSearchSheet
          onClose={() => setShowFoodSearch(null)}
          onAddFood={(food) => addFoodToMeal(showFoodSearch, food)}
        />
      )}


      {/* ── COPY DAY CONFIRM ── */}
      {showCopyDay && (
        <ConfirmDialog
          title={`Copy ${days[activeDay]} to all days?`}
          message={`This will replace the meal plan for all other days with ${days[activeDay]}'s plan. This cannot be undone.`}
          onConfirm={copyDayToAll}
          onCancel={() => setShowCopyDay(false)}
        />
      )}

      {/* ── TEMPLATES SHEET ── */}
      {showTemplates && (
        <BottomSheet title="Plan Templates" onClose={() => setShowTemplates(false)}>
          {[
            { name: "Lean Cut (2,100 cal)", desc: "High protein, moderate carbs. 4 meals.", icon: "salad" },
            { name: "Muscle Gain (2,800 cal)", desc: "High calorie, high protein. 5 meals.", icon: "bicep" },
            { name: "Maintenance (2,400 cal)", desc: "Balanced macros. 3 meals + 2 snacks.", icon: "scale" },
            { name: "Keto (1,800 cal)", desc: "High fat, very low carb. 3 meals.", icon: "leaf" },
          ].map((tpl, i) => (
            <div key={i} onClick={() => { setShowTemplates(false); onShowToast(`Template "${tpl.name}" loaded`); }}
              style={{ padding: "14px 0", borderBottom: i < 3 ? `1px solid ${colors.border}` : "none", display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: colors.surface, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                {getNutritionIcon(tpl.icon)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>{tpl.name}</div>
                <div style={{ fontSize: 12, color: colors.textSecondary, marginTop: 2 }}>{tpl.desc}</div>
              </div>
              <ChevronRight size={16} color={colors.textMuted} />
            </div>
          ))}
          <button onClick={() => onShowToastr("Saved as template")}
            style={{ width: "100%", padding: "12px 0", borderRadius: 12, border: `2px dashed ${colors.border}`, background: "transparent", color: colors.primary, fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 14 }}>
            + Save Current Plan as Template
          </button>
        </BottomSheet>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// TRAINEE SCREENS
// ═══════════════════════════════════════════════════════

function TraineeToday({ onNavigate, onShowToast, onShowCoachProfile }) {
  const [mealsDone, setMealsDone] = useState({ breakfast: true, lunch: false, dinner: false, snack: false });
  const [notifExpanded, setNotifExpanded] = useState(false);
  const [showBadgeTooltip, setShowBadgeTooltip] = useState(null);
  const [showPhotoUpload, setShowPhotoUpload] = useState(false);
  const [reminderSnoozed, setReminderSnoozed] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAddReminder, setShowAddReminder] = useState(false);
  const [customReminders, setCustomReminders] = useState([]);
  const [newReminder, setNewReminder] = useState({ name: "", date: "", hour: "", icon: "" });

  const hour = new Date().getHours();
  const greeting = hour < 12 ? tr("Good morning") : hour < 17 ? tr("Good afternoon") : tr("Good evening");
  const today = _lang === "Arabic"
    ? new Date().toLocaleDateString("ar-EG", { weekday: "long", month: "long", day: "numeric" })
    : new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });

  const mealCalories = { breakfast: 480, lunch: 620, dinner: 700, snack: 200 };
  const eatenCal = Object.keys(mealsDone).filter(k => mealsDone[k]).reduce((a, k) => a + mealCalories[k], 0);
  const targetCal = 2100;
  const macros = { protein: { eaten: 30, target: 150 }, carbs: { eaten: 60, target: 230 }, fat: { eaten: 8, target: 70 } };
  const macroColors = { protein: "#8B5CF6", carbs: "#F59E0B", fat: "#EF4444" };

  const toggleMeal = (meal) => {
    setMealsDone(p => ({ ...p, [meal]: !p[meal] }));
    if (!mealsDone[meal]) onShowToast(`${tr(meal.charAt(0).toUpperCase() + meal.slice(1))} ${tr("logged")}`, "success");
  };

  const notifications = [
    { id: 1, type: "coach",   iconType: "message",   color: "#8B5CF6", title: tr("Coach Mike sent a message"),  desc: tr("Great progress this week! Let's adjust your..."), time: "10 min ago", unread: true },
    { id: 2, type: "workout", iconType: "workout",   color: "#34D399", title: tr("Workout reminder"),            desc: tr("Fat Burn — Monday starts in 1 hour"),            time: "1h",         unread: true },
    { id: 3, type: "system",  iconType: "checkin",   color: "#F59E0B", title: tr("Weekly check-in due"),         desc: tr("Log your weight and measurements for this week"), time: "Today",     unread: false },
    { id: 4, type: "coach",   iconType: "trophy",    color: "#F97316", title: tr("New achievement unlocked!"),   desc: tr("You've earned the 'Consistency King' badge"),    time: "Yesterday",  unread: false },
  ];

  const badges = [
    { id: 1, icon: "fire",    iconColor: "#F97316", name: tr("Streak Master"),   desc: tr("7-day workout streak"),        earned: true,  date: tr("Feb 10"), tier: "gold"   },
    { id: 2, icon: "bicep",   iconColor: "#34D399", name: tr("Iron Will"),        desc: tr("Complete 20 workouts"),        earned: true,  date: tr("Feb 8"),  tier: "gold"   },
    { id: 3, icon: "salad",   iconColor: "#10B981", name: tr("Clean Eater"),      desc: tr("Log meals for 14 days"),       earned: true,  date: tr("Feb 5"),  tier: "silver" },
    { id: 4, icon: "camera",  iconColor: "#3B82F6", name: tr("Progress Tracker"), desc: tr("Upload 5 progress photos"),    earned: false, progress: 3, total: 5 },
    { id: 5, icon: "target",  iconColor: "#F59E0B", name: tr("Goal Crusher"),     desc: tr("Reach target weight"),         earned: false, progress: 74.5, total: 72 },
    { id: 6, icon: "zap",     iconColor: "#34D399", name: tr("Perfect Week"),     desc: tr("100% adherence for 1 week"),   earned: false, progress: 80, total: 100 },
  ];

  const weeklyGoals = [
    { label: tr("Workouts"), done: 4, total: 5, color: colors.primary },
    { label: tr("Meals Logged"), done: 18, total: 21, color: colors.success },
    { label: tr("Water (L)"), done: 12, total: 14, color: "#3B82F6" },
  ];

  const weightData = [76.2, 75.8, 75.5, 75.2, 75.0, 74.8, 74.5];
  const weightLabels = [tr("W1"), tr("W2"), tr("W3"), tr("W4"), tr("W5"), tr("W6"), tr("Now")];

  const reminders = [
    { id: "r1", text: tr("Leg Day at 4:00 PM"), type: "session", time: "4:00 PM" },
    { id: "r2", text: tr("Take creatine with lunch"), type: "supplement", time: "12:30 PM" },
    { id: "r3", text: tr("Rest day tomorrow — active recovery"), type: "rest", time: "Tomorrow" },
  ];

  const unlockBadge = (badge) => {
    setShowConfetti(true);
    onShowToast(`${tr("Badge unlocked")}: ${badge.name}!`, "success");
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div style={{ paddingBottom: 20 }}>
      {/* ── Confetti Animation ── */}
      {showConfetti && (
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 999, overflow: "hidden" }}>
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} style={{
              position: "absolute", top: -10, left: `${Math.random() * 100}%`,
              width: 8, height: 8, borderRadius: Math.random() > 0.5 ? "50%" : 2,
              background: ["#34D399", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#F97316"][i % 6],
              animation: `confettiFall ${1.5 + Math.random() * 2}s ease-in forwards`,
              animationDelay: `${Math.random() * 0.5}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }} />
          ))}
        </div>
      )}

      {/* ═══ SECTION 1: TODAY'S SUMMARY ═══ */}

      {/* Greeting & Date + Coach Profile Circle */}
      <div style={{ padding: "0 20px", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: colors.textPrimary, lineHeight: 1.2, letterSpacing: -0.5 }}>{greeting}, Sarah!</h1>
          <p style={{ fontSize: 14, color: colors.textSecondary, marginTop: 2 }}>{today}</p>
        </div>
        <button onClick={() => onShowCoachProfile && onShowCoachProfile()}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg, ${colors.primary}, #8B5CF6)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 3px 12px rgba(52,211,153,0.3)", border: "2px solid #fff" }}>
            <User size={20} color="#fff" />
          </div>
          <span style={{ fontSize: 9, fontWeight: 700, color: colors.primary }}>{tr("My Coach")}</span>
        </button>
      </div>

      {/* Streak Banner */}
      <div style={{ margin: "0 20px 16px", background: gradients.streak, padding: "12px 16px", borderRadius: 14, display: "flex", alignItems: "center", gap: 10, boxShadow: "0 4px 16px rgba(249,115,22,0.25)" }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Flame size={20} color="#fff" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>{tr("6-day streak!")}</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)" }}>{tr("1 more day to earn the Streak Master badge")}</div>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: "50%", border: "3px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 12, fontWeight: 800, color: "#fff" }}>6</span>
        </div>
      </div>

      {/* Coach Goals (read-only) */}
      <div style={{ margin: "0 20px 12px", background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: `${colors.primary}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Target size={16} color={colors.primary} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("Coach Goals")}</div>
            <div style={{ fontSize: 10, color: colors.textMuted }}>{tr("Set by Coach Mike")}</div>
          </div>
          <div style={{ padding: "3px 8px", borderRadius: 6, background: colors.primaryLight }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: colors.primary }}>{tr("Weight Loss")}</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {[
            { text: tr("Lose 3 kg by end of March"), done: false },
            { text: tr("Hit 150g protein daily"), done: true },
            { text: tr("Complete 5 workouts per week"), done: false },
            { text: tr("Drink 2.5L water daily"), done: true },
          ].map((g, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 8, background: g.done ? `${colors.success}06` : colors.surface }}>
              <div style={{ width: 18, height: 18, borderRadius: 5, border: g.done ? "none" : `1.5px solid ${colors.border}`, background: g.done ? colors.success : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {g.done && <Check size={10} color="#fff" strokeWidth={3} />}
              </div>
              <span style={{ fontSize: 12, fontWeight: 500, color: g.done ? colors.success : colors.textPrimary, textDecoration: g.done ? "line-through" : "none" }}>{g.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Workout of the Day Card */}
      <div onClick={() => onNavigate("workout")} style={{ margin: "0 20px 12px", background: gradients.workout, borderRadius: 20, padding: 20, cursor: "pointer", boxShadow: "0 8px 24px rgba(52,211,153,0.25)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: -30, left: 20, width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Dumbbell size={18} color="rgba(255,255,255,0.9)" />
            <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: 1 }}>{tr("Today's Workout")}</span>
          </div>
          <div style={{ background: "rgba(255,255,255,0.15)", padding: "3px 10px", borderRadius: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>{tr("Medium")}</span>
          </div>
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 4 }}>{tr("Fat Burn — Monday")}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", display: "flex", alignItems: "center", gap: 4 }}>
            <Layers size={12} /> {tr("6 exercises")}
          </span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", display: "flex", alignItems: "center", gap: 4 }}>
            <Clock size={12} /> {tr("~45 min")}
          </span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", display: "flex", alignItems: "center", gap: 4 }}>
            <Flame size={12} /> {tr("~320 cal")}
          </span>
        </div>
        <div style={{ marginBottom: 8 }}>
          <ProgressBar value={4} max={6} color="rgba(255,255,255,0.9)" height={6} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}>{tr("4 of 6 exercises done")}</span>
          <div style={{ background: "rgba(255,255,255,0.2)", padding: "6px 16px", borderRadius: 10, display: "flex", alignItems: "center", gap: 6 }}>
            <Play size={12} color="#fff" fill="#fff" />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>{tr("Resume")}</span>
          </div>
        </div>
      </div>

      {/* Meal Plan Overview */}
      <div style={{ margin: "0 20px 12px", background: colors.card, borderRadius: 18, padding: 18, border: `1px solid ${colors.border}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Apple size={18} color={colors.success} />
            <span style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("Today's Nutrition")}</span>
          </div>
          <button onClick={() => onNavigate("nutrition")} style={{ fontSize: 12, fontWeight: 600, color: colors.primary, background: "none", border: "none", cursor: "pointer" }}>{tr("View All →")}</button>
        </div>

        {/* Calorie Ring + Macros */}
        <div style={{ display: "flex", gap: 16, marginBottom: 14 }}>
          <div style={{ position: "relative", width: 80, height: 80, flexShrink: 0 }}>
            <svg viewBox="0 0 80 80" style={{ width: 80, height: 80, transform: "rotate(-90deg)" }}>
              <circle cx="40" cy="40" r="34" fill="none" stroke={colors.surface} strokeWidth="8" />
              <circle cx="40" cy="40" r="34" fill="none" stroke={colors.success} strokeWidth="8"
                strokeDasharray={`${(eatenCal / targetCal) * 213.6} 213.6`} strokeLinecap="round" />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: colors.textPrimary }}>{eatenCal}</div>
              <div style={{ fontSize: 9, color: colors.textMuted }}>/ {targetCal}</div>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 6 }}>
            {Object.entries(macros).map(([key, val]) => (
              <div key={key} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: macroColors[key], flexShrink: 0 }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: colors.textSecondary, width: 48 }}>{tr(key)}</span>
                <div style={{ flex: 1, background: colors.surface, borderRadius: 3, height: 4, overflow: "hidden" }}>
                  <div style={{ width: `${Math.min((val.eaten / val.target) * 100, 100)}%`, height: "100%", background: macroColors[key], borderRadius: 3 }} />
                </div>
                <span style={{ fontSize: 10, fontWeight: 600, color: colors.textMuted, width: 52, textAlign: "right" }}>{val.eaten}/{val.target}g</span>
              </div>
            ))}
          </div>
        </div>

        {/* Meal Checklist */}
        <div style={{ display: "flex", gap: 6 }}>
          {[
            { key: "breakfast", label: tr("Bkfast"), cal: 480 },
            { key: "lunch", label: tr("Lunch"), cal: 620 },
            { key: "dinner", label: tr("Dinner"), cal: 700 },
            { key: "snack", label: tr("Snack"), cal: 200 },
          ].map(meal => (
            <button key={meal.key} onClick={() => toggleMeal(meal.key)} style={{
              flex: 1, padding: "8px 4px", borderRadius: 10,
              border: `1.5px solid ${mealsDone[meal.key] ? colors.success + "50" : colors.border}`,
              background: mealsDone[meal.key] ? colors.successLight : colors.card,
              cursor: "pointer", textAlign: "center", transition: "all 0.2s"
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: mealsDone[meal.key] ? colors.success : colors.textPrimary }}>{meal.label}</div>
              <div style={{ fontSize: 9, color: colors.textMuted }}>{meal.cal} cal</div>
              {mealsDone[meal.key] && <CheckCircle2 size={12} color={colors.success} style={{ marginTop: 2 }} />}
            </button>
          ))}
        </div>
      </div>

      {/* Scheduled Sessions / Reminders */}
      <div style={{ margin: "0 20px 20px", background: colors.card, borderRadius: 14, padding: 14, border: `1px solid ${colors.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <Calendar size={16} color={colors.warning} />
          <span style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("Reminders")}</span>
          <div style={{ flex: 1 }} />
          <button onClick={() => setShowAddReminder(true)} style={{ width: 26, height: 26, borderRadius: 8, border: `1.5px solid ${colors.primary}30`, background: `${colors.primary}08`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <Plus size={14} color={colors.primary} />
          </button>
        </div>
        {[...reminders, ...customReminders].map(r => (
          <div key={r.id} style={{
            display: "flex", alignItems: "center", gap: 10, padding: "8px 0",
            borderTop: `1px solid ${colors.surface}`, opacity: reminderSnoozed[r.id] ? 0.4 : 1
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 7,
              background: r.type === "session" ? `${colors.primary}10` : r.type === "supplement" ? `${colors.success}10` : r.type === "custom" ? `${colors.warning}10` : `${colors.warning}10`,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
            }}>
              {r.icon ? <span style={{ fontSize: 13 }}>{r.icon}</span> : r.type === "session" ? <Dumbbell size={13} color={colors.primary} /> : r.type === "supplement" ? <Apple size={13} color={colors.success} /> : <Clock size={13} color={colors.warning} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{r.text}</div>
              <div style={{ fontSize: 11, color: colors.textMuted }}>{tr(r.time)}</div>
            </div>
            {!reminderSnoozed[r.id] ? (
              <button onClick={(e) => { e.stopPropagation(); setReminderSnoozed(p => ({ ...p, [r.id]: true })); onShowToast(tr("Reminder snoozed"), "success"); }}
                style={{ background: colors.surface, border: "none", borderRadius: 6, padding: "4px 8px", cursor: "pointer", fontSize: 10, fontWeight: 600, color: colors.textMuted }}>
                {tr("Snooze")}
              </button>
            ) : (
              <span style={{ fontSize: 10, fontWeight: 600, color: colors.textMuted }}>{tr("Snoozed")}</span>
            )}
          </div>
        ))}
      </div>

      {/* Add Reminder Popup */}
      {showAddReminder && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 300, padding: 20 }}>
          <div style={{ background: colors.card, borderRadius: 20, padding: 24, width: "100%", maxWidth: 400, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <span style={{ fontSize: 16, fontWeight: 800, color: colors.textPrimary }}>{tr("New Reminder")}</span>
              <button onClick={() => { setShowAddReminder(false); setNewReminder({ name: "", date: "", hour: "", icon: "" }); }} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <X size={20} color={colors.textMuted} />
              </button>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: colors.textSecondary, display: "block", marginBottom: 5 }}>{tr("Name *")}</label>
              <input value={newReminder.name} onChange={e => setNewReminder(p => ({ ...p, name: e.target.value }))} placeholder="e.g. Take vitamins"
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: `1.5px solid ${colors.border}`, fontSize: 14, outline: "none", boxSizing: "border-box", background: colors.background }} />
            </div>
            <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: colors.textSecondary, display: "block", marginBottom: 5 }}>{tr("Date *")}</label>
                <input type="date" value={newReminder.date} onChange={e => setNewReminder(p => ({ ...p, date: e.target.value }))}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: `1.5px solid ${colors.border}`, fontSize: 13, outline: "none", boxSizing: "border-box", background: colors.background }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: colors.textSecondary, display: "block", marginBottom: 5 }}>{tr("Hour *")}</label>
                <input type="time" value={newReminder.hour} onChange={e => setNewReminder(p => ({ ...p, hour: e.target.value }))}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: `1.5px solid ${colors.border}`, fontSize: 13, outline: "none", boxSizing: "border-box", background: colors.background }} />
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: colors.textSecondary, display: "block", marginBottom: 5 }}>{tr("Icon (optional)")}</label>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {[
                  { key: "", label: null },
                  { key: "💊", label: "💊" }, { key: "💧", label: "💧" }, { key: "🏋️", label: "🏋️" },
                  { key: "🥗", label: "🥗" }, { key: "😴", label: "😴" }, { key: "📖", label: "📖" }, { key: "🧘", label: "🧘" }
                ].map(item => (
                  <button key={item.key} onClick={() => setNewReminder(p => ({ ...p, icon: item.key }))}
                    style={{ width: 36, height: 36, borderRadius: 10, border: newReminder.icon === item.key ? `2px solid ${colors.primary}` : `1.5px solid ${colors.border}`, background: newReminder.icon === item.key ? `${colors.primary}10` : colors.background, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                    {item.label || <span style={{ fontSize: 11, color: colors.textMuted }}>{tr("None")}</span>}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => { setShowAddReminder(false); setNewReminder({ name: "", date: "", hour: "", icon: "" }); }}
                style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 14, fontWeight: 600, color: colors.textSecondary, cursor: "pointer" }}>{tr("Cancel")}</button>
              <button onClick={() => {
                if (!newReminder.name || !newReminder.date || !newReminder.hour) { onShowToast(tr("Name, date and hour are required"), "error"); return; }
                const r = { id: `custom_${Date.now()}`, text: newReminder.name, type: "custom", time: `${new Date(newReminder.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} at ${newReminder.hour}`, icon: newReminder.icon };
                setCustomReminders(prev => [...prev, r]);
                setNewReminder({ name: "", date: "", hour: "", icon: "" });
                setShowAddReminder(false);
                onShowToast(tr("Reminder added"), "success");
              }}
                style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: "none", background: colors.primary, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 14px rgba(52,211,153,0.25)" }}>{tr("Add Reminder")}</button>
            </div>
          </div>
        </div>
      )}

      {/* Sections 2-4 (Progress, Quick Actions, Notifications) removed — moved to bell dropdown */}

      {/* ═══ SECTION 5: GAMIFICATION / ACHIEVEMENTS ═══ */}

      <div style={{ margin: "0 20px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, #FBBF24, #F97316)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 3px 10px rgba(251,191,36,0.4)" }}>
            <Trophy size={14} color="#fff" strokeWidth={2.2} />
          </div>
          <span style={{ fontSize: 15, fontWeight: 700, color: colors.textPrimary }}>{tr("Achievements")}</span>
        </div>

        {/* Badges Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 16 }}>
          {badges.map(b => (
            <div key={b.id}
              onClick={() => {
                setShowBadgeTooltip(showBadgeTooltip === b.id ? null : b.id);
                if (!b.earned && b.progress >= b.total) unlockBadge(b);
              }}
              style={{
                background: b.earned
                  ? (b.tier === "gold" ? "linear-gradient(145deg, #FFFBEB, #FEF3C7)" : b.tier === "silver" ? "linear-gradient(145deg, #F8FAFC, #F1F5F9)" : colors.card)
                  : colors.surface,
                borderRadius: 16, padding: "14px 8px", textAlign: "center",
                border: `1.5px solid ${b.earned ? (b.tier === "gold" ? "#FBBF2440" : b.tier === "silver" ? "#94A3B830" : colors.border) : colors.border}`,
                cursor: "pointer",
                position: "relative", transition: "all 0.2s",
                boxShadow: b.earned ? "0 2px 10px rgba(0,0,0,0.06)" : "none",
              }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 6 }}>
                <ModernBadgeIcon type={b.icon} size={38} earned={b.earned} tier={b.tier} />
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, color: b.earned ? colors.textPrimary : colors.textMuted, lineHeight: 1.2 }}>{b.name}</div>
              {!b.earned && b.progress !== undefined && (
                <div style={{ marginTop: 5 }}>
                  <div style={{ background: colors.border, borderRadius: 3, height: 4, overflow: "hidden" }}>
                    <div style={{ width: `${Math.min((typeof b.progress === "number" ? b.progress : 0) / (b.total || 1) * 100, 100)}%`, height: "100%", background: "linear-gradient(90deg, #34D399, #059669)", borderRadius: 3 }} />
                  </div>
                  <div style={{ fontSize: 8, color: colors.textMuted, marginTop: 2 }}>
                    {typeof b.progress === "number" && b.total ? `${b.progress}/${b.total}` : ""}
                  </div>
                </div>
              )}
              {b.earned && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 3, marginTop: 3 }}>
                  {b.tier === "gold" && <Star size={8} color="#F59E0B" fill="#F59E0B" />}
                  <span style={{ fontSize: 8, color: b.tier === "gold" ? "#D97706" : b.tier === "silver" ? "#64748B" : "#F59E0B", fontWeight: 700 }}>{tr(b.date)}</span>
                </div>
              )}

              {/* Tooltip */}
              {showBadgeTooltip === b.id && (
                <div style={{
                  position: "absolute", bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)",
                  background: colors.textPrimary, color: "#fff", padding: "8px 12px", borderRadius: 10,
                  fontSize: 11, fontWeight: 500, whiteSpace: "nowrap", zIndex: 10,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)", animation: "fadeScale 0.2s ease"
                }}>
                  {b.desc}
                  <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: `6px solid ${colors.textPrimary}` }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Weekly Goals Progress */}
        <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}` }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary, marginBottom: 12 }}>{tr("Weekly Goals")}</div>
          {weeklyGoals.map((g, i) => {
            const pct = Math.round((g.done / g.total) * 100);
            return (
              <div key={i} style={{ marginBottom: i < weeklyGoals.length - 1 ? 12 : 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: colors.textSecondary }}>{g.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: pct >= 100 ? colors.success : colors.textPrimary }}>{g.done}/{g.total} ({pct}%)</span>
                </div>
                <div style={{ background: colors.surface, borderRadius: 4, height: 6, overflow: "hidden" }}>
                  <div style={{ width: `${Math.min(pct, 100)}%`, height: "100%", background: pct >= 100 ? colors.success : g.color, borderRadius: 4, transition: "width 0.5s ease" }} />
                </div>
              </div>
            );
          })}
          {/* Monthly Goal */}
          <div style={{ marginTop: 16, padding: "12px 14px", background: `${colors.primary}08`, borderRadius: 12, border: `1px solid ${colors.primary}20` }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Target size={14} color={colors.primary} />
                <span style={{ fontSize: 12, fontWeight: 700, color: colors.primary }}>{tr("Monthly Goal")}</span>
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: colors.textSecondary }}>{tr("Reach 72 kg")}</span>
            </div>
            <div style={{ background: colors.surface, borderRadius: 4, height: 8, overflow: "hidden" }}>
              <div style={{ width: `${((76.2 - 74.5) / (76.2 - 72)) * 100}%`, height: "100%", background: gradients.workout, borderRadius: 4, transition: "width 0.5s ease" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
              <span style={{ fontSize: 10, color: colors.textMuted }}>{tr("Started: 76.2 kg")}</span>
              <span style={{ fontSize: 10, fontWeight: 600, color: colors.primary }}>{tr("74.5 kg → 72 kg")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Progress Photo Upload Bottom Sheet ── */}
      {showPhotoUpload && (
        <BottomSheet title={tr("Upload Progress Photo")} onClose={() => setShowPhotoUpload(false)}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{
              border: `2px dashed ${colors.border}`, borderRadius: 16, padding: "40px 20px",
              textAlign: "center", cursor: "pointer", background: colors.surface
            }}>
              <Upload size={32} color={colors.textMuted} style={{ marginBottom: 8 }} />
              <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>{tr("Tap to upload photo")}</div>
              <div style={{ fontSize: 12, color: colors.textMuted, marginTop: 4 }}>{tr("JPG, PNG up to 10 MB")}</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button style={{ flex: 1, padding: "10px 0", borderRadius: 12, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 13, fontWeight: 600, color: colors.textSecondary, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <Camera size={16} /> {tr("Take Photo")}
              </button>
              <button style={{ flex: 1, padding: "10px 0", borderRadius: 12, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 13, fontWeight: 600, color: colors.textSecondary, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <Image size={16} /> {tr("Gallery")}
              </button>
            </div>
            <button onClick={() => { setShowPhotoUpload(false); onShowToast(tr("Progress photo saved!"), "success"); }}
              style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: "none", background: colors.primary, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 14px rgba(52,211,153,0.25)" }}>
              {tr("Upload & Save")}
            </button>
          </div>
        </BottomSheet>
      )}
    </div>
  );
}

function TraineeWorkout({ onBack, onShowToast }) {
  const [mode, setMode] = useState("overview"); // overview | active | completed
  const [exercises, setExercises] = useState([
    { name: "Barbell Squat", muscle: "Quads", sets: 4, reps: 12, weight: "60 kg", restSec: 60, desc: "Stand with feet shoulder-width apart, barbell across upper back. Lower until thighs are parallel, then drive up through heels.", coachNote: "Focus on depth — full ROM today", formTip: "Keep chest up, don't round lower back", safetyAlert: "", setsDone: 2, skipped: false, done: false },
    { name: "Leg Press", muscle: "Quads/Glutes", sets: 3, reps: 15, weight: "120 kg", restSec: 45, desc: "Place feet shoulder-width on platform. Lower weight until knees reach 90 degrees, then press back up.", coachNote: "", formTip: "Don't lock knees at the top", safetyAlert: "", setsDone: 0, skipped: false, done: false },
    { name: "Walking Lunge", muscle: "Quads/Glutes", sets: 3, reps: 12, weight: "20 kg DBs", restSec: 45, desc: "Step forward into a lunge, lower back knee toward ground. Push off front foot and step into next lunge.", coachNote: "Keep torso upright — don't lean forward", formTip: "Front knee tracks over toes", safetyAlert: "Stop if you feel knee pain", setsDone: 0, skipped: false, done: false },
    { name: "Leg Curl", muscle: "Hamstrings", sets: 3, reps: 12, weight: "40 kg", restSec: 45, desc: "Lie face down on the leg curl machine. Curl weight toward glutes, then lower slowly.", coachNote: "", formTip: "Squeeze at the top, slow eccentric", safetyAlert: "", setsDone: 0, skipped: false, done: false },
    { name: "Calf Raise", muscle: "Calves", sets: 4, reps: 15, weight: "80 kg", restSec: 30, desc: "Stand on platform edge with toes, raise heels as high as possible, then lower below platform level.", coachNote: "Full range of motion — feel the stretch", formTip: "Pause 1s at the top", safetyAlert: "", setsDone: 0, skipped: false, done: false },
    { name: "Plank", muscle: "Core", sets: 3, reps: 1, weight: "60s hold", restSec: 30, desc: "Hold a straight-arm or forearm plank position. Keep body in a straight line from head to heels.", coachNote: "Try to beat last week's 55s hold", formTip: "Engage core — don't sag hips", safetyAlert: "", setsDone: 0, skipped: false, done: false },
  ]);
  const [activeExIndex, setActiveExIndex] = useState(0);
  const [expandedEx, setExpandedEx] = useState(null);
  const [workoutTime, setWorkoutTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [restTimer, setRestTimer] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [personalNote, setPersonalNote] = useState("");
  const [showNoteInput, setShowNoteInput] = useState(null);
  const [noteText, setNoteText] = useState("");
  const [weightOverride, setWeightOverride] = useState({});
  const [repsInput, setRepsInput] = useState({});
  const [showWeightEdit, setShowWeightEdit] = useState(null);
  const [weightEditVal, setWeightEditVal] = useState("");
  const [selectedVideo, setSelectedVideo] = useState({});
  const [showSkipSetReason, setShowSkipSetReason] = useState(null); // { exIndex, setIndex } or null
  const [skipSetReasonText, setSkipSetReasonText] = useState("");
  const [skippedSets, setSkippedSets] = useState({}); // { "exIdx-setIdx": reason }
  const [showSkipExReason, setShowSkipExReason] = useState(null); // exercise index or null
  const [skipExReasonText, setSkipExReasonText] = useState("");
  const timerRef = useRef(null);
  const restRef = useRef(null);

  const videoThumbs = ["Front View", "Side View", "Close-up", "Slow-mo"];
  const getSelectedVideo = (exIdx) => selectedVideo[exIdx] || 0;

  const totalSets = exercises.reduce((a, e) => a + e.sets, 0);
  const completedSets = exercises.reduce((a, e) => a + e.setsDone, 0);
  const doneCount = exercises.filter(e => e.done || e.skipped).length;
  const totalExCount = exercises.length;

  // Workout timer
  useEffect(() => {
    if (mode === "active" && !isPaused) {
      timerRef.current = setInterval(() => setWorkoutTime(t => t + 1), 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [mode, isPaused]);

  // Rest timer
  useEffect(() => {
    if (isResting && restTimer > 0) {
      restRef.current = setInterval(() => {
        setRestTimer(t => {
          if (t <= 1) { clearInterval(restRef.current); setIsResting(false); return 0; }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(restRef.current);
  }, [isResting, restTimer]);

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const completeSet = (exIndex) => {
    const ex = exercises[exIndex];
    if (ex.done || ex.skipped) return;
    const updated = [...exercises];
    updated[exIndex].setsDone = Math.min(ex.setsDone + 1, ex.sets);
    if (updated[exIndex].setsDone >= ex.sets) {
      updated[exIndex].done = true;
      onShowToast(`${ex.name} completed!`, "success");
      // Auto-advance to next incomplete exercise
      const nextIdx = exercises.findIndex((e, i) => i > exIndex && !e.done && !e.skipped);
      if (nextIdx !== -1) setActiveExIndex(nextIdx);
    } else {
      // Start rest timer
      setIsResting(true);
      setRestTimer(ex.restSec);
    }
    setExercises(updated);
  };

  const skipSet = (exIndex, setIndex, reason) => {
    if (!reason || !reason.trim()) return;
    const key = exIndex + "-" + setIndex;
    setSkippedSets(p => ({ ...p, [key]: reason.trim() }));
    // Advance setsDone pointer past this skipped set
    const updated = [...exercises];
    updated[exIndex].setsDone = Math.max(updated[exIndex].setsDone, setIndex + 1);
    if (updated[exIndex].setsDone >= updated[exIndex].sets) {
      updated[exIndex].done = true;
      onShowToast(updated[exIndex].name + " completed!", "success");
      const nextIdx = exercises.findIndex((e, i) => i > exIndex && !e.done && !e.skipped);
      if (nextIdx !== -1) setActiveExIndex(nextIdx);
    }
    setExercises(updated);
    setShowSkipSetReason(null);
    setSkipSetReasonText("");
    onShowToast("Set " + (setIndex + 1) + " skipped", "warning");
  };

  const skipExercise = (exIndex, reason) => {
    if (!reason || !reason.trim()) return;
    const updated = [...exercises];
    updated[exIndex].skipped = true;
    setExercises(updated);
    onShowToast(exercises[exIndex].name + " skipped", "warning");
    const nextIdx = exercises.findIndex((e, i) => i > exIndex && !e.done && !e.skipped);
    if (nextIdx !== -1) setActiveExIndex(nextIdx);
    setShowSkipExReason(null);
    setSkipExReasonText("");
  };

  const undoSkip = (exIndex) => {
    const updated = [...exercises];
    updated[exIndex].skipped = false;
    setExercises(updated);
  };

  const finishWorkout = () => {
    clearInterval(timerRef.current);
    clearInterval(restRef.current);
    setMode("completed");
    setShowConfetti(true);
    onShowToast(tr("Workout complete!"), "success");
    setTimeout(() => setShowConfetti(false), 4000);
  };

  const difficultyColor = { Easy: colors.success, Medium: colors.warning, Hard: colors.error };
  const difficulty = "Medium";
  const estDuration = "~45 min";
  const estCalories = "~320 cal";

  // ── OVERVIEW MODE ──
  if (mode === "overview") {
    return (
      <div>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 16 }}>
          <button onClick={onBack} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <ChevronLeft size={20} color={colors.textPrimary} />
          </button>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: colors.textPrimary, letterSpacing: -0.3 }}>Monday — Fat Burn</h2>
            <span style={{ fontSize: 12, color: colors.textSecondary }}>Lower Body Focus</span>
          </div>
          <div style={{ padding: "4px 10px", borderRadius: 8, background: `${difficultyColor[difficulty]}15`, border: `1px solid ${difficultyColor[difficulty]}30` }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: difficultyColor[difficulty] }}>{difficulty}</span>
          </div>
        </div>

        {/* ── SECTION 1: Workout Overview Card ── */}
        <div style={{ margin: "0 20px 16px", background: gradients.workout, borderRadius: 20, padding: 20, position: "relative", overflow: "hidden", boxShadow: "0 8px 24px rgba(52,211,153,0.25)" }}>
          <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
          <div style={{ display: "flex", gap: 14, marginBottom: 16 }}>
            {[
              { icon: Layers, label: "Exercises", value: `${totalExCount}` },
              { icon: Clock, label: "Duration", value: estDuration },
              { icon: Flame, label: "Calories", value: estCalories },
              { icon: BarChart2, label: "Sets", value: `${totalSets}` },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 4px" }}>
                  <s.icon size={16} color="#fff" />
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#fff" }}>{s.value}</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.7)" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <button onClick={() => { setMode("active"); setActiveExIndex(exercises.findIndex(e => !e.done && !e.skipped) || 0); }}
            style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: "none", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", color: "#fff", fontSize: 16, fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <Play size={18} fill="#fff" color="#fff" /> Start Workout
          </button>
        </div>

        {/* Coach Notes for Today */}
        <div style={{ margin: "0 20px 16px", padding: "12px 16px", background: `${colors.primary}08`, borderRadius: 12, border: `1px solid ${colors.primary}20`, display: "flex", gap: 10, alignItems: "flex-start" }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: `${colors.primary}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
            <MessageSquare size={14} color={colors.primary} />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: colors.primary, marginBottom: 2 }}>Coach Mike's Note</div>
            <div style={{ fontSize: 13, color: colors.textSecondary, lineHeight: 1.4 }}>Focus on form over weight today. Take extra rest if needed between squat sets. Great progress last week!</div>
          </div>
        </div>

        {/* ── SECTION 2: Exercise List ── */}
        <div style={{ padding: "0 20px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 10 }}>Exercise Plan ({totalExCount} exercises)</div>
          {exercises.map((ex, i) => (
            <div key={i} style={{ marginBottom: 10 }}>
              <button onClick={() => setExpandedEx(expandedEx === i ? null : i)}
                style={{ width: "100%", background: colors.card, borderRadius: expandedEx === i ? "16px 16px 0 0" : 16, padding: "14px 16px", border: `1.5px solid ${ex.done ? colors.success + "40" : ex.skipped ? colors.warning + "30" : colors.border}`, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 12, transition: "all 0.2s" }}>
                {/* Exercise Number */}
                <div style={{ width: 30, height: 30, borderRadius: 8, background: ex.done ? colors.success : ex.skipped ? colors.warning : i === activeExIndex ? colors.primary : colors.surface, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s" }}>
                  {ex.done ? <Check size={14} color="#fff" strokeWidth={3} /> : ex.skipped ? <X size={14} color="#fff" /> : <span style={{ fontSize: 13, fontWeight: 700, color: i === activeExIndex ? "#fff" : colors.textMuted }}>{i + 1}</span>}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary, textDecoration: ex.skipped ? "line-through" : "none" }}>{ex.name}</div>
                  <div style={{ fontSize: 11, color: colors.textSecondary, marginTop: 1 }}>
                    {ex.sets} × {ex.reps}{ex.weight.includes("hold") ? "" : ` · ${weightOverride[i] || ex.weight}`} · Rest {ex.restSec}s
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6, background: `${ex.muscle === "Core" ? colors.warning : colors.primary}10`, color: ex.muscle === "Core" ? colors.warning : colors.primary }}>{ex.muscle}</span>
                  {expandedEx === i ? <ChevronUp size={14} color={colors.textMuted} /> : <ChevronDown size={14} color={colors.textMuted} />}
                </div>
              </button>

              {/* Expanded Exercise Detail */}
              {expandedEx === i && (
                <div style={{ background: colors.card, borderRadius: "0 0 16px 16px", padding: "0 16px 16px", border: `1.5px solid ${colors.border}`, borderTop: "none" }}>
                  {/* Demo Video with Thumbnails */}
                  <div style={{ background: colors.surface, borderRadius: 12, height: 100, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8, gap: 8, position: "relative" }}>
                    <Video size={24} color={colors.textMuted} />
                    <span style={{ fontSize: 13, color: colors.textMuted, fontWeight: 600 }}>{videoThumbs[getSelectedVideo(i)]}</span>
                    <div style={{ position: "absolute", top: 6, right: 6, background: "rgba(0,0,0,0.5)", borderRadius: 6, padding: "2px 8px" }}>
                      <span style={{ fontSize: 9, color: "#fff", fontWeight: 600 }}>{getSelectedVideo(i) + 1}/{videoThumbs.length}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                    {videoThumbs.map((vt, vi) => (
                      <button key={vi} onClick={() => setSelectedVideo(p => ({ ...p, [i]: vi }))}
                        style={{ flex: 1, height: 40, borderRadius: 8, border: getSelectedVideo(i) === vi ? `2px solid ${colors.primary}` : `1.5px solid ${colors.border}`, background: colors.surface, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4, transition: "all 0.2s", opacity: getSelectedVideo(i) === vi ? 1 : 0.6 }}>
                        <Video size={10} color={getSelectedVideo(i) === vi ? colors.primary : colors.textMuted} />
                        <span style={{ fontSize: 8, fontWeight: 600, color: getSelectedVideo(i) === vi ? colors.primary : colors.textMuted }}>{vt}</span>
                      </button>
                    ))}
                  </div>
                  {/* Description */}
                  <p style={{ fontSize: 13, color: colors.textSecondary, lineHeight: 1.5, marginBottom: 10 }}>{ex.desc}</p>
                  {/* Weight Override - inline input */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: colors.textSecondary }}>Weight:</span>
                    <input type="text" inputMode="numeric" value={weightOverride[i] || ex.weight}
                      onChange={e => setWeightOverride(p => ({ ...p, [i]: e.target.value }))}
                      style={{ width: 80, padding: "4px 10px", borderRadius: 8, border: `1.5px solid ${colors.border}`, fontSize: 13, fontWeight: 700, textAlign: "center", outline: "none", color: colors.textPrimary, background: colors.background }} />
                  </div>
                  {/* Set Progress */}
                  <div style={{ display: "flex", gap: 4, marginBottom: 10 }}>
                    {Array.from({ length: ex.sets }).map((_, si) => (
                      <div key={si} style={{
                        flex: 1, height: 6, borderRadius: 3,
                        background: si < ex.setsDone ? colors.success : colors.surface,
                        transition: "background 0.3s"
                      }} />
                    ))}
                  </div>
                  <div style={{ fontSize: 11, color: colors.textMuted, marginBottom: 10 }}>{ex.setsDone}/{ex.sets} sets completed</div>
                  {/* Coach Note */}
                  {ex.coachNote && (
                    <div style={{ padding: "8px 12px", background: `${colors.primary}08`, borderRadius: 10, border: `1px solid ${colors.primary}15`, marginBottom: 8, display: "flex", gap: 8 }}>
                      <MessageSquare size={13} color={colors.primary} style={{ flexShrink: 0, marginTop: 1 }} />
                      <span style={{ fontSize: 12, color: colors.primary, fontStyle: "italic" }}>{ex.coachNote}</span>
                    </div>
                  )}
                  {/* Form Tip */}
                  {ex.formTip && (
                    <div style={{ padding: "8px 12px", background: `${colors.warning}08`, borderRadius: 10, border: `1px solid ${colors.warning}15`, marginBottom: 8, display: "flex", gap: 8 }}>
                      <AlertTriangle size={13} color={colors.warning} style={{ flexShrink: 0, marginTop: 1 }} />
                      <span style={{ fontSize: 12, color: colors.warning }}>{ex.formTip}</span>
                    </div>
                  )}
                  {/* Safety Alert */}
                  {ex.safetyAlert && (
                    <div style={{ padding: "8px 12px", background: `${colors.error}08`, borderRadius: 10, border: `1px solid ${colors.error}15`, marginBottom: 8, display: "flex", gap: 8 }}>
                      <Shield size={13} color={colors.error} style={{ flexShrink: 0, marginTop: 1 }} />
                      <span style={{ fontSize: 12, color: colors.error, fontWeight: 600 }}>{ex.safetyAlert}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── ACTIVE WORKOUT MODE ──
  if (mode === "active") {
    const currentEx = exercises[activeExIndex];
    const allDone = exercises.every(e => e.done || e.skipped);

    return (
      <div>
        {/* ── Sticky Timer Header ── */}
        <div style={{ padding: "0 20px 12px", borderBottom: `1px solid ${colors.border}`, marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <button onClick={() => { setIsPaused(true); setMode("overview"); }} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <ChevronLeft size={20} color={colors.textPrimary} />
            </button>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 1 }}>Workout Time</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: colors.textPrimary, fontFamily: "monospace", letterSpacing: 1 }}>{formatTime(workoutTime)}</div>
            </div>
            <button onClick={() => setIsPaused(!isPaused)} style={{ background: isPaused ? colors.primary : colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              {isPaused ? <Play size={16} fill="#fff" color="#fff" /> : <span style={{ width: 12, height: 12, borderLeft: `3px solid ${colors.textPrimary}`, borderRight: `3px solid ${colors.textPrimary}` }} />}
            </button>
          </div>
          {/* Overall Progress Bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ flex: 1, background: colors.surface, borderRadius: 4, height: 6, overflow: "hidden" }}>
              <div style={{ width: `${(completedSets / totalSets) * 100}%`, height: "100%", background: colors.success, borderRadius: 4, transition: "width 0.5s ease" }} />
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted }}>{completedSets}/{totalSets} sets</span>
          </div>
        </div>

        {/* ── Rest Timer Overlay ── */}
        {isResting && (
          <div style={{ margin: "0 20px 16px", background: `${colors.primary}08`, borderRadius: 18, padding: 20, textAlign: "center", border: `1.5px solid ${colors.primary}25`, animation: "fadeScale 0.3s ease" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: colors.primary, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{tr("Rest Period")}</div>
            {/* Circular Timer */}
            <div style={{ position: "relative", width: 100, height: 100, margin: "0 auto 12px" }}>
              <svg viewBox="0 0 100 100" style={{ width: 100, height: 100, transform: "rotate(-90deg)" }}>
                <circle cx="50" cy="50" r="42" fill="none" stroke={colors.surface} strokeWidth="6" />
                <circle cx="50" cy="50" r="42" fill="none" stroke={colors.primary} strokeWidth="6"
                  strokeDasharray={`${(restTimer / exercises[activeExIndex].restSec) * 263.9} 263.9`} strokeLinecap="round" style={{ transition: "stroke-dasharray 1s linear" }} />
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: colors.primary, fontFamily: "monospace" }}>{restTimer}</div>
                <div style={{ fontSize: 10, color: colors.textMuted }}>seconds</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              <button onClick={() => setRestTimer(t => Math.max(t - 15, 0))} style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${colors.border}`, background: "#fff", fontSize: 12, fontWeight: 600, color: colors.textSecondary, cursor: "pointer" }}>-15s</button>
              <button onClick={() => { clearInterval(restRef.current); setIsResting(false); setRestTimer(0); }}
                style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: colors.primary, fontSize: 12, fontWeight: 700, color: "#fff", cursor: "pointer" }}>{tr("Skip Rest")}</button>
              <button onClick={() => setRestTimer(t => t + 15)} style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${colors.border}`, background: "#fff", fontSize: 12, fontWeight: 600, color: colors.textSecondary, cursor: "pointer" }}>+15s</button>
            </div>
          </div>
        )}

        {/* ── Current Exercise Focus ── */}
        {!allDone && currentEx && !currentEx.done && !currentEx.skipped && (
          <div style={{ margin: "0 20px 16px" }}>
            <div style={{ background: colors.card, borderRadius: 20, border: `2px solid ${colors.primary}30`, overflow: "hidden", boxShadow: "0 4px 16px rgba(79,70,229,0.1)" }}>
              {/* Demo Area with Video Gallery */}
              <div style={{ background: colors.surface, height: 120, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, position: "relative" }}>
                <Video size={28} color={colors.textMuted} />
                <span style={{ fontSize: 14, color: colors.textMuted, fontWeight: 600 }}>{videoThumbs[getSelectedVideo(activeExIndex)]}</span>
                <div style={{ position: "absolute", top: 10, right: 10, padding: "3px 10px", borderRadius: 8, background: `${colors.primary}15` }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: colors.primary }}>{currentEx.muscle}</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 4, padding: "8px 18px 0" }}>
                {videoThumbs.map((vt, vi) => (
                  <button key={vi} onClick={() => setSelectedVideo(p => ({ ...p, [activeExIndex]: vi }))}
                    style={{ flex: 1, height: 36, borderRadius: 8, border: getSelectedVideo(activeExIndex) === vi ? `2px solid ${colors.primary}` : `1px solid ${colors.border}`, background: getSelectedVideo(activeExIndex) === vi ? `${colors.primary}08` : colors.surface, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 3, transition: "all 0.2s" }}>
                    <Video size={9} color={getSelectedVideo(activeExIndex) === vi ? colors.primary : colors.textMuted} />
                    <span style={{ fontSize: 8, fontWeight: 600, color: getSelectedVideo(activeExIndex) === vi ? colors.primary : colors.textMuted }}>{vt}</span>
                  </button>
                ))}
              </div>
              <div style={{ padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8 }}>Exercise {activeExIndex + 1} of {totalExCount}</span>
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: colors.textPrimary, marginBottom: 4, letterSpacing: -0.3 }}>{currentEx.name}</div>
                <div style={{ fontSize: 13, color: colors.textSecondary, marginBottom: 12 }}>
                  {currentEx.sets} × {currentEx.reps} {currentEx.weight.includes("hold") ? "" : `at ${weightOverride[activeExIndex] || currentEx.weight}`}
                </div>

                {/* Set Tracker Dots */}
                <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                  {Array.from({ length: currentEx.sets }).map((_, si) => {
                    const setKey = activeExIndex + "-" + si;
                    const isSkipped = !!skippedSets[setKey];
                    const isDone = si < currentEx.setsDone && !isSkipped;
                    const isCurrent = si === currentEx.setsDone;
                    return (
                      <div key={si} style={{
                        flex: 1, height: 32, borderRadius: 10,
                        background: isSkipped ? `${colors.warning}15` : isDone ? colors.success : isCurrent ? `${colors.primary}15` : colors.surface,
                        border: isCurrent ? `2px solid ${colors.primary}` : isSkipped ? `2px solid ${colors.warning}30` : "2px solid transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.3s"
                      }}>
                        {isSkipped ? <X size={12} color={colors.warning} /> : isDone ? <Check size={14} color="#fff" strokeWidth={3} /> : <span style={{ fontSize: 11, fontWeight: 700, color: isCurrent ? colors.primary : colors.textMuted }}>Set {si + 1}</span>}
                      </div>
                    );
                  })}
                </div>

                {/* Coach Note / Form Tip */}
                {currentEx.coachNote && (
                  <div style={{ padding: "8px 12px", background: `${colors.primary}08`, borderRadius: 10, marginBottom: 8, display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <MessageSquare size={12} color={colors.primary} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 12, color: colors.primary }}>{currentEx.coachNote}</span>
                  </div>
                )}
                {currentEx.formTip && (
                  <div style={{ padding: "8px 12px", background: `${colors.warning}08`, borderRadius: 10, marginBottom: 8, display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <AlertTriangle size={12} color={colors.warning} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 12, color: colors.warning }}>{currentEx.formTip}</span>
                  </div>
                )}
                {currentEx.safetyAlert && (
                  <div style={{ padding: "8px 12px", background: `${colors.error}08`, borderRadius: 10, marginBottom: 8, display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <Shield size={12} color={colors.error} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 12, color: colors.error, fontWeight: 600 }}>{currentEx.safetyAlert}</span>
                  </div>
                )}

                {/* ── Weight & Reps Log ── */}
                <div style={{ background: colors.surface, borderRadius: 14, padding: "12px 14px", marginBottom: 10 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 8 }}>
                    Log Set {currentEx.setsDone + 1}
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    {/* Weight field */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 10, fontWeight: 600, color: colors.textSecondary, marginBottom: 4 }}>{tr("Weight")}</div>
                      <div style={{ display: "flex", alignItems: "center", background: colors.card, borderRadius: 10, border: `2px solid ${weightOverride[`${activeExIndex}-${currentEx.setsDone}`] ? colors.primary : colors.border}`, overflow: "hidden", transition: "border 0.2s" }}>
                        <input
                          type="text" inputMode="decimal"
                          value={weightOverride[`${activeExIndex}-${currentEx.setsDone}`] || ""}
                          onChange={e => setWeightOverride(p => ({ ...p, [`${activeExIndex}-${currentEx.setsDone}`]: e.target.value }))}
                          placeholder="—"
                          style={{ flex: 1, border: "none", outline: "none", fontSize: 20, fontWeight: 800, textAlign: "center", background: "transparent", color: colors.textPrimary, padding: "10px 0 10px 10px", width: 0 }}
                        />
                        <span style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, paddingRight: 10 }}>kg</span>
                      </div>
                    </div>
                    {/* Reps field */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 10, fontWeight: 600, color: colors.textSecondary, marginBottom: 4 }}>{tr("Reps")}</div>
                      <div style={{ display: "flex", alignItems: "center", background: colors.card, borderRadius: 10, border: `2px solid ${repsInput[`${activeExIndex}-${currentEx.setsDone}`] ? colors.primary : colors.border}`, overflow: "hidden", transition: "border 0.2s" }}>
                        <input
                          type="text" inputMode="numeric"
                          value={repsInput[`${activeExIndex}-${currentEx.setsDone}`] || ""}
                          onChange={e => setRepsInput(p => ({ ...p, [`${activeExIndex}-${currentEx.setsDone}`]: e.target.value }))}
                          placeholder="—"
                          style={{ flex: 1, border: "none", outline: "none", fontSize: 20, fontWeight: 800, textAlign: "center", background: "transparent", color: colors.textPrimary, padding: "10px 0 10px 10px", width: 0 }}
                        />
                        <span style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, paddingRight: 10 }}>reps</span>
                      </div>
                    </div>
                  </div>
                  {!(weightOverride[`${activeExIndex}-${currentEx.setsDone}`] && repsInput[`${activeExIndex}-${currentEx.setsDone}`]) && (
                    <div style={{ marginTop: 7, fontSize: 10, color: colors.error, fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                      <AlertTriangle size={10} color={colors.error} /> Enter weight & reps before completing this set
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => { setShowSkipSetReason({ exIndex: activeExIndex, setIndex: currentEx.setsDone }); setSkipSetReasonText(""); }}
                    style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: `1.5px solid ${colors.warning}30`, background: `${colors.warning}06`, fontSize: 12, fontWeight: 600, color: colors.warning, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                    Skip Set
                  </button>
                  {(() => {
                    const setKey = `${activeExIndex}-${currentEx.setsDone}`;
                    const w = weightOverride[setKey];
                    const r = repsInput[setKey];
                    const canComplete = (w && w.trim()) && (r && r.trim());
                    return (
                      <button onClick={() => canComplete && completeSet(activeExIndex)}
                        style={{ flex: 2, padding: "12px 0", borderRadius: 12, border: "none", background: canComplete ? colors.primary : colors.border, fontSize: 14, fontWeight: 700, color: canComplete ? "#fff" : colors.textMuted, cursor: canComplete ? "pointer" : "not-allowed", boxShadow: canComplete ? "0 4px 14px rgba(52,211,153,0.25)" : "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, transition: "all 0.2s" }}>
                        <Check size={16} strokeWidth={3} /> Complete Set {currentEx.setsDone + 1}
                      </button>
                    );
                  })()}
                </div>
                <button onClick={() => { setShowSkipExReason(activeExIndex); setSkipExReasonText(""); }}
                  style={{ width: "100%", marginTop: 6, padding: "8px 0", borderRadius: 10, border: `1.5px solid ${colors.border}`, background: "transparent", fontSize: 12, fontWeight: 600, color: colors.textMuted, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                  <ChevronRight size={12} /> Skip Entire Exercise
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Exercise Queue (scrollable) ── */}
        <div style={{ padding: "0 20px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 8 }}>{tr("All Exercises")}</div>
          {exercises.map((ex, i) => (
            <div key={i} onClick={() => { if (!ex.done && !ex.skipped) setActiveExIndex(i); }}
              style={{
                display: "flex", alignItems: "center", gap: 12, padding: "10px 12px",
                background: i === activeExIndex ? `${colors.primary}08` : colors.card,
                borderRadius: 12, marginBottom: 6,
                border: `1.5px solid ${ex.done ? colors.success + "30" : i === activeExIndex ? colors.primary + "40" : "transparent"}`,
                opacity: ex.skipped ? 0.4 : 1, cursor: ex.done || ex.skipped ? "default" : "pointer",
                transition: "all 0.2s"
              }}>
              <div style={{ width: 26, height: 26, borderRadius: 7, background: ex.done ? colors.success : ex.skipped ? colors.warning : i === activeExIndex ? colors.primary : colors.surface, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {ex.done ? <Check size={12} color="#fff" strokeWidth={3} /> : ex.skipped ? <X size={12} color="#fff" /> : <span style={{ fontSize: 11, fontWeight: 700, color: i === activeExIndex ? "#fff" : colors.textMuted }}>{i + 1}</span>}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary, textDecoration: ex.skipped ? "line-through" : "none" }}>{ex.name}</div>
                <div style={{ fontSize: 10, color: colors.textMuted }}>{ex.setsDone}/{ex.sets} sets</div>
              </div>
              {/* Mini set progress */}
              <div style={{ display: "flex", gap: 2 }}>
                {Array.from({ length: ex.sets }).map((_, si) => (
                  <div key={si} style={{ width: 4, height: 4, borderRadius: 2, background: si < ex.setsDone ? colors.success : colors.surface }} />
                ))}
              </div>
              {ex.skipped && <button onClick={(e) => { e.stopPropagation(); undoSkip(i); }} style={{ fontSize: 10, fontWeight: 600, color: colors.primary, background: "none", border: "none", cursor: "pointer" }}>{tr("Undo")}</button>}
            </div>
          ))}

          {/* Personal Note */}
          <div style={{ marginTop: 12, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <FileText size={14} color={colors.textMuted} />
              <span style={{ fontSize: 12, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.5 }}>Workout Notes</span>
            </div>
            <textarea
              value={personalNote} onChange={e => setPersonalNote(e.target.value)}
              placeholder="How are you feeling? Any adjustments?"
              rows={2}
              style={{ width: "100%", padding: "10px 14px", borderRadius: 12, border: `1.5px solid ${colors.border}`, fontSize: 13, fontFamily: "inherit", resize: "none", outline: "none", boxSizing: "border-box", background: colors.card }}
            />
          </div>

          {/* Finish Workout Button */}
          {allDone && (
            <button onClick={() => setShowConfirm(true)} style={{ width: "100%", padding: "16px 0", borderRadius: 16, border: "none", background: colors.success, color: "#fff", fontSize: 16, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 14px rgba(16,185,129,0.3)", marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, animation: "fadeScale 0.3s ease" }}>
              <CheckCircle2 size={20} /> Finish Workout
            </button>
          )}
          {!allDone && doneCount > 0 && (
            <button onClick={() => setShowConfirm(true)} style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: `1.5px solid ${colors.border}`, background: "#fff", color: colors.textSecondary, fontSize: 14, fontWeight: 600, cursor: "pointer", marginBottom: 8 }}>
              End Workout Early ({doneCount}/{totalExCount} done)
            </button>
          )}
        </div>

        {/* Weight Edit Bottom Sheet */}
        {showWeightEdit !== null && (
          <BottomSheet title="Adjust Weight" onClose={() => setShowWeightEdit(null)}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: colors.textSecondary, display: "block", marginBottom: 6 }}>{exercises[showWeightEdit].name}</label>
              <input value={weightEditVal} onChange={e => setWeightEditVal(e.target.value)} placeholder="e.g. 65 kg"
                style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: `1.5px solid ${colors.border}`, fontSize: 16, fontWeight: 700, textAlign: "center", outline: "none", boxSizing: "border-box" }} autoFocus />
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setShowWeightEdit(null)} style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 14, fontWeight: 600, color: colors.textSecondary, cursor: "pointer" }}>{tr("Cancel")}</button>
              <button onClick={() => { setWeightOverride(p => ({ ...p, [showWeightEdit]: weightEditVal })); setShowWeightEdit(null); onShowToast("Weight updated", "success"); }}
                style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: "none", background: colors.primary, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>{tr("Save")}</button>
            </div>
          </BottomSheet>
        )}

        {/* Confirm Dialog */}
        {/* Skip Set Reason Dialog */}
        {showSkipSetReason !== null && (
          <BottomSheet title="Why are you skipping this set?" onClose={() => { setShowSkipSetReason(null); setSkipSetReasonText(""); }}>
            <div style={{ fontSize: 13, color: colors.textSecondary, marginBottom: 12 }}>
              Skipping: <strong style={{ color: colors.textPrimary }}>{exercises[showSkipSetReason.exIndex]?.name} — Set {showSkipSetReason.setIndex + 1}</strong>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
              {["Injury / Pain", "Too tired", "Too heavy", "Not enough time", "Other"].map(r => (
                <button key={r} onClick={() => setSkipSetReasonText(r)}
                  style={{ padding: "6px 12px", borderRadius: 8, border: `1.5px solid ${skipSetReasonText === r ? colors.warning : colors.border}`,
                    background: skipSetReasonText === r ? `${colors.warning}10` : "transparent", fontSize: 12, fontWeight: 600,
                    color: skipSetReasonText === r ? colors.warning : colors.textSecondary, cursor: "pointer" }}>
                  {r}
                </button>
              ))}
            </div>
            <textarea value={skipSetReasonText} onChange={e => setSkipSetReasonText(e.target.value)}
              placeholder="Type your reason here..." rows={2}
              style={{ width: "100%", borderRadius: 10, border: `1.5px solid ${colors.border}`, padding: "10px 12px", fontSize: 13, outline: "none", resize: "none", fontFamily: "inherit", boxSizing: "border-box", marginBottom: 12 }} />
            <button onClick={() => skipSet(showSkipSetReason.exIndex, showSkipSetReason.setIndex, skipSetReasonText)}
              disabled={!skipSetReasonText.trim()}
              style={{ width: "100%", padding: "12px 0", borderRadius: 12, border: "none",
                background: skipSetReasonText.trim() ? colors.warning : colors.surface,
                color: skipSetReasonText.trim() ? "#fff" : colors.textMuted,
                fontSize: 14, fontWeight: 700, cursor: skipSetReasonText.trim() ? "pointer" : "not-allowed" }}>
              Skip Set
            </button>
          </BottomSheet>
        )}

        {/* Skip Exercise Reason Dialog */}
        {showSkipExReason !== null && (
          <BottomSheet title="Why are you skipping this exercise?" onClose={() => { setShowSkipExReason(null); setSkipExReasonText(""); }}>
            <div style={{ fontSize: 13, color: colors.textSecondary, marginBottom: 12 }}>
              Skipping: <strong style={{ color: colors.textPrimary }}>{exercises[showSkipExReason]?.name}</strong>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
              {["Injury / Pain", "Too tired", "Equipment unavailable", "Not enough time", "Other"].map(r => (
                <button key={r} onClick={() => setSkipExReasonText(r)}
                  style={{ padding: "6px 12px", borderRadius: 8, border: `1.5px solid ${skipExReasonText === r ? colors.warning : colors.border}`,
                    background: skipExReasonText === r ? `${colors.warning}10` : "transparent", fontSize: 12, fontWeight: 600,
                    color: skipExReasonText === r ? colors.warning : colors.textSecondary, cursor: "pointer" }}>
                  {r}
                </button>
              ))}
            </div>
            <textarea value={skipExReasonText} onChange={e => setSkipExReasonText(e.target.value)}
              placeholder="Type your reason here..." rows={2}
              style={{ width: "100%", borderRadius: 10, border: `1.5px solid ${colors.border}`, padding: "10px 12px", fontSize: 13, outline: "none", resize: "none", fontFamily: "inherit", boxSizing: "border-box", marginBottom: 12 }} />
            <button onClick={() => skipExercise(showSkipExReason, skipExReasonText)}
              disabled={!skipExReasonText.trim()}
              style={{ width: "100%", padding: "12px 0", borderRadius: 12, border: "none",
                background: skipExReasonText.trim() ? colors.warning : colors.surface,
                color: skipExReasonText.trim() ? "#fff" : colors.textMuted,
                fontSize: 14, fontWeight: 700, cursor: skipExReasonText.trim() ? "pointer" : "not-allowed" }}>
              Skip Exercise
            </button>
          </BottomSheet>
        )}

        {showConfirm && (
          <ConfirmDialog
            title={allDone ? "Finish workout?" : "End workout early?"}
            message={`${exercises.filter(e => e.done).length}/${totalExCount} exercises completed${exercises.filter(e => e.skipped).length > 0 ? `, ${exercises.filter(e => e.skipped).length} skipped` : ""}. Duration: ${formatTime(workoutTime)}.`}
            onConfirm={() => { setShowConfirm(false); finishWorkout(); }}
            onCancel={() => setShowConfirm(false)}
          />
        )}
      </div>
    );
  }

  // ── COMPLETED MODE ──
  return (
    <div>
      {/* Confetti */}
      {showConfetti && (
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 999, overflow: "hidden" }}>
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} style={{
              position: "absolute", top: -10, left: `${Math.random() * 100}%`,
              width: Math.random() > 0.5 ? 8 : 6, height: Math.random() > 0.5 ? 8 : 6,
              borderRadius: Math.random() > 0.5 ? "50%" : 2,
              background: ["#34D399", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#F97316", "#3B82F6"][i % 7],
              animation: `confettiFall ${1.5 + Math.random() * 2}s ease-in forwards`,
              animationDelay: `${Math.random() * 0.8}s`
            }} />
          ))}
        </div>
      )}

      <div style={{ padding: "20px 20px 0", textAlign: "center" }}>
        {/* Celebration */}
        <div style={{ marginBottom: 12, animation: "bounce 0.6s ease", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Dumbbell size={64} color={colors.primary} />
        </div>
        <div style={{ fontSize: 24, fontWeight: 900, color: colors.textPrimary, marginBottom: 4, letterSpacing: -0.5 }}>{tr("Workout Complete!")}</div>
        <div style={{ fontSize: 14, color: colors.textSecondary, marginBottom: 20 }}>Amazing effort, Sarah!</div>

        {/* Stats Summary Card */}
        <div style={{ background: gradients.workout, borderRadius: 20, padding: 20, marginBottom: 20, textAlign: "left", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
          <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>{tr("Workout Summary")}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { label: "Duration", value: formatTime(workoutTime), icon: Clock },
              { label: "Exercises", value: `${exercises.filter(e => e.done).length}/${totalExCount}`, icon: Dumbbell },
              { label: "Sets Done", value: `${completedSets}/${totalSets}`, icon: BarChart2 },
              { label: "Skipped", value: `${exercises.filter(e => e.skipped).length}`, icon: ChevronRight },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <s.icon size={14} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Streak Update */}
        <div style={{ background: gradients.streak, borderRadius: 16, padding: "14px 20px", display: "flex", alignItems: "center", gap: 12, marginBottom: 16, boxShadow: "0 4px 16px rgba(249,115,22,0.25)" }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Flame size={22} color="#fff" />
          </div>
          <div style={{ flex: 1, textAlign: "left" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>7-day streak!</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>New personal best!</div>
          </div>
          <Star size={20} color="#FFD700" fill="#FFD700" />
        </div>

        {/* Badges Earned */}
        <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary, marginBottom: 12 }}>Badges Unlocked</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            {[
              { icon: "fire", name: "Streak Master", desc: "7-day streak!" },
              { icon: "star", name: "Full Effort", desc: "Complete all exercises" },
            ].map((b, i) => (
              <div key={i} style={{ textAlign: "center", animation: `fadeScale 0.4s ease ${i * 0.2}s both` }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
                  <ModernBadgeIcon type={b.icon} size={52} earned={true} />
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: colors.textPrimary }}>{b.name}</div>
                <div style={{ fontSize: 9, color: colors.textMuted }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Progress */}
        <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary, marginBottom: 8 }}>{tr("This Week")}</div>
          <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", margin: "0 auto 4px",
                  background: i < 5 ? (i < 4 ? colors.success : colors.primary) : colors.surface,
                  border: i === 4 ? `2px solid ${colors.primary}` : "none",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  {i < 4 && <Check size={12} color="#fff" strokeWidth={3} />}
                  {i === 4 && <Check size={12} color="#fff" strokeWidth={3} />}
                </div>
                <span style={{ fontSize: 9, color: i === 4 ? colors.primary : colors.textMuted, fontWeight: i === 4 ? 700 : 500 }}>{d}</span>
              </div>
            ))}
          </div>
          <ProgressBar value={5} max={5} color={colors.success} />
          <div style={{ fontSize: 12, fontWeight: 600, color: colors.success, marginTop: 6 }}>5/5 workouts — Perfect week!</div>
        </div>

        {/* Coach Notification */}
        <div style={{ padding: "10px 14px", background: `${colors.primary}08`, borderRadius: 12, border: `1px solid ${colors.primary}15`, marginBottom: 20, display: "flex", gap: 8, alignItems: "center" }}>
          <CheckCircle2 size={16} color={colors.primary} />
          <span style={{ fontSize: 13, color: colors.textSecondary }}>Your coach has been notified of your results.</span>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
          <button onClick={onBack} style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 14, fontWeight: 600, color: colors.textSecondary, cursor: "pointer" }}>{tr("Back to Home")}</button>
          <button onClick={onBack} style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: "none", background: colors.primary, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 14px rgba(52,211,153,0.25)" }}>Share Results</button>
        </div>
      </div>
    </div>
  );
}

function TraineeNutrition({ onBack, onShowToast }) {
  const [meals, setMeals] = useState([
    { id: 1, slot: "Breakfast", time: "07:30", items: [{ name: "Oatmeal", portion: "80g", cal: 240, p: 8, c: 42, f: 4 }, { name: "Banana", portion: "1 medium", cal: 105, p: 1, c: 27, f: 0 }, { name: "Whey Protein Shake", portion: "1 scoop", cal: 135, p: 25, c: 3, f: 2 }], done: true, coachAssigned: true, coachNote: "", coachInstruction: "Eat within 20 minutes of waking up. Drink a full glass of water first.", coachCaution: "" },
    { id: 2, slot: "Lunch", time: "12:30", items: [{ name: "Grilled Chicken Breast", portion: "180g", cal: 280, p: 42, c: 0, f: 6 }, { name: "Brown Rice", portion: "150g", cal: 180, p: 4, c: 38, f: 1 }, { name: "Steamed Broccoli", portion: "120g", cal: 40, p: 3, c: 7, f: 0 }], done: false, coachAssigned: true, coachNote: "Try to eat within 30 min of training", coachInstruction: "Eat slowly and chew thoroughly. Have this meal within 30 min after training.", coachCaution: "Avoid adding extra sauces or dressing — they add hidden calories." },
    { id: 3, slot: "Snack", time: "15:30", items: [{ name: "Greek Yogurt", portion: "200g", cal: 130, p: 12, c: 8, f: 5 }, { name: "Mixed Berries", portion: "80g", cal: 40, p: 1, c: 9, f: 0 }], done: false, coachAssigned: true, coachNote: "", coachInstruction: "", coachCaution: "Do not replace with flavored yogurt — too much sugar." },
    { id: 4, slot: "Dinner", time: "19:00", items: [{ name: "Salmon Fillet", portion: "200g", cal: 400, p: 46, c: 0, f: 22 }, { name: "Sweet Potato", portion: "200g", cal: 180, p: 4, c: 42, f: 0 }, { name: "Mixed Salad + Olive Oil", portion: "1 bowl", cal: 120, p: 2, c: 8, f: 8 }], done: false, coachAssigned: true, coachNote: "", coachInstruction: "Eat this at least 2 hours before sleeping.", coachCaution: "" },
  ]);
  const [expandedMeal, setExpandedMeal] = useState(null);
  const [editingMeal, setEditingMeal] = useState(null);
  const [showAddMeal, setShowAddMeal] = useState(false);
  const [showFoodSearch, setShowFoodSearch] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCoachNotes, setShowCoachNotes] = useState(true);
  const [traineeNote, setTraineeNote] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [waterIntake, setWaterIntake] = useState(5);
  const [showManualEntry, setShowManualEntry] = useState(false);
  const [manualFood, setManualFood] = useState({ name: "", grams: "", cal: "", p: "", c: "", f: "" });
  const [addMealSlot, setAddMealSlot] = useState("Snack");
  const [addMealTime, setAddMealTime] = useState("16:00");
  const [skippedMeals, setSkippedMeals] = useState({});
  const [showSkipMealReason, setShowSkipMealReason] = useState(null); // meal id or null
  const [skipMealReasonText, setSkipMealReasonText] = useState("");
  const [mealSkipReasons, setMealSkipReasons] = useState({}); // { mealId: reason }
  const [showWaterPrompt, setShowWaterPrompt] = useState(false);
  const [finalWaterLiters, setFinalWaterLiters] = useState("2.0");
  const [nutritionCompleted, setNutritionCompleted] = useState(false);

  const targets = { cal: 2100, p: 150, c: 230, f: 70 };
  const macroColors = { p: "#8B5CF6", c: "#F59E0B", f: "#EF4444" };
  const macroNames = { p: "Protein", c: "Carbs", f: "Fat" };

  const getMealTotals = (meal) => meal.items.reduce((a, item) => ({ cal: a.cal + item.cal, p: a.p + item.p, c: a.c + item.c, f: a.f + item.f }), { cal: 0, p: 0, c: 0, f: 0 });
  const eatenMeals = meals.filter(m => m.done);
  const totalEaten = eatenMeals.reduce((a, m) => { const t = getMealTotals(m); return { cal: a.cal + t.cal, p: a.p + t.p, c: a.c + t.c, f: a.f + t.f }; }, { cal: 0, p: 0, c: 0, f: 0 });
  const calPct = Math.round((totalEaten.cal / targets.cal) * 100);
  const mealsDoneCount = eatenMeals.length;
  const totalMealsCount = meals.length;
  const skippedCount = Object.values(skippedMeals).filter(Boolean).length;
  const allMealsHandled = meals.every(m => m.done || skippedMeals[m.id]);

  const isOverTarget = totalEaten.cal > targets.cal;
  const isNearTarget = calPct >= 85 && calPct <= 100;

  const foodDatabase = [
    { name: "Chicken Breast (grilled)", portion: "150g", cal: 230, p: 35, c: 0, f: 5 },
    { name: "Brown Rice (cooked)", portion: "150g", cal: 180, p: 4, c: 38, f: 1 },
    { name: "Egg (boiled)", portion: "50g", cal: 78, p: 6, c: 1, f: 5 },
    { name: "Oatmeal (dry)", portion: "80g", cal: 240, p: 8, c: 42, f: 4 },
    { name: "Greek Yogurt", portion: "200g", cal: 130, p: 12, c: 8, f: 5 },
    { name: "Banana", portion: "120g", cal: 105, p: 1, c: 27, f: 0 },
    { name: "Almonds", portion: "30g", cal: 170, p: 6, c: 6, f: 14 },
    { name: "Salmon Fillet", portion: "150g", cal: 300, p: 34, c: 0, f: 17 },
    { name: "Sweet Potato", portion: "200g", cal: 180, p: 4, c: 42, f: 0 },
    { name: "Avocado", portion: "100g", cal: 160, p: 2, c: 8, f: 15 },
    { name: "Whey Protein Shake", portion: "30g", cal: 135, p: 25, c: 3, f: 2 },
    { name: "Tuna (canned)", portion: "100g", cal: 110, p: 26, c: 0, f: 1 },
    { name: "Peanut Butter", portion: "32g", cal: 190, p: 7, c: 7, f: 16 },
    { name: "Apple", portion: "180g", cal: 95, p: 0, c: 25, f: 0 },
    { name: "Cottage Cheese", portion: "150g", cal: 110, p: 15, c: 5, f: 3 },
    { name: "Quinoa (cooked)", portion: "150g", cal: 180, p: 6, c: 32, f: 3 },
  ];

  const filteredFoods = searchQuery.trim() ? foodDatabase.filter(f => f.name.toLowerCase().includes(searchQuery.toLowerCase())) : foodDatabase;

  const toggleMeal = (id) => {
    setMeals(prev => prev.map(m => m.id === id ? { ...m, done: !m.done } : m));
    const meal = meals.find(m => m.id === id);
    if (meal && !meal.done) onShowToast(`${meal.slot} logged`, "success");
  };

  const deleteMeal = (id) => {
    setMeals(prev => prev.filter(m => m.id !== id));
    setShowDeleteConfirm(null);
    onShowToast("Meal removed", "warning");
  };

  const removeItem = (mealId, itemIdx) => {
    setMeals(prev => prev.map(m => m.id === mealId ? { ...m, items: m.items.filter((_, i) => i !== itemIdx) } : m));
    onShowToast("Item removed", "success");
  };

  const addFoodToMeal = (mealId, food) => {
    setMeals(prev => prev.map(m => m.id === mealId ? { ...m, items: [...m.items, { ...food }] } : m));
    setShowFoodSearch(null);
    setSearchQuery("");
    onShowToast(`${food.name} added`, "success");
  };

  const addNewMeal = () => {
    const newMeal = { id: Date.now(), slot: addMealSlot, time: addMealTime, items: [], done: false, coachAssigned: false, coachNote: "" };
    setMeals(prev => [...prev, newMeal].sort((a, b) => a.time.localeCompare(b.time)));
    setShowAddMeal(false);
    setShowFoodSearch(newMeal.id);
    onShowToast(`${addMealSlot} added`, "success");
  };

  const addManualFood = (mealId) => {
    if (!manualFood.name || !manualFood.grams || !manualFood.cal) { onShowToast("Name, grams, and calories required", "error"); return; }
    const food = { name: manualFood.name, portion: manualFood.grams + "g", cal: Number(manualFood.cal) || 0, p: Number(manualFood.p) || 0, c: Number(manualFood.c) || 0, f: Number(manualFood.f) || 0 };
    addFoodToMeal(mealId, food);
    setManualFood({ name: "", grams: "", cal: "", p: "", c: "", f: "" });
    setShowManualEntry(false);
  };

  const streakDays = 8;
  const loggedDays = [true, true, true, true, true, false, true, true]; // last 8 days

  return (
    <div>
      {/* ═══ HEADER ═══ */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 16 }}>
        <button onClick={onBack} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <ChevronLeft size={20} color={colors.textPrimary} />
        </button>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: colors.textPrimary, letterSpacing: -0.3 }}>{tr("Today's Nutrition")}</h2>
          <span style={{ fontSize: 12, color: colors.textSecondary }}>Assigned by Coach Mike</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ background: `${colors.primary}10`, padding: "4px 10px", borderRadius: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: colors.primary }}>{mealsDoneCount}/{totalMealsCount}</span>
          </div>
        </div>
      </div>

      {/* ═══ SECTION 1: DAILY OVERVIEW ═══ */}
      <div style={{ margin: "0 20px 16px", background: colors.card, borderRadius: 20, padding: 18, border: `1px solid ${colors.border}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
        {/* Calorie Ring + Stats */}
        <div style={{ display: "flex", gap: 16, marginBottom: 14 }}>
          <div style={{ position: "relative", width: 90, height: 90, flexShrink: 0 }}>
            <svg viewBox="0 0 90 90" style={{ width: 90, height: 90, transform: "rotate(-90deg)" }}>
              <circle cx="45" cy="45" r="38" fill="none" stroke={colors.surface} strokeWidth="7" />
              <circle cx="45" cy="45" r="38" fill="none" stroke={isOverTarget ? colors.error : isNearTarget ? colors.success : colors.primary} strokeWidth="7"
                strokeDasharray={`${Math.min(calPct / 100, 1) * 238.8} 238.8`} strokeLinecap="round" style={{ transition: "stroke-dasharray 0.5s ease" }} />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: isOverTarget ? colors.error : colors.textPrimary }}>{totalEaten.cal}</div>
              <div style={{ fontSize: 9, color: colors.textMuted }}>/ {targets.cal} cal</div>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
            {["p", "c", "f"].map(key => {
              const pct = Math.min((totalEaten[key] / targets[key]) * 100, 100);
              const over = totalEaten[key] > targets[key];
              return (
                <div key={key}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <div style={{ width: 8, height: 8, borderRadius: 2, background: macroColors[key] }} />
                      <span style={{ fontSize: 11, fontWeight: 600, color: colors.textSecondary }}>{macroNames[key]}</span>
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 700, color: over ? colors.error : colors.textMuted }}>{totalEaten[key]}g / {targets[key]}g</span>
                  </div>
                  <div style={{ background: colors.surface, borderRadius: 3, height: 5, overflow: "hidden" }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: over ? colors.error : macroColors[key], borderRadius: 3, transition: "width 0.5s ease" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Remaining + Status */}
        <div style={{ display: "flex", gap: 8 }}>
          {[
            { label: "Remaining", value: `${Math.max(targets.cal - totalEaten.cal, 0)} cal`, color: isOverTarget ? colors.error : colors.primary },
            { label: "Protein Left", value: `${Math.max(targets.p - totalEaten.p, 0)}g`, color: macroColors.p },
            { label: "Water", value: `${waterIntake}/8 glasses`, color: "#3B82F6" },
          ].map((s, i) => (
            <div key={i} style={{ flex: 1, padding: "8px 6px", borderRadius: 10, background: `${s.color}08`, textAlign: "center", border: `1px solid ${s.color}15` }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 9, color: colors.textMuted }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Over-target Warning */}
        {isOverTarget && (
          <div style={{ marginTop: 10, padding: "8px 12px", background: `${colors.error}08`, borderRadius: 10, border: `1px solid ${colors.error}20`, display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={14} color={colors.error} />
            <span style={{ fontSize: 12, color: colors.error, fontWeight: 600 }}>You've exceeded your daily calorie target by {totalEaten.cal - targets.cal} cal</span>
          </div>
        )}

        {/* Near-target Success */}
        {isNearTarget && !isOverTarget && (
          <div style={{ marginTop: 10, padding: "8px 12px", background: `${colors.success}08`, borderRadius: 10, border: `1px solid ${colors.success}20`, display: "flex", alignItems: "center", gap: 8 }}>
            <CheckCircle2 size={14} color={colors.success} />
            <span style={{ fontSize: 12, color: colors.success, fontWeight: 600 }}>Almost there! You're on track for your daily goal</span>
          </div>
        )}
      </div>

      {/* Water Intake Quick Tracker */}
      <div style={{ margin: "0 20px 16px", padding: "16px", background: colors.card, borderRadius: 14, border: `1px solid ${colors.border}` }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: colors.textPrimary }}>{tr("Water Intake")}</div>
            <div style={{ fontSize: 11, color: colors.textSecondary, marginTop: 2 }}>{waterIntake * 250} ml / 2,000 ml</div>
          </div>
          <button onClick={() => setWaterIntake(Math.min(8, waterIntake + 1))}
            style={{ padding: "6px 14px", borderRadius: 20, border: "none", background: colors.primary, color: "#000", fontSize: 11, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <Droplets size={14} /> +250ml
          </button>
        </div>
        <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{ width: 28, height: 28, borderRadius: 8, background: i < waterIntake ? "#3B82F6" : colors.surface, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Droplets size={14} color={i < waterIntake ? "#fff" : colors.textMuted} fill={i < waterIntake ? "#fff" : "none"} />
            </div>
          ))}
        </div>
      </div>

      {/* ═══ SECTION 2 & 3: MEAL LIST + LOGGING ═══ */}
      <div style={{ padding: "0 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8 }}>Meals ({totalMealsCount})</span>
          <button onClick={() => setShowAddMeal(true)} style={{ fontSize: 12, fontWeight: 700, color: colors.primary, background: `${colors.primary}08`, border: "none", borderRadius: 8, padding: "5px 12px", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
            <Plus size={12} /> Add Meal
          </button>
        </div>

        {meals.map(meal => {
          const mealTotals = getMealTotals(meal);
          const isExpanded = expandedMeal === meal.id;
          return (
            <div key={meal.id} style={{ marginBottom: 12 }}>
              {/* Meal Card Header */}
              <div style={{
                background: colors.card, borderRadius: isExpanded ? "16px 16px 0 0" : 16, padding: "14px 16px",
                border: `1.5px solid ${meal.done ? colors.success + "40" : skippedMeals[meal.id] ? colors.warning + "30" : colors.border}`,
                opacity: skippedMeals[meal.id] ? 0.5 : 1, transition: "all 0.2s"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {/* Checkbox */}
                  <button onClick={() => toggleMeal(meal.id)} style={{
                    width: 28, height: 28, borderRadius: 8, border: meal.done ? "none" : `2px solid ${colors.border}`,
                    background: meal.done ? colors.success : "transparent", display: "flex", alignItems: "center",
                    justifyContent: "center", cursor: "pointer", flexShrink: 0, transition: "all 0.2s"
                  }}>
                    {meal.done && <Check size={14} color="#fff" strokeWidth={3} />}
                  </button>

                  <button onClick={() => setExpandedMeal(isExpanded ? null : meal.id)} style={{ flex: 1, background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{meal.slot}</span>
                      <span style={{ fontSize: 10, color: colors.textMuted }}>{meal.time}</span>
                      {meal.done && <span style={{ fontSize: 9, fontWeight: 700, color: colors.success, background: colors.successLight, padding: "1px 6px", borderRadius: 4 }}>{tr("Logged")}</span>}
                      {skippedMeals[meal.id] && <span style={{ fontSize: 9, fontWeight: 700, color: colors.warning, background: `${colors.warning}15`, padding: "1px 6px", borderRadius: 4 }}>{tr("Skipped")}</span>}
                    </div>
                    <div style={{ fontSize: 12, color: colors.textSecondary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {meal.items.map(i => i.name).join(", ") || "No items yet"}
                    </div>
                  </button>

                  {/* Meal Calories */}
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: meal.done ? colors.success : colors.textPrimary }}>{mealTotals.cal}</div>
                    <div style={{ fontSize: 9, color: colors.textMuted }}>cal</div>
                  </div>
                  {isExpanded ? <ChevronUp size={14} color={colors.textMuted} /> : <ChevronDown size={14} color={colors.textMuted} />}
                </div>

                {/* Macro Mini-Bars */}
                <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
                  {["p", "c", "f"].map(k => (
                    <div key={k} style={{ flex: 1, display: "flex", alignItems: "center", gap: 4 }}>
                      <div style={{ width: 6, height: 6, borderRadius: 2, background: macroColors[k], flexShrink: 0 }} />
                      <span style={{ fontSize: 9, color: colors.textMuted }}>{macroNames[k][0]}: {mealTotals[k]}g</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expanded Meal Detail */}
              {isExpanded && (
                <div style={{ background: colors.card, borderRadius: "0 0 16px 16px", padding: "0 16px 16px", border: `1.5px solid ${colors.border}`, borderTop: "none" }}>
                  {/* Item List */}
                  {meal.items.map((item, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: idx < meal.items.length - 1 ? `1px solid ${colors.surface}` : "none" }}>
                      <div style={{ width: 28, height: 28, borderRadius: 7, background: colors.surface, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Apple size={13} color={colors.textMuted} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                          <span style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{item.name}</span>
                          <span style={{ fontSize: 10, fontWeight: 700, color: colors.primary, background: `${colors.primary}12`, padding: "1px 7px", borderRadius: 6, border: `1px solid ${colors.primary}20`, flexShrink: 0 }}>{item.portion}</span>
                        </div>
                        <div style={{ fontSize: 11, color: colors.textSecondary, marginTop: 1 }}>{item.cal} cal</div>
                      </div>
                      <div style={{ display: "flex", gap: 6 }}>
                        <div style={{ display: "flex", gap: 4 }}>
                          {["p", "c", "f"].map(k => (
                            <span key={k} style={{ fontSize: 9, fontWeight: 600, padding: "2px 5px", borderRadius: 4, background: `${macroColors[k]}10`, color: macroColors[k] }}>{item[k]}g</span>
                          ))}
                        </div>
                        <button onClick={() => removeItem(meal.id, idx)} style={{ background: "none", border: "none", cursor: "pointer", padding: 2 }}>
                          <X size={12} color={colors.textMuted} />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Coach Note for meal */}
                  {meal.coachNote && (
                    <div style={{ marginTop: 10, padding: "8px 12px", background: `${colors.primary}08`, borderRadius: 10, border: `1px solid ${colors.primary}15`, display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <MessageSquare size={12} color={colors.primary} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: 12, color: colors.primary, fontStyle: "italic" }}>{meal.coachNote}</span>
                    </div>
                  )}

                  {/* Coach Instruction */}
                  {meal.coachInstruction && (
                    <div style={{ marginTop: 8, padding: "8px 12px", background: `${colors.primary}06`, borderRadius: 10, border: `1px solid ${colors.primary}12`, display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <FileText size={12} color={colors.primary} style={{ flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <div style={{ fontSize: 9, fontWeight: 700, color: colors.primary, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 }}>Coach Instruction</div>
                        <span style={{ fontSize: 12, color: colors.textSecondary }}>{meal.coachInstruction}</span>
                      </div>
                    </div>
                  )}

                  {/* Coach Caution */}
                  {meal.coachCaution && (
                    <div style={{ marginTop: 8, padding: "8px 12px", background: `${colors.warning}06`, borderRadius: 10, border: `1px solid ${colors.warning}15`, display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <AlertTriangle size={12} color={colors.warning} style={{ flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <div style={{ fontSize: 9, fontWeight: 700, color: colors.warning, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 }}>Coach Caution</div>
                        <span style={{ fontSize: 12, color: colors.textSecondary }}>{meal.coachCaution}</span>
                      </div>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                    <button onClick={() => setShowFoodSearch(meal.id)} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: `1.5px solid ${colors.primary}30`, background: `${colors.primary}06`, fontSize: 12, fontWeight: 700, color: colors.primary, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                      <Plus size={12} /> Add Food
                    </button>
                    {skippedMeals[meal.id] ? (
                      <button onClick={() => setSkippedMeals(p => ({ ...p, [meal.id]: false }))} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 12, fontWeight: 600, color: colors.textSecondary, cursor: "pointer" }}>
                        Undo Skip
                      </button>
                    ) : !meal.done ? (
                      <>
                        <button onClick={() => toggleMeal(meal.id)} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: "none", background: colors.success, fontSize: 12, fontWeight: 700, color: "#fff", cursor: "pointer" }}>
                          Mark as Eaten
                        </button>
                        <button onClick={() => { setShowSkipMealReason(meal.id); setSkipMealReasonText(""); }}
                          style={{ padding: "10px 12px", borderRadius: 10, border: `1.5px solid ${colors.warning}30`, background: `${colors.warning}08`, fontSize: 12, fontWeight: 700, color: colors.warning, cursor: "pointer", whiteSpace: "nowrap" }}>
                          Skip
                        </button>
                      </>
                    ) : (
                      <button onClick={() => toggleMeal(meal.id)} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 12, fontWeight: 600, color: colors.textSecondary, cursor: "pointer" }}>
                        Undo Log
                      </button>
                    )}
                    {!meal.coachAssigned && (
                      <button onClick={() => setShowDeleteConfirm(meal.id)} style={{ width: 36, height: 36, borderRadius: 10, border: `1px solid ${colors.border}`, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                        <Trash2 size={14} color={colors.error} />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Empty State */}
        {meals.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <Apple size={40} color={colors.textMuted} style={{ marginBottom: 12 }} />
            <div style={{ fontSize: 16, fontWeight: 700, color: colors.textPrimary, marginBottom: 4 }}>{tr("No meals planned yet")}</div>
            <div style={{ fontSize: 13, color: colors.textSecondary, marginBottom: 16 }}>{tr("Start logging your meals to track your nutrition!")}</div>
            <button onClick={() => setShowAddMeal(true)} style={{ padding: "12px 24px", borderRadius: 12, border: "none", background: colors.primary, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              Add Your First Meal
            </button>
          </div>
        )}

        {/* Add Meal Dashed Button */}
        {meals.length > 0 && !nutritionCompleted && (
          <button onClick={() => setShowAddMeal(true)} style={{ width: "100%", padding: "12px 0", borderRadius: 14, border: `2px dashed ${colors.border}`, background: "transparent", color: colors.primary, fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 12 }}>
            <Plus size={14} /> Add Meal or Snack
          </button>
        )}

        {/* End Nutrition Button — visible when all meals handled */}
        {allMealsHandled && !nutritionCompleted && (
          <button onClick={() => setShowWaterPrompt(true)}
            style={{ width: "100%", padding: "16px 0", borderRadius: 16, border: "none", background: colors.success, color: "#fff", fontSize: 16, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 14px rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, animation: "fadeScale 0.3s ease", marginBottom: 12 }}>
            <CheckCircle2 size={20} /> End Nutrition
          </button>
        )}

        {/* Nutrition Completed Message */}
        {nutritionCompleted && (
          <div style={{ textAlign: "center", padding: "20px 16px", background: `${colors.success}08`, borderRadius: 16, border: `1.5px solid ${colors.success}25`, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #34D399, #059669)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 20px rgba(52,211,153,0.4)" }}>
                <CheckCircle2 size={28} color="#fff" strokeWidth={2.2} />
              </div>
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: colors.success, marginBottom: 4 }}>{tr("Nutrition Complete!")}</div>
            <div style={{ fontSize: 13, color: colors.textSecondary }}>
              {mealsDoneCount} meals logged, {skippedCount} skipped · Water: {finalWaterLiters}L
            </div>
          </div>
        )}
      </div>

      {/* ═══ SECTION 4: COACH NOTES & FEEDBACK ═══ */}
      <div style={{ margin: "16px 20px" }}>
        <button onClick={() => setShowCoachNotes(!showCoachNotes)} style={{
          width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "12px 14px",
          background: colors.card, borderRadius: showCoachNotes ? "14px 14px 0 0" : 14,
          border: `1px solid ${colors.border}`, cursor: "pointer"
        }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: `${colors.primary}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <MessageSquare size={15} color={colors.primary} />
          </div>
          <div style={{ flex: 1, textAlign: "left" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("Coach Notes & Tips")}</span>
          </div>
          {showCoachNotes ? <ChevronUp size={14} color={colors.textMuted} /> : <ChevronDown size={14} color={colors.textMuted} />}
        </button>
        {showCoachNotes && (
          <div style={{ background: colors.card, borderRadius: "0 0 14px 14px", padding: "12px 14px", border: `1px solid ${colors.border}`, borderTop: "none" }}>
            {/* Coach Tip */}
            <div style={{ padding: "10px 12px", background: `${colors.primary}06`, borderRadius: 10, border: `1px solid ${colors.primary}15`, marginBottom: 10, display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ width: 24, height: 24, borderRadius: 6, background: `${colors.primary}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Star size={12} color={colors.primary} />
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: colors.primary, marginBottom: 2 }}>Daily Tip</div>
                <div style={{ fontSize: 12, color: colors.textSecondary, lineHeight: 1.4 }}>Try to spread protein intake across all meals for better absorption. Aim for 30-40g per meal.</div>
              </div>
            </div>

            {/* Safety Alert */}
            <div style={{ padding: "10px 12px", background: `${colors.warning}06`, borderRadius: 10, border: `1px solid ${colors.warning}15`, marginBottom: 10, display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ width: 24, height: 24, borderRadius: 6, background: `${colors.warning}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <AlertTriangle size={12} color={colors.warning} />
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: colors.warning, marginBottom: 2 }}>Reminder</div>
                <div style={{ fontSize: 12, color: colors.textSecondary, lineHeight: 1.4 }}>Avoid dairy within 1 hour of iron-rich meals for better nutrient absorption.</div>
              </div>
            </div>

            {/* Trainee Note */}
            <div style={{ marginTop: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>Your Notes</div>
              <textarea value={traineeNote} onChange={e => setTraineeNote(e.target.value)}
                placeholder="Add a note about today's meals..."
                rows={2}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: `1.5px solid ${colors.border}`, fontSize: 13, fontFamily: "inherit", resize: "none", outline: "none", boxSizing: "border-box" }}
              />
            </div>
          </div>
        )}
      </div>

      {/* ═══ SECTION 5: GAMIFICATION / MOTIVATION ═══ */}
      <div style={{ margin: "0 20px 20px" }}>
        {/* Logging Streak */}
        <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: `${colors.success}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Flame size={18} color={colors.success} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{streakDays}-Day Logging Streak</div>
              <div style={{ fontSize: 11, color: colors.textSecondary }}>Log all meals to keep your streak alive!</div>
            </div>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: gradients.streak, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 14, fontWeight: 900, color: "#fff" }}>{streakDays}</span>
            </div>
          </div>
          {/* Last 8 days */}
          <div style={{ display: "flex", gap: 4 }}>
            {loggedDays.map((logged, i) => (
              <div key={i} style={{
                flex: 1, height: 6, borderRadius: 3,
                background: logged ? colors.success : `${colors.error}30`
              }} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
            <span style={{ fontSize: 9, color: colors.textMuted }}>8 days ago</span>
            <span style={{ fontSize: 9, color: colors.textMuted }}>{tr("Today")}</span>
          </div>
        </div>

        {/* Achievement Badges */}
        <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}` }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary, marginBottom: 12 }}>Nutrition Badges</div>
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { icon: "salad", name: "Clean Eater", desc: "14-day log streak", earned: true },
              { icon: "bicep", name: "Protein Pro", desc: "Hit protein 7 days", earned: true },
              { icon: "target", name: "On Target", desc: "Exact cals 5 days", earned: false, pct: 60 },
              { icon: "droplets", name: "Hydrated", desc: "8 glasses × 7 days", earned: false, pct: 40 },
            ].map((b, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center", padding: "10px 4px", borderRadius: 12, background: b.earned ? `${colors.success}06` : colors.surface, border: `1px solid ${b.earned ? colors.success + "20" : colors.border}` }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 5 }}>
                  <ModernBadgeIcon type={b.icon} size={32} earned={b.earned} />
                </div>
                <div style={{ fontSize: 9, fontWeight: 700, color: b.earned ? colors.textPrimary : colors.textMuted, lineHeight: 1.2 }}>{b.name}</div>
                {!b.earned && b.pct !== undefined && (
                  <div style={{ marginTop: 4, background: colors.border, borderRadius: 2, height: 3, overflow: "hidden", marginInline: 4 }}>
                    <div style={{ width: `${b.pct}%`, height: "100%", background: colors.primary, borderRadius: 2 }} />
                  </div>
                )}
                {b.earned && <div style={{ fontSize: 8, color: colors.success, fontWeight: 600, marginTop: 2 }}>Earned</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Message */}
        {mealsDoneCount > 0 && mealsDoneCount < totalMealsCount && (
          <div style={{ marginTop: 12, padding: "12px 16px", background: `${colors.primary}06`, borderRadius: 12, border: `1px solid ${colors.primary}15`, textAlign: "center" }}>
            <span style={{ fontSize: 13, color: colors.primary, fontWeight: 600 }}>
              {mealsDoneCount === totalMealsCount - 1 ? "Almost there! Just 1 more meal to log today!" : `${totalMealsCount - mealsDoneCount} meals left to log — you've got this!`}
            </span>
          </div>
        )}
        {mealsDoneCount === totalMealsCount && totalMealsCount > 0 && (
          <div style={{ marginTop: 12, padding: "12px 16px", background: `${colors.success}08`, borderRadius: 12, border: `1px solid ${colors.success}20`, textAlign: "center" }}>
            <span style={{ fontSize: 13, color: colors.success, fontWeight: 700 }}>All meals logged! Great job staying consistent!</span>
          </div>
        )}
      </div>

      {/* ═══ BOTTOM SHEETS / MODALS ═══ */}

      {/* Add Meal Sheet */}
      {showAddMeal && (
        <BottomSheet title="Add New Meal" onClose={() => setShowAddMeal(false)}>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: colors.textSecondary, marginBottom: 6 }}>Meal Type</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {["Breakfast", "Lunch", "Snack", "Dinner", "Pre-Workout", "Post-Workout"].map(s => (
                <button key={s} onClick={() => setAddMealSlot(s)} style={{
                  padding: "8px 14px", borderRadius: 10,
                  border: `1.5px solid ${addMealSlot === s ? colors.primary : colors.border}`,
                  background: addMealSlot === s ? colors.primaryLight : "#fff",
                  fontSize: 12, fontWeight: 600, color: addMealSlot === s ? colors.primary : colors.textSecondary, cursor: "pointer"
                }}>{s}</button>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: colors.textSecondary, marginBottom: 6 }}>Time</div>
            <input type="time" value={addMealTime} onChange={e => setAddMealTime(e.target.value)}
              style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: `1.5px solid ${colors.border}`, fontSize: 14, boxSizing: "border-box" }} />
          </div>
          <button onClick={addNewMeal} style={{ width: "100%", padding: "14px 0", borderRadius: 12, border: "none", background: colors.primary, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 14px rgba(52,211,153,0.25)" }}>
            Create Meal
          </button>
        </BottomSheet>
      )}

      {/* Food Search Sheet */}
      {showFoodSearch !== null && (
        <BottomSheet title="Add Food" onClose={() => { setShowFoodSearch(null); setSearchQuery(""); setShowManualEntry(false); }}>
          {!showManualEntry ? (
            <>
              <div style={{ position: "relative", marginBottom: 12 }}>
                <Search size={16} color={colors.textMuted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
                <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search foods..."
                  style={{ width: "100%", padding: "10px 14px 10px 38px", borderRadius: 12, border: `1.5px solid ${colors.border}`, fontSize: 14, outline: "none", boxSizing: "border-box" }} autoFocus />
              </div>
              <div style={{ maxHeight: 260, overflow: "auto", marginBottom: 12 }}>
                {filteredFoods.map((f, i) => (
                  <button key={i} onClick={() => addFoodToMeal(showFoodSearch, f)} style={{
                    width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
                    background: "none", border: "none", borderBottom: `1px solid ${colors.surface}`,
                    cursor: "pointer", textAlign: "left"
                  }}>
                    <div style={{ width: 28, height: 28, borderRadius: 7, background: colors.surface, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Apple size={13} color={colors.textMuted} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{f.name}</div>
                      <div style={{ fontSize: 10, color: colors.textMuted }}>{f.portion} · P:{f.p}g C:{f.c}g F:{f.f}g</div>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{f.cal} cal</span>
                  </button>
                ))}
                {filteredFoods.length === 0 && searchQuery && (
                  <div style={{ textAlign: "center", padding: 20 }}>
                    <div style={{ fontSize: 13, color: colors.textSecondary, marginBottom: 8 }}>No results for "{searchQuery}"</div>
                    <button onClick={() => { setShowManualEntry(true); setManualFood(p => ({ ...p, name: searchQuery })); }}
                      style={{ fontSize: 13, fontWeight: 700, color: colors.primary, background: "none", border: "none", cursor: "pointer" }}>
                      + Add manually
                    </button>
                  </div>
                )}
              </div>
              <button onClick={() => setShowManualEntry(true)} style={{ width: "100%", padding: "10px 0", borderRadius: 10, border: `1.5px dashed ${colors.border}`, background: "transparent", fontSize: 13, fontWeight: 600, color: colors.primary, cursor: "pointer" }}>
                Enter Food Manually
              </button>
            </>
          ) : (
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                <div style={{ flex: 2 }}>
                  <label style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, display: "block", marginBottom: 4 }}>Food Name *</label>
                  <input value={manualFood.name} onChange={e => setManualFood(p => ({ ...p, name: e.target.value }))} placeholder="e.g. Chicken Breast"
                    style={{ width: "100%", padding: "8px 10px", borderRadius: 8, border: `1.5px solid ${colors.border}`, fontSize: 13, outline: "none", boxSizing: "border-box" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, display: "block", marginBottom: 4 }}>Grams *</label>
                  <div style={{ position: "relative" }}>
                    <input type="number" value={manualFood.grams} onChange={e => setManualFood(p => ({ ...p, grams: e.target.value }))} placeholder="150"
                      style={{ width: "100%", padding: "8px 10px", paddingRight: 22, borderRadius: 8, border: `1.5px solid ${colors.border}`, fontSize: 13, outline: "none", boxSizing: "border-box" }} />
                    <span style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", fontSize: 11, fontWeight: 600, color: colors.textMuted }}>g</span>
                  </div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 6, marginBottom: 14 }}>
                {[
                  { key: "cal", label: "Calories *", color: colors.textPrimary },
                  { key: "p", label: "Protein (g)", color: macroColors.p },
                  { key: "c", label: "Carbs (g)", color: macroColors.c },
                  { key: "f", label: "Fat (g)", color: macroColors.f },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ fontSize: 9, fontWeight: 600, color: field.color, display: "block", marginBottom: 3 }}>{field.label}</label>
                    <input type="number" value={manualFood[field.key]} onChange={e => setManualFood(p => ({ ...p, [field.key]: e.target.value }))} placeholder="0"
                      style={{ width: "100%", padding: "8px 6px", borderRadius: 8, border: `1.5px solid ${colors.border}`, fontSize: 13, textAlign: "center", outline: "none", boxSizing: "border-box" }} />
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => setShowManualEntry(false)} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 13, fontWeight: 600, color: colors.textSecondary, cursor: "pointer" }}>{tr("Back")}</button>
                <button onClick={() => addManualFood(showFoodSearch)} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: "none", background: colors.primary, color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>{tr("Add Food")}</button>
              </div>
            </div>
          )}
        </BottomSheet>
      )}

      {/* Delete Confirm */}
      {showDeleteConfirm && (
        <ConfirmDialog
          title="Delete Meal?"
          message="This will remove the meal and all its items. This cannot be undone."
          onConfirm={() => deleteMeal(showDeleteConfirm)}
          onCancel={() => setShowDeleteConfirm(null)}
        />
      )}

      {/* Water Intake Prompt before final submit */}
      {showWaterPrompt && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 300, padding: 20 }}>
          <div style={{ background: colors.card, borderRadius: 20, padding: 24, width: "100%", maxWidth: 390, boxShadow: "0 20px 60px rgba(0,0,0,0.3)", textAlign: "center" }}>
            <div style={{ marginBottom: 12, display: "flex", justifyContent: "center" }}><Droplets size={40} color="#3B82F6" /></div>
            <div style={{ fontSize: 18, fontWeight: 800, color: colors.textPrimary, marginBottom: 4 }}>{tr("Water Intake")}</div>
            <div style={{ fontSize: 13, color: colors.textSecondary, marginBottom: 20 }}>How many liters of water did you drink today?</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
              <button onClick={() => setFinalWaterLiters(v => String(Math.max(0, Number(v) - 0.5)))}
                style={{ width: 40, height: 40, borderRadius: 12, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 20, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: colors.textSecondary }}>−</button>
              <div style={{ padding: "8px 20px", borderRadius: 12, background: "#3B82F608", border: `2px solid #3B82F630` }}>
                <span style={{ fontSize: 28, fontWeight: 900, color: "#3B82F6" }}>{finalWaterLiters}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#3B82F6", marginLeft: 4 }}>L</span>
              </div>
              <button onClick={() => setFinalWaterLiters(v => String(Number(v) + 0.5))}
                style={{ width: 40, height: 40, borderRadius: 12, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 20, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: colors.textSecondary }}>+</button>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setShowWaterPrompt(false)}
                style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 14, fontWeight: 600, color: colors.textSecondary, cursor: "pointer" }}>{tr("Cancel")}</button>
              <button onClick={() => { setShowWaterPrompt(false); setNutritionCompleted(true); onShowToast("Nutrition day complete!", "success"); }}
                style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: "none", background: colors.success, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 14px rgba(16,185,129,0.25)" }}>{tr("Submit")}</button>
            </div>
          </div>
        </div>
      )}

      {/* Skip Meal Reason Dialog */}
      {showSkipMealReason !== null && (
        <BottomSheet title="Why are you skipping this meal?" onClose={() => { setShowSkipMealReason(null); setSkipMealReasonText(""); }}>
          <div style={{ fontSize: 13, color: colors.textSecondary, marginBottom: 12 }}>
            Skipping: <strong style={{ color: colors.textPrimary }}>{meals.find(m => m.id === showSkipMealReason)?.slot}</strong>
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
            {["Not hungry", "No time", "Feeling sick", "Ate something else", "Fasting", "Other"].map(r => (
              <button key={r} onClick={() => setSkipMealReasonText(r)}
                style={{ padding: "6px 12px", borderRadius: 8, border: `1.5px solid ${skipMealReasonText === r ? colors.warning : colors.border}`,
                  background: skipMealReasonText === r ? `${colors.warning}10` : "transparent", fontSize: 12, fontWeight: 600,
                  color: skipMealReasonText === r ? colors.warning : colors.textSecondary, cursor: "pointer" }}>
                {r}
              </button>
            ))}
          </div>
          <textarea value={skipMealReasonText} onChange={e => setSkipMealReasonText(e.target.value)}
            placeholder="Type your reason here..." rows={2}
            style={{ width: "100%", borderRadius: 10, border: `1.5px solid ${colors.border}`, padding: "10px 12px", fontSize: 13, outline: "none", resize: "none", fontFamily: "inherit", boxSizing: "border-box", marginBottom: 12 }} />
          <button onClick={() => {
            if (!skipMealReasonText.trim()) return;
            setSkippedMeals(p => ({ ...p, [showSkipMealReason]: true }));
            setMealSkipReasons(p => ({ ...p, [showSkipMealReason]: skipMealReasonText.trim() }));
            const mealSlot = meals.find(m => m.id === showSkipMealReason)?.slot;
            onShowToast(mealSlot + " skipped", "warning");
            setShowSkipMealReason(null);
            setSkipMealReasonText("");
          }}
            disabled={!skipMealReasonText.trim()}
            style={{ width: "100%", padding: "12px 0", borderRadius: 12, border: "none",
              background: skipMealReasonText.trim() ? colors.warning : colors.surface,
              color: skipMealReasonText.trim() ? "#fff" : colors.textMuted,
              fontSize: 14, fontWeight: 700, cursor: skipMealReasonText.trim() ? "pointer" : "not-allowed" }}>
            Skip Meal
          </button>
        </BottomSheet>
      )}
    </div>
  );
}

function TraineeProgress({ onBack, onShowToast }) {
  const [timeRange, setTimeRange] = useState("month");
  const [activeChart, setActiveChart] = useState("weight");
  const [showWeightSheet, setShowWeightSheet] = useState(false);
  const [showMeasureSheet, setShowMeasureSheet] = useState(false);
  const [reflectionNote, setReflectionNote] = useState("");
  const [showBadgeDetail, setShowBadgeDetail] = useState(null);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [photosExpanded, setPhotosExpanded] = useState(false);
  const [inbodyExpanded, setInbodyExpanded] = useState(false);
  const [traineeInbodyReports] = useState([
    { date: "Feb 15, 2025", type: "PDF", label: "InBody Full Report", bg: "#EDE9FE" },
    { date: "Feb 1, 2025", type: "Image", label: "InBody Scan Result", bg: "#DBEAFE" },
    { date: "Jan 15, 2025", type: "PDF", label: "InBody Baseline", bg: "#D1FAE5" },
    { date: "Jan 1, 2025", type: "Image", label: "Initial InBody Scan", bg: "#FEF3C7" },
  ]);
  const [watchConnected, setWatchConnected] = useState(false);
  const [showWatchAuth, setShowWatchAuth] = useState(false);

  // Data
  const weightData = {
    week: [74.8, 74.6, 74.7, 74.5, 74.5, 74.3, 74.5],
    month: [76.2, 75.8, 75.5, 75.2, 75.0, 74.8, 74.5],
    labels: { week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], month: ["W1", "W2", "W3", "W4", "W5", "W6", "Now"] }
  };
  const goalWeight = 72;
  const startWeight = 76.2;
  const currentWeight = 74.5;

  const measurements = [
    { part: "Waist", current: 79, prev: 82, start: 85, unit: "cm", good: true },
    { part: "Chest", current: 94, prev: 95, start: 96, unit: "cm", good: false },
    { part: "Arms", current: 33, prev: 32, start: 31, unit: "cm", good: true },
    { part: "Hips", current: 96, prev: 98, start: 100, unit: "cm", good: true },
    { part: "Thighs", current: 56, prev: 57, start: 58, unit: "cm", good: true },
  ];

  const calorieData = [2050, 2120, 1980, 2200, 2100, 2050, 1900];
  const calTarget = 2100;
  const macroAdherence = { protein: 82, carbs: 78, fat: 85 };

  const workoutStats = { thisWeek: { done: 4, total: 5 }, lastWeek: { done: 5, total: 5 }, streak: 7, totalWorkouts: 42, bestStreak: 12 };
  const nutritionStats = { adherence: 80, streak: 8, totalLogged: 168 };

  const weekComparison = [
    { metric: "Workouts", thisWeek: "4/5", lastWeek: "5/5", trend: "down", pctChange: -20 },
    { metric: "Avg Calories", thisWeek: "2,057", lastWeek: "2,085", trend: "down", pctChange: -1 },
    { metric: "Protein Avg", thisWeek: "138g", lastWeek: "132g", trend: "up", pctChange: 5 },
    { metric: "Weight", thisWeek: "74.5 kg", lastWeek: "75.0 kg", trend: "up", pctChange: -0.7 },
    { metric: "Water Avg", thisWeek: "6.2 L", lastWeek: "5.8 L", trend: "up", pctChange: 7 },
  ];

  const badges = [
    { id: 1, icon: "fire", name: "Streak Master", desc: "7-day workout streak", criteria: "Complete 7 workouts in a row", earned: true, date: "Feb 14", tier: "gold" },
    { id: 2, icon: "bicep", name: "Iron Will", desc: "Complete 40+ workouts", criteria: "Log 40 total workouts", earned: true, date: "Feb 10", tier: "gold" },
    { id: 3, icon: "salad", name: "Clean Eater", desc: "14-day nutrition streak", criteria: "Log all meals for 14 days", earned: true, date: "Feb 8", tier: "silver" },
    { id: 4, icon: "trend", name: "Downward Trend", desc: "Lose 1.5+ kg", criteria: "Reach 1.5 kg weight loss", earned: true, date: "Feb 5", tier: "silver" },
    { id: 5, icon: "camera", name: "Progress Tracker", desc: "Upload 5 progress photos", criteria: "Take 5 progress photos", earned: false, progress: 3, total: 5 },
    { id: 6, icon: "trophy", name: "Goal Crusher", desc: "Reach target weight", criteria: "Hit your goal weight of 72 kg", earned: false, progress: Math.round(((startWeight - currentWeight) / (startWeight - goalWeight)) * 100), total: 100 },
    { id: 7, icon: "star", name: "Perfect Week", desc: "100% adherence", criteria: "Complete all workouts + log all meals for 1 week", earned: false, progress: 80, total: 100 },
    { id: 8, icon: "droplets", name: "Hydro Hero", desc: "8 glasses × 14 days", criteria: "Drink 8 glasses of water for 14 days", earned: false, progress: 8, total: 14 },
  ];

  const coachComments = [
    { date: "Feb 14", text: "Amazing consistency this week! Your protein intake is much better. Keep pushing on lower body days.", type: "praise" },
    { date: "Feb 10", text: "Try adding 5 min mobility work after leg days. Your recovery will improve significantly.", type: "tip" },
  ];

  const tierColors = { gold: "#F59E0B", silver: "#94A3B8", bronze: "#CD7F32" };

  // Chart helpers
  const renderLineChart = (data, labels, color, goal, minVal, maxVal) => {
    const w = 310, h = 100, px = 30, py = 10;
    const range = maxVal - minVal || 1;
    const pts = data.map((v, i) => ({
      x: px + (i / (data.length - 1)) * (w - 2 * px),
      y: py + ((maxVal - v) / range) * (h - 2 * py),
      val: v
    }));
    const polyline = pts.map(p => `${p.x},${p.y}`).join(" ");
    const area = `${pts[0].x},${h - 5} ${polyline} ${pts[pts.length - 1].x},${h - 5}`;
    const goalY = goal ? py + ((maxVal - goal) / range) * (h - 2 * py) : null;

    return (
      <svg viewBox={`0 0 ${w} ${h + 15}`} style={{ width: "100%", height: h + 15 }}>
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.12" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map(f => <line key={f} x1={px} y1={py + f * (h - 2 * py)} x2={w - px} y2={py + f * (h - 2 * py)} stroke={colors.surface} strokeWidth="1" />)}
        {goalY && <line x1={px} y1={goalY} x2={w - px} y2={goalY} stroke={colors.success} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />}
        {goalY && <text x={w - px + 4} y={goalY + 4} fontSize="8" fill={colors.success} fontWeight="600">Goal</text>}
        <polygon points={area} fill="url(#chartGrad)" />
        <polyline points={polyline} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {pts.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={hoveredPoint === i ? 6 : i === pts.length - 1 ? 5 : 3}
              fill={i === pts.length - 1 ? color : "#fff"} stroke={color} strokeWidth={i === pts.length - 1 ? 2 : 1.5}
              style={{ cursor: "pointer", transition: "r 0.2s" }}
              onMouseEnter={() => setHoveredPoint(i)} onMouseLeave={() => setHoveredPoint(null)} />
            {hoveredPoint === i && (
              <g>
                <rect x={p.x - 20} y={p.y - 22} width="40" height="16" rx="4" fill={colors.textPrimary} />
                <text x={p.x} y={p.y - 11} textAnchor="middle" fontSize="9" fill="#fff" fontWeight="700">{p.val}</text>
              </g>
            )}
          </g>
        ))}
        {labels.map((l, i) => (
          <text key={i} x={px + (i / (labels.length - 1)) * (w - 2 * px)} y={h + 10} textAnchor="middle" fontSize="9" fill={colors.textMuted}>{l}</text>
        ))}
      </svg>
    );
  };

  const renderBarChart = (data, target, labels) => {
    const w = 310, h = 80, px = 30;
    const maxVal = Math.max(...data, target) * 1.1;
    const barW = (w - 2 * px) / data.length - 4;
    const targetY = 10 + ((maxVal - target) / maxVal) * (h - 20);

    return (
      <svg viewBox={`0 0 ${w} ${h + 15}`} style={{ width: "100%", height: h + 15 }}>
        <line x1={px} y1={targetY} x2={w - px} y2={targetY} stroke={colors.success} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        {data.map((v, i) => {
          const barH = (v / maxVal) * (h - 20);
          const x = px + i * ((w - 2 * px) / data.length) + 2;
          const isOver = v > target;
          return (
            <g key={i}>
              <rect x={x} y={h - 10 - barH} width={barW} height={barH} rx="4" fill={isOver ? `${colors.warning}80` : `${colors.primary}80`} />
              <text x={x + barW / 2} y={h + 10} textAnchor="middle" fontSize="9" fill={colors.textMuted}>{labels[i]}</text>
            </g>
          );
        })}
      </svg>
    );
  };

  const earnedBadges = badges.filter(b => b.earned);
  const lockedBadges = badges.filter(b => !b.earned);

  // Badge icon mapper
  const getBadgeIcon = (badgeName) => {
    const iconMap = {
      "Streak Master": { icon: Flame, color: "#F97316" },
      "Iron Will": { icon: Dumbbell, color: "#34D399" },
      "Clean Eater": { icon: Apple, color: "#10B981" },
      "Progress Tracker": { icon: Camera, color: "#3B82F6" },
      "Goal Crusher": { icon: Target, color: "#F59E0B" },
      "Perfect Week": { icon: Star, color: "#34D399" },
      "Hydro Hero": { icon: Droplets, color: "#3B82F6" },
      "Downward Trend": { icon: TrendingUp, color: "#10B981" },
      "Protein Pro": { icon: Dumbbell, color: "#34D399" },
      "Consistency King": { icon: CheckCircle2, color: "#10B981" },
    };
    return iconMap[badgeName] || { icon: Award, color: colors.primary };
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 20px", marginBottom: 16 }}>
        <button onClick={onBack} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <ChevronLeft size={20} color={colors.textPrimary} />
        </button>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: colors.textPrimary, letterSpacing: -0.3 }}>{tr("My Progress")}</h2>
          <span style={{ fontSize: 12, color: colors.textSecondary }}>Track your fitness journey</span>
        </div>
        {/* Time Range Selector */}
        <div style={{ display: "flex", background: colors.surface, borderRadius: 8, padding: 2 }}>
          {["week", "month"].map(r => (
            <button key={r} onClick={() => setTimeRange(r)} style={{
              padding: "4px 10px", borderRadius: 6, border: "none", fontSize: 10, fontWeight: 700,
              background: timeRange === r ? colors.primary : "transparent",
              color: timeRange === r ? "#fff" : colors.textMuted, cursor: "pointer", textTransform: "capitalize"
            }}>{r}</button>
          ))}
        </div>
      </div>

      {/* ═══ APPLE WATCH SECTION ═══ */}
      <div style={{ padding: "0 20px", marginBottom: 12 }}>
        {!watchConnected ? (
          <div style={{ background: colors.card, borderRadius: 14, border: `1px solid ${colors.border}`, padding: 14, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: `${colors.primary}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Smartphone size={20} color={colors.primary} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: colors.textPrimary }}>Connect Apple Watch</div>
              <div style={{ fontSize: 11, color: colors.textSecondary, marginTop: 2 }}>Sync workouts & health data</div>
            </div>
            <button onClick={() => setShowWatchAuth(true)}
              style={{ padding: "6px 12px", borderRadius: 8, border: "none", background: colors.primary, color: "#000", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>{tr("Connect")}</button>
          </div>
        ) : (
          <div style={{ background: colors.card, borderRadius: 14, border: `1px solid ${colors.border}`, padding: 14 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: colors.textPrimary, marginBottom: 12 }}>Apple Watch Connected</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              {[
                { label: "Heart Rate", value: "72", unit: "BPM", color: "#EF4444", current: 72, max: 100 },
                { label: "Steps", value: "8,420", unit: "/ 10,000", color: "#3B82F6", current: 8420, max: 10000 },
                { label: "Sleep", value: "7.2h", unit: "/ 8h", color: "#8B5CF6", current: 7.2, max: 8 }
              ].map((stat, i) => {
                const pct = Math.min((stat.current / stat.max) * 100, 100);
                const circumference = 2 * Math.PI * 18;
                const strokeDashoffset = circumference - (pct / 100) * circumference;
                return (
                  <div key={i} style={{ textAlign: "center" }}>
                    <svg width="60" height="60" style={{ margin: "0 auto", display: "block" }}>
                      <circle cx="30" cy="30" r="18" fill="none" stroke={colors.surface} strokeWidth="2" />
                      <circle cx="30" cy="30" r="18" fill="none" stroke={stat.color} strokeWidth="2.5" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" style={{ transform: "rotate(-90deg)", transformOrigin: "30px 30px", transition: "stroke-dashoffset 0.3s" }} />
                      <text x="30" y="33" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>{Math.round(pct)}%</text>
                    </svg>
                    <div style={{ fontSize: 11, fontWeight: 700, color: colors.textPrimary, marginTop: 6 }}>{stat.label}</div>
                    <div style={{ fontSize: 10, color: colors.textSecondary, marginTop: 2 }}>{stat.value} {stat.unit}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Watch Auth Modal */}
      {showWatchAuth && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 998, padding: 20 }}>
          <div style={{ background: colors.card, borderRadius: 16, padding: 24, maxWidth: 390, animation: "fadeScale 0.25s ease" }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.textPrimary, marginBottom: 8 }}>Connect Apple Watch</h3>
            <p style={{ fontSize: 13, color: colors.textSecondary, lineHeight: 1.5, marginBottom: 20 }}>Allow access to the following health data:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
              {["Heart Rate", "Steps", "Sleep Hours"].map(perm => (
                <label key={perm} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                  <input type="checkbox" defaultChecked style={{ width: 16, height: 16, cursor: "pointer" }} />
                  <span style={{ fontSize: 13, color: colors.textPrimary }}>{perm}</span>
                </label>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => setShowWatchAuth(false)} style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: `1.5px solid ${colors.border}`, background: colors.card, fontSize: 14, fontWeight: 600, color: colors.textSecondary, cursor: "pointer" }}>{tr("Deny")}</button>
              <button onClick={() => { setWatchConnected(true); setShowWatchAuth(false); onShowToast("Apple Watch connected!", "success"); }} style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: "none", background: colors.primary, color: "#000", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>{tr("Allow")}</button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ SECTION 1: OVERVIEW DASHBOARD ═══ */}
      <div style={{ padding: "0 20px", marginBottom: 16 }}>
        {/* KPI Cards Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
          {[
            { label: "Current Weight", value: `${currentWeight} kg`, sub: `↓ ${(startWeight - currentWeight).toFixed(1)} kg total`, color: colors.primary, icon: TrendingUp, trend: "good" },
            { label: "Workout Rate", value: `${Math.round((workoutStats.thisWeek.done / workoutStats.thisWeek.total) * 100)}%`, sub: `${workoutStats.thisWeek.done}/${workoutStats.thisWeek.total} this week`, color: colors.success, icon: Dumbbell, trend: "good" },
            { label: "Nutrition", value: `${nutritionStats.adherence}%`, sub: `${nutritionStats.streak}-day streak`, color: "#F59E0B", icon: Apple, trend: "good" },
            { label: "Workout Streak", value: `${workoutStats.streak} days`, sub: `Best: ${workoutStats.bestStreak}`, color: "#F97316", icon: Flame, trend: "good" },
          ].map((kpi, i) => (
            <div key={i} style={{ background: colors.card, borderRadius: 14, padding: 14, border: `1px solid ${colors.border}`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -8, right: -8, width: 40, height: 40, borderRadius: "50%", background: `${kpi.color}08` }} />
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                <div style={{ width: 26, height: 26, borderRadius: 7, background: `${kpi.color}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <kpi.icon size={13} color={kpi.color} />
                </div>
                <span style={{ fontSize: 10, fontWeight: 600, color: colors.textMuted }}>{kpi.label}</span>
              </div>
              <div style={{ fontSize: 20, fontWeight: 900, color: colors.textPrimary, letterSpacing: -0.5 }}>{kpi.value}</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: kpi.trend === "good" ? colors.success : colors.error, marginTop: 2 }}>{kpi.sub}</div>
            </div>
          ))}
        </div>

        {/* Weight Goal Progress */}
        <div style={{ background: colors.card, borderRadius: 14, padding: 14, border: `1px solid ${colors.border}`, marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: colors.textPrimary }}>{tr("Weight Goal Progress")}</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: colors.primary }}>{Math.round(((startWeight - currentWeight) / (startWeight - goalWeight)) * 100)}% there</span>
          </div>
          <div style={{ background: colors.surface, borderRadius: 5, height: 8, overflow: "hidden", marginBottom: 6 }}>
            <div style={{ width: `${Math.min(((startWeight - currentWeight) / (startWeight - goalWeight)) * 100, 100)}%`, height: "100%", background: gradients.workout, borderRadius: 5, transition: "width 0.5s ease" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 9, color: colors.textMuted }}>Start: {startWeight} kg</span>
            <span style={{ fontSize: 9, fontWeight: 700, color: colors.primary }}>Now: {currentWeight} kg</span>
            <span style={{ fontSize: 9, color: colors.success }}>Goal: {goalWeight} kg</span>
          </div>
        </div>

        {/* Quick Log Buttons */}
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setShowWeightSheet(true)} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: `1.5px solid ${colors.primary}30`, background: `${colors.primary}06`, fontSize: 12, fontWeight: 700, color: colors.primary, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
            <Plus size={12} /> Log Weight
          </button>
          <button onClick={() => setShowMeasureSheet(true)} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: `1.5px solid ${colors.success}30`, background: `${colors.success}06`, fontSize: 12, fontWeight: 700, color: colors.success, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
            <Plus size={12} /> Log Measurements
          </button>
        </div>
      </div>

      {/* ═══ SECTION 2: CHARTS & TRENDS ═══ */}
      <div style={{ padding: "0 20px", marginBottom: 16 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: colors.textPrimary, marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
          <BarChart2 size={16} color={colors.primary} /> Charts & Trends
        </div>

        {/* Chart Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 12, background: colors.surface, borderRadius: 10, padding: 3 }}>
          {[
            { key: "weight", label: "Weight", icon: TrendingUp },
            { key: "calories", label: "Calories", icon: Flame },
            { key: "macros", label: "Macros", icon: Target },
            { key: "body", label: "Body", icon: User },
          ].map(tab => (
            <button key={tab.key} onClick={() => setActiveChart(tab.key)} style={{
              flex: 1, padding: "7px 4px", borderRadius: 8, border: "none",
              background: activeChart === tab.key ? colors.card : "transparent",
              boxShadow: activeChart === tab.key ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
              fontSize: 10, fontWeight: 700, color: activeChart === tab.key ? colors.primary : colors.textMuted,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 3
            }}>
              <tab.icon size={11} /> {tab.label}
            </button>
          ))}
        </div>

        {/* Weight Chart */}
        {activeChart === "weight" && (
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("Weight Trend")}</span>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 3 }}><div style={{ width: 8, height: 2, background: colors.primary, borderRadius: 1 }} /><span style={{ fontSize: 9, color: colors.textMuted }}>Actual</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: 3 }}><div style={{ width: 8, height: 2, background: colors.success, borderRadius: 1 }} /><span style={{ fontSize: 9, color: colors.textMuted }}>Goal</span></div>
              </div>
            </div>
            {renderLineChart(weightData[timeRange], weightData.labels[timeRange], colors.primary, goalWeight, 71, 77)}
          </div>
        )}

        {/* Calorie Chart */}
        {activeChart === "calories" && (
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>Daily Calories</span>
              <span style={{ fontSize: 10, color: colors.textMuted }}>Target: {calTarget} cal</span>
            </div>
            {renderBarChart(calorieData, calTarget, ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"])}
            <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 11, color: colors.textSecondary }}>Avg: {Math.round(calorieData.reduce((a, b) => a + b) / calorieData.length)} cal</span>
              <span style={{ fontSize: 11, color: colors.textMuted }}>7-day total: {calorieData.reduce((a, b) => a + b).toLocaleString()} cal</span>
            </div>
          </div>
        )}

        {/* Macro Adherence */}
        {activeChart === "macros" && (
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}` }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary, marginBottom: 12 }}>Macro Adherence This Week</div>
            {[
              { name: "Protein", pct: macroAdherence.protein, target: "150g/day", color: "#8B5CF6" },
              { name: "Carbs", pct: macroAdherence.carbs, target: "230g/day", color: "#F59E0B" },
              { name: "Fat", pct: macroAdherence.fat, target: "70g/day", color: "#EF4444" },
            ].map((m, i) => (
              <div key={i} style={{ marginBottom: i < 2 ? 14 : 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: m.color }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{m.name}</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: m.pct >= 80 ? colors.success : colors.warning }}>{m.pct}%</span>
                </div>
                <div style={{ background: colors.surface, borderRadius: 4, height: 8, overflow: "hidden" }}>
                  <div style={{ width: `${m.pct}%`, height: "100%", background: m.color, borderRadius: 4, transition: "width 0.5s ease" }} />
                </div>
                <div style={{ fontSize: 10, color: colors.textMuted, marginTop: 2 }}>Target: {m.target}</div>
              </div>
            ))}
          </div>
        )}

        {/* Body Measurements */}
        {activeChart === "body" && (
          <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}` }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary, marginBottom: 12 }}>{tr("Body Measurements")}</div>
            {measurements.map((m, i) => {
              const change = m.current - m.prev;
              const totalChange = m.current - m.start;
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderTop: i > 0 ? `1px solid ${colors.surface}` : "none" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: m.good ? `${colors.success}10` : `${colors.warning}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: m.good ? colors.success : colors.warning }}>{change > 0 ? "+" : ""}{change}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{m.part}</div>
                    <div style={{ fontSize: 10, color: colors.textMuted }}>{m.start} → {m.current} {m.unit}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: colors.textPrimary }}>{m.current}<span style={{ fontSize: 10, color: colors.textMuted }}> {m.unit}</span></div>
                    <span style={{ fontSize: 9, fontWeight: 600, color: m.good ? colors.success : colors.warning }}>Total: {totalChange > 0 ? "+" : ""}{totalChange} {m.unit}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Progress Photos — 3 photos per date group, collapsible */}
      {(() => {
        const allPhotoSets = [
          { date: "Feb 15", week: "Week 3", labels: ["Front", "Side", "Back"] },
          { date: "Feb 8", week: "Week 2", labels: ["Front", "Side", "Back"] },
          { date: "Feb 1", week: "Week 1", labels: ["Front", "Side", "Back"] },
          { date: "Jan 25", week: "Week 0", labels: ["Front", "Side", "Back"] },
        ];
        const visibleSets = photosExpanded ? allPhotoSets : allPhotoSets.slice(0, 2);
        const hiddenCount = allPhotoSets.length - 2;
        return (
          <div style={{ padding: "0 20px", marginBottom: 16 }}>
            <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}` }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Camera size={14} color={colors.textPrimary} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("Progress Photos")}</span>
                  <span style={{ fontSize: 10, fontWeight: 600, color: colors.textMuted, background: colors.surface, padding: "1px 6px", borderRadius: 6 }}>{allPhotoSets.length} sets</span>
                </div>
                <button style={{ fontSize: 11, fontWeight: 600, color: colors.primary, background: "none", border: "none", cursor: "pointer" }}>+ Upload</button>
              </div>
              {visibleSets.map((group, gi) => (
                <div key={gi} style={{ marginBottom: gi < visibleSets.length - 1 ? 14 : 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                    <Calendar size={12} color={colors.textMuted} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: colors.textSecondary }}>{group.date}</span>
                    <span style={{ fontSize: 10, color: colors.textMuted }}>({group.week})</span>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {group.labels.map((label, li) => (
                      <div key={li} style={{ flex: 1, aspectRatio: "3/4", background: colors.surface, borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, border: `1px solid ${colors.border}`, cursor: "pointer", transition: "all 0.2s" }}>
                        <Camera size={16} color={colors.textMuted} />
                        <span style={{ fontSize: 9, fontWeight: 600, color: colors.textMuted }}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {/* Expand / Collapse toggle */}
              {allPhotoSets.length > 2 && (
                <button onClick={() => setPhotosExpanded(!photosExpanded)}
                  style={{ width: "100%", marginTop: 12, padding: "10px 0", borderRadius: 10, border: `1px solid ${colors.border}`, background: colors.background, fontSize: 12, fontWeight: 600, color: colors.primary, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, transition: "all 0.2s" }}>
                  {photosExpanded ? (
                    <><ChevronUp size={14} /> Show Less</>
                  ) : (
                    <><ChevronDown size={14} /> Show {hiddenCount} More Set{hiddenCount > 1 ? "s" : ""}</>
                  )}
                </button>
              )}
              {/* Add new date group */}
              <div style={{ marginTop: 10, padding: "14px 0", borderRadius: 12, border: `2px dashed ${colors.primary}30`, background: `${colors.primary}04`, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer" }}>
                <Plus size={16} color={colors.primary} />
                <span style={{ fontSize: 12, fontWeight: 700, color: colors.primary }}>Add New Photo Set</span>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ═══ InBody Reports ═══ */}
      <div style={{ padding: "0 20px", marginBottom: 16 }}>
        <div style={{ background: colors.card, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}` }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Activity size={14} color="#8B5CF6" />
              <span style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("InBody Reports")}</span>
              <span style={{ fontSize: 10, fontWeight: 600, color: colors.textMuted, background: colors.surface, padding: "1px 6px", borderRadius: 6 }}>{traineeInbodyReports.length}</span>
            </div>
            <button style={{ fontSize: 11, fontWeight: 600, color: "#8B5CF6", background: "none", border: "none", cursor: "pointer" }}>+ Upload</button>
          </div>
          {(inbodyExpanded ? traineeInbodyReports : traineeInbodyReports.slice(0, 2)).map((report, ri) => (
            <div key={ri} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: report.bg + "30", borderRadius: 10, marginBottom: 8, border: `1px solid ${report.bg}` }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: report.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {report.type === "PDF" ? <FileText size={18} color="#6D28D9" /> : <Image size={18} color="#2563EB" />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: colors.textPrimary }}>{report.label}</div>
                <div style={{ fontSize: 10, color: colors.textMuted }}>{report.date} · {report.type}</div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <button style={{ width: 28, height: 28, borderRadius: 7, background: colors.surface, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <Eye size={13} color={colors.textSecondary} />
                </button>
                <button style={{ width: 28, height: 28, borderRadius: 7, background: colors.surface, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <Download size={13} color={colors.textSecondary} />
                </button>
              </div>
            </div>
          ))}
          {traineeInbodyReports.length > 2 && (
            <button onClick={() => setInbodyExpanded(!inbodyExpanded)}
              style={{ width: "100%", marginTop: 4, padding: "10px 0", borderRadius: 10, border: `1px solid ${colors.border}`, background: colors.background, fontSize: 12, fontWeight: 600, color: "#8B5CF6", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              {inbodyExpanded ? <><ChevronUp size={14} /> Show Less</> : <><ChevronDown size={14} /> Show {traineeInbodyReports.length - 2} More</>}
            </button>
          )}
          {/* Upload new InBody */}
          <div style={{ marginTop: 10, padding: "14px 0", borderRadius: 12, border: `2px dashed #8B5CF630`, background: "#8B5CF604", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer" }}>
            <Upload size={16} color="#8B5CF6" />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#8B5CF6" }}>Upload InBody Report</span>
          </div>
        </div>
      </div>

      {/* ═══ SECTION 3: MILESTONES & ACHIEVEMENTS ═══ */}
      <div style={{ padding: "0 20px", marginBottom: 16 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: colors.textPrimary, marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
          <Award size={16} color="#F59E0B" /> Milestones & Achievements
        </div>

        {/* Earned Badges */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 8 }}>Earned ({earnedBadges.length})</div>
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
            {earnedBadges.map(b => {
              return (
              <div key={b.id} onClick={() => setShowBadgeDetail(showBadgeDetail === b.id ? null : b.id)}
                style={{
                  minWidth: 84, borderRadius: 16, padding: "14px 8px", textAlign: "center", cursor: "pointer", position: "relative", flexShrink: 0,
                  background: b.tier === "gold" ? "linear-gradient(145deg, #FFFBEB, #FEF3C7)" : b.tier === "silver" ? "linear-gradient(145deg, #F8FAFC, #F1F5F9)" : colors.card,
                  border: `1.5px solid ${b.tier === "gold" ? "#FBBF2440" : b.tier === "silver" ? "#94A3B830" : colors.border}`,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                }}>
                <div style={{ marginBottom: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ModernBadgeIcon type={b.icon} size={40} earned={true} tier={b.tier} />
                </div>
                <div style={{ fontSize: 9, fontWeight: 700, color: colors.textPrimary, lineHeight: 1.2 }}>{b.name}</div>
                <div style={{ fontSize: 8, color: tierColors[b.tier], fontWeight: 700, marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                  {b.tier === "gold" && <Star size={6} color={tierColors.gold} fill={tierColors.gold} />}{b.date}
                </div>
                {showBadgeDetail === b.id && (
                  <div style={{ position: "absolute", bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", background: colors.textPrimary, color: "#fff", padding: "8px 12px", borderRadius: 10, fontSize: 10, whiteSpace: "nowrap", zIndex: 10, boxShadow: "0 4px 12px rgba(0,0,0,0.2)", animation: "fadeScale 0.2s ease" }}>
                    {b.criteria}
                    <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `5px solid ${colors.textPrimary}` }} />
                  </div>
                )}
              </div>
            );
            })}
          </div>
        </div>

        {/* Locked Badges */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 8 }}>In Progress ({lockedBadges.length})</div>
          {lockedBadges.map(b => {
            return (
            <div key={b.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: colors.card, borderRadius: 12, border: `1px solid ${colors.border}`, marginBottom: 8 }}>
              <ModernBadgeIcon type={b.icon} size={40} earned={false} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{b.name}</div>
                <div style={{ fontSize: 11, color: colors.textSecondary }}>{b.desc}</div>
                <div style={{ marginTop: 4, background: colors.surface, borderRadius: 3, height: 4, overflow: "hidden" }}>
                  <div style={{ width: `${(b.progress / b.total) * 100}%`, height: "100%", background: colors.primary, borderRadius: 3 }} />
                </div>
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: colors.primary }}>{b.progress}/{b.total}</span>
            </div>
            );
            })}
        </div>
      </div>

      {/* ═══ SECTION 4: COMPARE / INSIGHTS ═══ */}
      <div style={{ padding: "0 20px", marginBottom: 16 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: colors.textPrimary, marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
          <ArrowUpDown size={16} color="#8B5CF6" /> Weekly Comparison
        </div>
        <div style={{ background: colors.card, borderRadius: 16, padding: 14, border: `1px solid ${colors.border}` }}>
          <div style={{ display: "flex", padding: "0 0 8px", borderBottom: `1px solid ${colors.surface}`, marginBottom: 4 }}>
            <span style={{ flex: 2, fontSize: 10, fontWeight: 700, color: colors.textMuted }}>Metric</span>
            <span style={{ flex: 1, fontSize: 10, fontWeight: 700, color: colors.textMuted, textAlign: "center" }}>{tr("This Week")}</span>
            <span style={{ flex: 1, fontSize: 10, fontWeight: 700, color: colors.textMuted, textAlign: "center" }}>Last Week</span>
            <span style={{ width: 40, fontSize: 10, fontWeight: 700, color: colors.textMuted, textAlign: "right" }}>{tr("Change")}</span>
          </div>
          {weekComparison.map((row, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", padding: "8px 0", borderBottom: i < weekComparison.length - 1 ? `1px solid ${colors.surface}` : "none" }}>
              <span style={{ flex: 2, fontSize: 12, fontWeight: 600, color: colors.textPrimary }}>{row.metric}</span>
              <span style={{ flex: 1, fontSize: 12, fontWeight: 700, color: colors.textPrimary, textAlign: "center" }}>{row.thisWeek}</span>
              <span style={{ flex: 1, fontSize: 12, color: colors.textSecondary, textAlign: "center" }}>{row.lastWeek}</span>
              <div style={{ width: 40, textAlign: "right" }}>
                <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4, background: row.trend === "up" ? `${colors.success}12` : `${colors.warning}12`, color: row.trend === "up" ? colors.success : colors.warning }}>
                  {row.trend === "up" ? "↑" : "↓"} {Math.abs(row.pctChange)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ SECTION 5: FEEDBACK / REFLECTION ═══ */}
      <div style={{ padding: "0 20px", marginBottom: 20 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: colors.textPrimary, marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
          <MessageSquare size={16} color={colors.primary} /> Coach Feedback
        </div>

        {/* Coach Comments */}
        {coachComments.map((c, i) => (
          <div key={i} style={{ padding: "12px 14px", background: c.type === "praise" ? `${colors.success}06` : `${colors.primary}06`, borderRadius: 12, border: `1px solid ${c.type === "praise" ? colors.success : colors.primary}15`, marginBottom: 8, display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: c.type === "praise" ? `${colors.success}15` : `${colors.primary}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {c.type === "praise" ? <Star size={14} color={colors.success} /> : <HelpCircle size={14} color={colors.primary} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: colors.textSecondary, lineHeight: 1.5 }}>{c.text}</div>
              <div style={{ fontSize: 10, color: colors.textMuted, marginTop: 4 }}>Coach Mike · {c.date}</div>
            </div>
          </div>
        ))}

        {/* Self-Reflection */}
        <div style={{ background: colors.card, borderRadius: 14, padding: 14, border: `1px solid ${colors.border}`, marginTop: 8 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: colors.textPrimary, marginBottom: 8 }}>Weekly Reflection</div>
          <textarea value={reflectionNote} onChange={e => setReflectionNote(e.target.value)}
            placeholder="How do you feel about your progress this week? What will you focus on next?"
            rows={3}
            style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: `1.5px solid ${colors.border}`, fontSize: 13, fontFamily: "inherit", resize: "none", outline: "none", boxSizing: "border-box" }}
          />
          {reflectionNote && (
            <button onClick={() => { onShowToast("Reflection saved", "success"); }} style={{ marginTop: 8, padding: "8px 16px", borderRadius: 8, border: "none", background: colors.primary, color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
              Save Reflection
            </button>
          )}
        </div>

        {/* Encouragement */}
        <div style={{ marginTop: 12, padding: "14px 16px", background: gradients.workout, borderRadius: 14, textAlign: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>You're doing great, Sarah!</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>Down {(startWeight - currentWeight).toFixed(1)} kg in 6 weeks — {Math.round(((startWeight - currentWeight) / (startWeight - goalWeight)) * 100)}% to your goal!</div>
        </div>
      </div>

      {/* ═══ BOTTOM SHEETS ═══ */}
      {showWeightSheet && (
        <BottomSheet title="Log Today's Weight" onClose={() => setShowWeightSheet(false)}>
          <div style={{ fontSize: 13, color: colors.textSecondary, marginBottom: 16 }}>Last entry: 75.0 kg (Feb 8)</div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Today's weight (kg)</div>
            <input defaultValue="74.5" style={{ width: "100%", height: 52, borderRadius: 12, border: `1.5px solid ${colors.border}`, textAlign: "center", fontSize: 24, fontWeight: 800, color: colors.textPrimary, outline: "none", boxSizing: "border-box" }} />
          </div>
          <div style={{ background: colors.successLight, borderRadius: 12, padding: "10px 14px", marginBottom: 20, fontSize: 13, color: colors.success }}>0.5 kg down from last week. Great progress!</div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => setShowWeightSheet(false)} style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: `1.5px solid ${colors.border}`, background: "#fff", color: colors.textSecondary, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>{tr("Cancel")}</button>
            <button onClick={() => { setShowWeightSheet(false); onShowToast("Weight logged", "success"); }} style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: "none", background: colors.primary, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>{tr("Log Weight")}</button>
          </div>
        </BottomSheet>
      )}

      {showMeasureSheet && (
        <BottomSheet title="Log Measurements" onClose={() => setShowMeasureSheet(false)}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
            {measurements.map((m, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: colors.textSecondary, width: 60 }}>{m.part}</span>
                <input defaultValue={m.current} style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: `1.5px solid ${colors.border}`, fontSize: 14, textAlign: "center", outline: "none", boxSizing: "border-box" }} />
                <span style={{ fontSize: 12, color: colors.textMuted }}>{m.unit}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => setShowMeasureSheet(false)} style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: `1.5px solid ${colors.border}`, background: "#fff", color: colors.textSecondary, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>{tr("Cancel")}</button>
            <button onClick={() => { setShowMeasureSheet(false); onShowToast("Measurements logged", "success"); }} style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: "none", background: colors.primary, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>{tr("Save")}</button>
          </div>
        </BottomSheet>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// TRAINEE CHAT TAB
// ═══════════════════════════════════════════════════════

function TraineeChat({ onBack, onShowToast }) {
  const [msg, setMsg] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [showAttach, setShowAttach] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showImagePreview, setShowImagePreview] = useState(null);
  const [sendingState, setSendingState] = useState(null); // null | sending | sent | failed
  const [offlineMode, setOfflineMode] = useState(false);
  const [showCoachInfo, setShowCoachInfo] = useState(false);
  const messagesEndRef = useRef(null);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // Assigned coach data (1:1 relationship — each trainee has one coach)
  const coach = {
    name: "Coach Mike", avatar: "M", status: "online", lastActive: "Active now",
    specialty: "Strength & Conditioning", rating: 4.9, clients: 18, experience: "8 years",
    bio: "Certified personal trainer specializing in strength training and body recomposition. Let's crush your goals!"
  };

  // Direct chat messages with assigned coach
  const [messages, setMessages] = useState([
    { id: 1, from: "coach", text: "Welcome aboard! 🎉 I'm Coach Mike and I'll be guiding you on your fitness journey. Feel free to ask me anything — workouts, nutrition, recovery, you name it.", time: "Mon 9:00 AM", date: "Monday", status: "read", type: "text" },
    { id: 2, from: "trainee", text: "Thanks Coach! Excited to get started. I want to focus on losing weight and building muscle.", time: "Mon 9:15 AM", date: "Monday", status: "read", type: "text" },
    { id: 3, from: "coach", text: "Great goals! I've built your first workout plan. Check the Workout tab — we're starting with a 4-day upper/lower split. Trust the process!", time: "Mon 9:20 AM", date: "Monday", status: "read", type: "text" },
    { id: 4, from: "coach", text: "", time: "Mon 9:21 AM", date: "Monday", status: "read", type: "attachment", fileName: "Training_Plan_Week1.pdf", fileSize: "312 KB" },
    { id: 5, from: "trainee", text: "This looks solid. Quick question — is it okay to do cardio on rest days?", time: "Mon 10:00 AM", date: "Monday", status: "read", type: "text" },
    { id: 6, from: "coach", text: "Absolutely! Light cardio like walking or cycling for 20-30 min on rest days is perfect for recovery. Just avoid high intensity.", time: "Mon 10:05 AM", date: "Monday", status: "read", type: "text" },
    { id: 7, from: "trainee", text: "Completed Day 1! Squats felt heavy but managed all sets 💪", time: "Tue 6:30 PM", date: "Tuesday", status: "read", type: "text" },
    { id: 8, from: "coach", text: "Amazing work! Your form in the video looked great. One tip: try to slow down the descent on squats — aim for a 3-second negative. It'll improve strength and control.", time: "Tue 7:00 PM", date: "Tuesday", status: "read", type: "text" },
    { id: 9, from: "trainee", text: "", time: "Wed 12:30 PM", date: "Wednesday", status: "read", type: "image", imageUrl: "meal-prep.jpg", caption: "Meal prep Sunday results! 🥗" },
    { id: 10, from: "coach", text: "Love the meal prep! Protein portions look great. Maybe add a handful more veggies to the lunch containers — they'll help keep you full.", time: "Wed 1:00 PM", date: "Wednesday", status: "read", type: "text" },
    { id: 11, from: "coach", text: "", time: "Thu 9:00 AM", date: "Thursday", status: "read", type: "image", imageUrl: "form-tip.jpg", caption: "Resistance band knee tracking drill — try this in your warm-up" },
    { id: 12, from: "trainee", text: "That band drill was a game changer! My knees tracked way better today.", time: "Thu 6:45 PM", date: "Thursday", status: "read", type: "text" },
    { id: 13, from: "coach", text: "Glad to hear it! Your body awareness is improving fast. Keep it up!", time: "Thu 7:00 PM", date: "Thursday", status: "read", type: "text" },
    { id: 14, from: "coach", text: "How's the nutrition going this week? Are you hitting your protein targets?", time: "Today 9:00 AM", date: "Today", status: "delivered", type: "text" },
    { id: 15, from: "coach", text: "Also, I've tweaked your next week's program — added some extra hamstring work based on your feedback. Check it when you're ready!", time: "Today 9:05 AM", date: "Today", status: "delivered", type: "text" },
  ]);

  const emojiList = ["💪", "🔥", "👍", "👏", "❤️", "😊", "🎯", "⭐", "✅", "🏋️", "🥗", "💧", "😤", "🙏", "📸", "🎉"];

  const quickReplies = ["Thanks coach!", "Got it 👍", "I'll try that", "Question about form", "Can we adjust my plan?", "Feeling great today!"];

  // Scroll to latest on mount and new messages
  useEffect(() => {
    setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  }, [messages.length]);

  // Simulate typing indicator
  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 2500);
  };

  // Send message (direct to assigned coach)
  const sendMessage = (text, type = "text", extra = {}) => {
    const content = text || msg;
    if (!content.trim() && type === "text") return;

    setSendingState("sending");
    const newMsg = {
      id: Date.now(), from: "trainee", text: content, time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      date: "Today", status: "sending", type, ...extra
    };

    setMessages(prev => [...prev, newMsg]);
    setMsg("");
    setShowEmoji(false);

    // Simulate send → delivered → read lifecycle
    setTimeout(() => {
      setSendingState("sent");
      updateMsgStatus(newMsg.id, "sent");
      setTimeout(() => {
        updateMsgStatus(newMsg.id, "delivered");
        setTimeout(() => {
          updateMsgStatus(newMsg.id, "read");
          setSendingState(null);
          // Simulate coach typing sometimes
          if (Math.random() > 0.5) simulateTyping();
        }, 2000);
      }, 1500);
    }, 800);
  };

  const updateMsgStatus = (msgId, status) => {
    setMessages(prev => prev.map(m => m.id === msgId ? { ...m, status } : m));
  };

  const retryMessage = (msgId) => {
    updateMsgStatus(msgId, "sending");
    setTimeout(() => {
      updateMsgStatus(msgId, "sent");
      setTimeout(() => updateMsgStatus(msgId, "delivered"), 1000);
    }, 800);
    onShowToastr("Resending message...");
  };

  const deleteMessage = (msgId) => {
    setMessages(prev => prev.map(m => m.id === msgId ? { ...m, type: "deleted", text: "Message removed" } : m));
    onShowToastr("Message deleted");
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    onShowToast(isMuted ? "Notifications unmuted" : "Notifications muted");
  };

  // Status indicator color
  const statusColor = (s) => s === "online" ? colors.success : s === "away" ? colors.warning : colors.textMuted;

  // Message status icon
  const renderStatus = (status) => {
    if (status === "sending") return <span style={{ fontSize: 10, color: colors.textMuted }}>⏳</span>;
    if (status === "sent") return <Check size={12} color={colors.textMuted} />;
    if (status === "delivered") return <span style={{ display: "flex" }}><Check size={12} color={colors.textMuted} /><Check size={12} color={colors.textMuted} style={{ marginLeft: -7 }} /></span>;
    if (status === "read") return <span style={{ display: "flex" }}><Check size={12} color={colors.primary} /><Check size={12} color={colors.primary} style={{ marginLeft: -7 }} /></span>;
    if (status === "failed") return <AlertTriangle size={12} color={colors.error} />;
    return null;
  };

  // Group messages by date for rendering
  const groupedByDate = {};
  messages.forEach(m => {
    if (!groupedByDate[m.date]) groupedByDate[m.date] = [];
    groupedByDate[m.date].push(m);
  });

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* ── Chat Header ── */}
      <div style={{
        padding: "8px 16px", display: "flex", alignItems: "center", gap: 10,
        background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${colors.border}40`, flexShrink: 0
      }}>
        <button onClick={onBack}
          style={{ background: colors.surface, border: "none", borderRadius: 10, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <ChevronLeft size={18} color={colors.textPrimary} />
        </button>

        {/* Coach Info — Direct 1:1 */}
        <div onClick={() => setShowCoachInfo(!showCoachInfo)} style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0, cursor: "pointer" }}>
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 12, background: gradients.workout,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 800, color: "#fff"
            }}>
              {coach.avatar}
            </div>
            <div style={{
              position: "absolute", bottom: -1, right: -1, width: 12, height: 12, borderRadius: "50%",
              background: statusColor(coach.status), border: "2px solid #fff"
            }} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{coach.name}</div>
            <div style={{ fontSize: 10, color: coach.status === "online" ? colors.success : colors.textMuted, fontWeight: 600 }}>
              {coach.status === "online" ? "Online" : coach.lastActive}
            </div>
          </div>
        </div>

        {/* Header Actions */}
        <button onClick={toggleMute} style={{ background: "none", border: "none", cursor: "pointer", padding: 6 }}>
          {isMuted ? <span style={{ fontSize: 16 }}>🔇</span> : <Bell size={18} color={colors.textSecondary} />}
        </button>
        <button onClick={() => setShowCoachInfo(!showCoachInfo)} style={{ background: "none", border: "none", cursor: "pointer", padding: 6 }}>
          <MoreVertical size={18} color={colors.textSecondary} />
        </button>
      </div>

      {/* ── Messages Area ── */}
      <div ref={scrollRef} style={{
        flex: 1, overflowY: "auto", padding: "12px 16px",
        background: `linear-gradient(180deg, ${colors.surface}40 0%, #fff 100%)`
      }}>
        {/* Empty state */}
        {messages.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <div style={{
              width: 60, height: 60, borderRadius: "50%", background: `${colors.primary}10`,
              display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px"
            }}>
              <MessageSquare size={24} color={colors.primary} />
            </div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: colors.textPrimary, marginBottom: 4 }}>{tr("Start your conversation!")}</h3>
            <p style={{ fontSize: 12, color: colors.textSecondary, lineHeight: 1.5, marginBottom: 16 }}>
              Say hello to {coach.name}. Ask questions about your workouts, nutrition, or progress.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
              {["Hi Coach! 👋", "I have a question", "About my workout plan"].map(q => (
                <button key={q} onClick={() => sendMessage(q)} style={{
                  padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${colors.primary}30`,
                  background: `${colors.primary}06`, fontSize: 12, fontWeight: 600, color: colors.primary, cursor: "pointer"
                }}>{q}</button>
              ))}
            </div>
          </div>
        )}

        {/* Date-grouped messages */}
        {Object.entries(groupedByDate).map(([date, msgs]) => (
          <div key={date}>
            {/* Date Divider */}
            <div style={{ textAlign: "center", margin: "16px 0 12px", position: "relative" }}>
              <div style={{ position: "absolute", left: 0, right: 0, top: "50%", borderBottom: `1px solid ${colors.border}30` }} />
              <span style={{
                position: "relative", background: "#fff", padding: "0 12px",
                fontSize: 10, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.5
              }}>{date}</span>
            </div>

            {/* Messages */}
            {msgs.map((m, mi) => {
              const isMe = m.from === "trainee";
              const isDeleted = m.type === "deleted";
              const isFailed = m.status === "failed";

              return (
                <div
                  key={m.id}
                  style={{
                    display: "flex", flexDirection: "column",
                    alignItems: isMe ? "flex-end" : "flex-start",
                    marginBottom: 8, animation: `slideUp 0.2s ease ${mi * 0.03}s both`
                  }}
                >
                  {/* Deleted message */}
                  {isDeleted ? (
                    <div style={{
                      padding: "8px 14px", borderRadius: 14, background: colors.surface,
                      fontSize: 12, color: colors.textMuted, fontStyle: "italic", display: "flex", alignItems: "center", gap: 6
                    }}>
                      <X size={12} /> Message removed
                    </div>
                  ) : m.type === "image" ? (
                    /* Image message */
                    <div style={{ maxWidth: "75%" }}>
                      <div
                        onClick={() => setShowImagePreview(m)}
                        style={{
                          borderRadius: 16, overflow: "hidden", cursor: "pointer",
                          border: `1px solid ${colors.border}40`,
                          borderBottomRightRadius: isMe ? 4 : 16,
                          borderBottomLeftRadius: isMe ? 16 : 4
                        }}
                      >
                        <div style={{
                          width: 200, height: 150, background: isMe ? `${colors.primary}15` : colors.surface,
                          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6
                        }}>
                          <Image size={28} color={isMe ? colors.primary : colors.textSecondary} />
                          <span style={{ fontSize: 10, color: colors.textMuted, display: "inline-flex", alignItems: "center", gap: 2 }}><Camera size={9} /> Photo</span>
                        </div>
                        {m.caption && (
                          <div style={{ padding: "8px 12px", background: isMe ? colors.primary : colors.card, fontSize: 12, color: isMe ? "#fff" : colors.textPrimary }}>
                            {m.caption}
                          </div>
                        )}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 3, justifyContent: isMe ? "flex-end" : "flex-start" }}>
                        <span style={{ fontSize: 9, color: colors.textMuted }}>{m.time}</span>
                        {isMe && renderStatus(m.status)}
                      </div>
                    </div>
                  ) : m.type === "attachment" ? (
                    /* File attachment */
                    <div style={{ maxWidth: "75%" }}>
                      <div style={{
                        padding: "10px 14px", borderRadius: 16, display: "flex", alignItems: "center", gap: 10,
                        background: isMe ? colors.primary : colors.card,
                        border: isMe ? "none" : `1px solid ${colors.border}40`,
                        borderBottomRightRadius: isMe ? 4 : 16,
                        borderBottomLeftRadius: isMe ? 16 : 4,
                        cursor: "pointer"
                      }}>
                        <div style={{
                          width: 36, height: 36, borderRadius: 10,
                          background: isMe ? "rgba(255,255,255,0.2)" : `${colors.primary}10`,
                          display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                          <FileText size={16} color={isMe ? "#fff" : colors.primary} />
                        </div>
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 600, color: isMe ? "#fff" : colors.textPrimary }}>{m.fileName}</div>
                          <div style={{ fontSize: 10, color: isMe ? "rgba(255,255,255,0.7)" : colors.textMuted }}>{m.fileSize}</div>
                        </div>
                        <Download size={14} color={isMe ? "#fff" : colors.primary} style={{ marginLeft: "auto" }} />
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 3, justifyContent: isMe ? "flex-end" : "flex-start" }}>
                        <span style={{ fontSize: 9, color: colors.textMuted }}>{m.time}</span>
                        {isMe && renderStatus(m.status)}
                      </div>
                    </div>
                  ) : (
                    /* Text message */
                    <div style={{ maxWidth: "80%" }}>
                      <div style={{
                        padding: "10px 14px", borderRadius: 16,
                        background: isMe ? colors.primary : colors.card,
                        color: isMe ? "#fff" : colors.textPrimary,
                        border: isMe ? "none" : `1px solid ${colors.border}40`,
                        borderBottomRightRadius: isMe ? 4 : 16,
                        borderBottomLeftRadius: isMe ? 16 : 4,
                        fontSize: 13, lineHeight: 1.5, wordBreak: "break-word",
                        boxShadow: isMe ? "0 2px 8px rgba(52,211,153,0.15)" : "0 1px 4px rgba(0,0,0,0.04)"
                      }}>
                        {m.text}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 3, justifyContent: isMe ? "flex-end" : "flex-start" }}>
                        <span style={{ fontSize: 9, color: colors.textMuted }}>{m.time}</span>
                        {isMe && renderStatus(m.status)}
                        {isFailed && (
                          <button onClick={() => retryMessage(m.id)} style={{
                            background: "none", border: "none", fontSize: 10, color: colors.error,
                            cursor: "pointer", fontWeight: 600, display: "flex", alignItems: "center", gap: 2
                          }}>
                            <RefreshCw size={10} /> Retry
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8, animation: "slideUp 0.2s ease" }}>
            <div style={{
              padding: "10px 16px", borderRadius: 16, borderBottomLeftRadius: 4,
              background: colors.card, border: `1px solid ${colors.border}40`,
              display: "flex", alignItems: "center", gap: 4
            }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: 7, height: 7, borderRadius: "50%", background: colors.textMuted,
                  animation: `typingDot 1.2s ease-in-out ${i * 0.2}s infinite`
                }} />
              ))}
            </div>
          </div>
        )}

        {/* Offline Banner */}
        {offlineMode && (
          <div style={{
            display: "flex", alignItems: "center", gap: 8, padding: "8px 12px",
            background: colors.warningLight, borderRadius: 10, margin: "8px 0",
            fontSize: 11, fontWeight: 600, color: "#92400E"
          }}>
            <Wifi size={14} /> Unable to send messages. Check your connection.
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* ── Quick Replies ── */}
      {messages.length > 0 && (
        <div style={{ padding: "6px 16px 0", display: "flex", gap: 6, overflowX: "auto", flexShrink: 0 }}>
          {quickReplies.slice(0, 4).map(qr => (
            <button key={qr} onClick={() => sendMessage(qr)} style={{
              padding: "5px 12px", borderRadius: 16, border: `1.5px solid ${colors.primary}20`,
              background: `${colors.primary}04`, fontSize: 11, fontWeight: 600, color: colors.primary,
              cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0
            }}>{qr}</button>
          ))}
        </div>
      )}

      {/* ── Emoji Picker ── */}
      {showEmoji && (
        <div style={{
          padding: "10px 16px", background: colors.card, borderTop: `1px solid ${colors.border}40`,
          display: "flex", flexWrap: "wrap", gap: 4, animation: "slideUp 0.2s ease", flexShrink: 0
        }}>
          {emojiList.map(e => (
            <button key={e} onClick={() => setMsg(prev => prev + e)} style={{
              width: 36, height: 36, borderRadius: 8, border: "none", background: colors.surface,
              fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
            }}>{e}</button>
          ))}
        </div>
      )}

      {/* ── Attachment Options ── */}
      {showAttach && (
        <div style={{
          padding: "10px 16px", background: colors.card, borderTop: `1px solid ${colors.border}40`,
          display: "flex", gap: 10, animation: "slideUp 0.2s ease", flexShrink: 0
        }}>
          {[
            { icon: Camera, label: "Camera", color: "#8B5CF6", bg: "#EDE9FE" },
            { icon: Image, label: "Photo", color: "#059669", bg: "#D1FAE5" },
            { icon: FileText, label: "File", color: "#F59E0B", bg: "#FEF3C7" },
            { icon: Clipboard, label: "Workout Log", color: colors.primary, bg: colors.primaryLight },
          ].map(att => (
            <button key={att.label} onClick={() => {
              if (att.label === "Photo" || att.label === "Camera") {
                sendMessage("", "image", { imageUrl: "uploaded-photo.jpg", caption: "" });
                setShowAttach(false);
                onShowToastr("Photo sent!");
              } else if (att.label === "File") {
                sendMessage("", "attachment", { fileName: "workout-log.pdf", fileSize: "128 KB" });
                setShowAttach(false);
                onShowToastr("File sent!");
              } else {
                sendMessage("", "attachment", { fileName: "Weekly-Workout-Summary.pdf", fileSize: "85 KB" });
                setShowAttach(false);
                onShowToastr("Workout log shared!");
              }
            }} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
              background: "none", border: "none", cursor: "pointer", flex: 1
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, background: att.bg,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <att.icon size={22} color={att.color} />
              </div>
              <span style={{ fontSize: 10, fontWeight: 600, color: colors.textSecondary }}>{att.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* ── Message Input ── */}
      <div style={{
        padding: "10px 16px 12px", display: "flex", alignItems: "flex-end", gap: 8,
        background: "rgba(255,255,255,0.98)", backdropFilter: "blur(12px)",
        borderTop: `1px solid ${colors.border}40`, flexShrink: 0
      }}>
        {/* Attachment Button */}
        <button onClick={() => { setShowAttach(!showAttach); setShowEmoji(false); }} style={{
          width: 36, height: 36, borderRadius: 10, border: "none",
          background: showAttach ? `${colors.primary}15` : colors.surface,
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0
        }}>
          <Plus size={20} color={showAttach ? colors.primary : colors.textSecondary} style={{ transform: showAttach ? "rotate(45deg)" : "none", transition: "transform 0.2s" }} />
        </button>

        {/* Text Input */}
        <div style={{ flex: 1, position: "relative" }}>
          <input
            ref={inputRef}
            value={msg} onChange={e => setMsg(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
            placeholder="Type a message..."
            style={{
              width: "100%", height: 40, borderRadius: 20, border: `1.5px solid ${colors.border}`,
              paddingLeft: 16, paddingRight: 40, fontSize: 13, outline: "none", boxSizing: "border-box",
              background: colors.card, transition: "border-color 0.2s"
            }}
          />
          {/* Emoji Toggle */}
          <button onClick={() => { setShowEmoji(!showEmoji); setShowAttach(false); }} style={{
            position: "absolute", right: 8, top: 8, background: "none", border: "none", cursor: "pointer"
          }}>
            <span style={{ fontSize: 20, opacity: showEmoji ? 1 : 0.5 }}>😊</span>
          </button>
        </div>

        {/* Send Button */}
        <button
          onClick={() => sendMessage()}
          disabled={!msg.trim()}
          style={{
            width: 40, height: 40, borderRadius: "50%", border: "none",
            background: msg.trim() ? colors.primary : colors.surface,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: msg.trim() ? "pointer" : "default", flexShrink: 0,
            transition: "all 0.2s", boxShadow: msg.trim() ? "0 4px 12px rgba(52,211,153,0.3)" : "none",
            transform: sendingState === "sending" ? "scale(0.9)" : "scale(1)"
          }}
        >
          {sendingState === "sending" ? (
            <div style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.6s linear infinite" }} />
          ) : (
            <Send size={18} color={msg.trim() ? "#fff" : colors.textMuted} style={{ marginLeft: 2 }} />
          )}
        </button>
      </div>

      {/* ── Coach Info Panel ── */}
      {showCoachInfo && (
        <div style={{
          position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "flex-end", zIndex: 998
        }} onClick={() => setShowCoachInfo(false)}>
          <div onClick={e => e.stopPropagation()} style={{
            width: "100%", maxHeight: "65%", background: "#fff", borderRadius: "20px 20px 0 0",
            padding: "20px 20px 32px", animation: "slideUp 0.3s ease"
          }}>
            <div style={{ width: 36, height: 4, borderRadius: 2, background: colors.border, margin: "0 auto 20px" }} />
            {/* Coach Profile Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 18, background: gradients.workout,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, fontWeight: 800, color: "#fff"
              }}>{coach.avatar}</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 800, color: colors.textPrimary }}>{coach.name}</div>
                <div style={{ fontSize: 12, color: colors.textSecondary }}>{coach.specialty}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: statusColor(coach.status) }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: coach.status === "online" ? colors.success : colors.textMuted }}>
                    {coach.status === "online" ? "Online" : coach.lastActive}
                  </span>
                </div>
              </div>
            </div>
            {/* Coach Bio */}
            <p style={{ fontSize: 13, color: colors.textSecondary, lineHeight: 1.6, marginBottom: 16 }}>{coach.bio}</p>
            {/* Stats */}
            <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
              {[
                { label: "Rating", value: coach.rating, isRating: true },
                { label: "Clients", value: coach.clients },
                { label: "Experience", value: coach.experience },
              ].map(s => (
                <div key={s.label} style={{ flex: 1, textAlign: "center", padding: 10, background: colors.surface, borderRadius: 10 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: colors.textPrimary, display: "flex", alignItems: "center", justifyContent: "center", gap: 3 }}>
                    {s.isRating ? <><Star size={13} color="#F59E0B" fill="#F59E0B" />{s.value}</> : s.value}
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: colors.textMuted, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
            {/* Actions */}
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => { toggleMute(); setShowCoachInfo(false); }} style={{
                flex: 1, padding: "12px 0", borderRadius: 12, border: `1.5px solid ${colors.border}`,
                background: "#fff", fontSize: 13, fontWeight: 600, color: colors.textSecondary, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6
              }}>
                {isMuted ? <Bell size={15} /> : <BellOff size={15} />} {isMuted ? "Unmute" : "Mute"}
              </button>
              <button onClick={() => setShowCoachInfo(false)} style={{
                flex: 1, padding: "12px 0", borderRadius: 12, border: "none",
                background: colors.primary, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer"
              }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Image Preview Modal ── */}
      {showImagePreview && (
        <div style={{
          position: "absolute", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", zIndex: 999, animation: "fadeScale 0.2s ease"
        }}>
          <button onClick={() => setShowImagePreview(null)} style={{
            position: "absolute", top: 20, right: 20, width: 36, height: 36, borderRadius: "50%",
            background: "rgba(255,255,255,0.15)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
          }}>
            <X size={20} color="#fff" />
          </button>
          <div style={{
            width: 280, height: 280, background: "rgba(255,255,255,0.1)", borderRadius: 16,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12
          }}>
            <Image size={48} color="rgba(255,255,255,0.5)" />
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{showImagePreview.caption || "Photo"}</span>
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 20 }}>
            <button style={{ padding: "8px 20px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.3)", background: "transparent", color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              <Download size={14} /> Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// UPGRADE MODAL (FREEMIUM)
// ═══════════════════════════════════════════════════════

function UpgradeModal({ onClose, onUpgrade }) {
  return (
    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999, padding: 20 }}>
      <div style={{
        width: "100%", maxWidth: 400, background: "#fff", borderRadius: 24, overflow: "hidden",
        animation: "fadeScale 0.3s ease", boxShadow: "0 25px 60px rgba(0,0,0,0.25)"
      }}>
        {/* Premium Header */}
        <div style={{
          background: "linear-gradient(135deg, #7C3AED, #34D399, #2563EB)", padding: "28px 24px 20px",
          textAlign: "center", position: "relative", overflow: "hidden"
        }}>
          <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
          <div style={{ position: "absolute", bottom: -15, left: -15, width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

          <div style={{
            width: 56, height: 56, borderRadius: 16, background: "rgba(255,255,255,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px",
            backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)"
          }}>
            <Users size={26} color="#fff" />
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 4 }}>{tr("Upgrade to Pro")}</h2>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>Grow your coaching business</p>
        </div>

        {/* Content */}
        <div style={{ padding: "20px 24px 24px" }}>
          {/* Limit Warning */}
          <div style={{
            padding: "12px 14px", borderRadius: 12, background: `${colors.warning}08`,
            border: `1.5px solid ${colors.warning}20`, marginBottom: 16,
            display: "flex", alignItems: "center", gap: 10
          }}>
            <AlertTriangle size={18} color={colors.warning} style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("Client limit reached")}</div>
              <div style={{ fontSize: 11, color: colors.textSecondary, marginTop: 2 }}>
                You've reached your 3 free client spots. Upgrade to add unlimited clients.
              </div>
            </div>
          </div>

          {/* Pro Features */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }}>Pro includes</div>
            {[
              { icon: "users", text: "Unlimited clients" },
              { icon: "analytics", text: "Advanced analytics & progress reports" },
              { icon: "target", text: "Custom exercise library & templates" },
              { icon: "chat", text: "Priority support & coach community" },
              { icon: "phone", text: "White-label branding options" },
            ].map((f, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10, padding: "8px 0",
                borderBottom: i < 4 ? `1px solid ${colors.border}30` : "none",
                animation: `slideUp 0.3s ease ${i * 0.05}s both`
              }}>
                <div style={{ fontSize: 16 }}>
                  {f.icon === "users" && <Users size={16} color={colors.primary} />}
                  {f.icon === "analytics" && <BarChart2 size={16} color={colors.primary} />}
                  {f.icon === "target" && <Target size={16} color={colors.primary} />}
                  {f.icon === "chat" && <MessageSquare size={16} color={colors.primary} />}
                  {f.icon === "phone" && <Smartphone size={16} color={colors.primary} />}
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, color: colors.textPrimary }}>{f.text}</span>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div style={{
            textAlign: "center", padding: "14px 0", borderRadius: 12, background: colors.surface,
            marginBottom: 16
          }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 2 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: colors.textMuted }}>$</span>
              <span style={{ fontSize: 32, fontWeight: 900, color: colors.textPrimary, letterSpacing: -1 }}>19</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: colors.textMuted }}>/month</span>
            </div>
            <div style={{ fontSize: 11, color: colors.success, fontWeight: 600, marginTop: 2 }}>7-day free trial included</div>
          </div>

          {/* CTA Buttons */}
          <button onClick={() => { onUpgrade(); onClose(); }} style={{
            width: "100%", padding: "15px 0", borderRadius: 14, border: "none",
            background: "linear-gradient(135deg, #7C3AED, #34D399)", color: "#fff",
            fontSize: 15, fontWeight: 700, cursor: "pointer",
            boxShadow: "0 6px 20px rgba(52,211,153,0.35)",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            transition: "transform 0.1s"
          }}>
            <Star size={16} fill="#fff" /> Upgrade Now
          </button>

          <button onClick={onClose} style={{
            width: "100%", padding: "12px 0", background: "none", border: "none",
            color: colors.textMuted, fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 8
          }}>
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// COACH WORKOUTS LIST
// ═══════════════════════════════════════════════════════

function CoachWorkoutsList({ sets, onSetUpdate, onCreate, onNavigate, onShowToast }) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [workoutTab, setWorkoutTab] = useState("active");

  const deleteSet = (id) => {
    onSetUpdate(prev => prev.filter(s => s.id !== id));
    setShowDeleteConfirm(null);
    onShowToastr("Workout set deleted");
  };

  const filteredSets = sets.filter(s => {
    if (workoutTab === "active") return s.status === "active";
    if (workoutTab === "drafts") return s.status === "draft";
    return true;
  });

  return (
    <div>
      {/* Header */}
      <div style={{ padding: "0 20px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={() => onNavigate("home")} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <ChevronLeft size={20} color={colors.textPrimary} />
        </button>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: colors.textPrimary }}>{tr("Workout Plans")}</h2>
          <span style={{ fontSize: 11, color: colors.textSecondary }}>{filteredSets.length} plan{filteredSets.length !== 1 ? "s" : ""}</span>
        </div>
        <button onClick={onCreate} style={{
          padding: "8px 14px", borderRadius: 10, border: "none",
          background: colors.primary, color: "#fff",
          fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 4
        }}>
          <Plus size={14} /> Create
        </button>
      </div>

      {/* Tabs */}
      <div style={{ padding: "0 20px 12px", display: "flex", gap: 8 }}>
        {[
          { key: "active", label: "Active Plans" },
          { key: "drafts", label: "Drafts" }
        ].map(tab => (
          <button key={tab.key} onClick={() => setWorkoutTab(tab.key)} style={{
            flex: 1, padding: "8px 12px", borderRadius: 8, border: "none", fontSize: 12, fontWeight: 600,
            background: workoutTab === tab.key ? colors.primary : colors.surface,
            color: workoutTab === tab.key ? "#000" : colors.textSecondary, cursor: "pointer", transition: "all 0.2s"
          }}>{tab.label}</button>
        ))}
      </div>

      {/* Workout Set Cards */}
      <div style={{ padding: "0 20px" }}>
        {filteredSets.map((s, i) => (
          <div key={s.id} style={{
            background: colors.card, borderRadius: 16, border: `1px solid ${colors.border}`,
            marginBottom: 10, overflow: "hidden", animation: `slideUp 0.3s ease ${i * 0.05}s both`,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
          }}>
            <div onClick={() => setExpandedId(expandedId === s.id ? null : s.id)} style={{
              padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer"
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: s.status === "active" ? `${colors.primary}10` : `${colors.warning}10`,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <Dumbbell size={18} color={s.status === "active" ? colors.primary : colors.warning} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{s.name}</div>
                <div style={{ fontSize: 11, color: colors.textSecondary }}>{s.exercises} exercises · {s.trainees.length} trainee{s.trainees.length !== 1 ? "s" : ""}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{
                  padding: "3px 8px", borderRadius: 6, fontSize: 9, fontWeight: 700, textTransform: "uppercase",
                  background: s.status === "active" ? colors.successLight : colors.warningLight,
                  color: s.status === "active" ? colors.success : colors.warning
                }}>{s.status}</span>
                <ChevronDown size={16} color={colors.textMuted} style={{ transform: expandedId === s.id ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
              </div>
            </div>
            {expandedId === s.id && (
              <div style={{ padding: "0 16px 14px", borderTop: `1px solid ${colors.border}30`, paddingTop: 12, animation: "slideUp 0.2s ease" }}>
                <div style={{ fontSize: 11, color: colors.textMuted, marginBottom: 8 }}>Assigned to: {s.trainees.join(", ")}</div>
                <div style={{ fontSize: 10, color: colors.textMuted, marginBottom: 12 }}>Created {s.created}</div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => onNavigate("workout-builder")} style={{ flex: 1, padding: "8px 0", borderRadius: 8, border: `1.5px solid ${colors.primary}30`, background: `${colors.primary}06`, fontSize: 11, fontWeight: 700, color: colors.primary, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                    <Edit3 size={12} /> Edit
                  </button>
                  <button onClick={() => setShowDeleteConfirm(s.id)} style={{ flex: 1, padding: "8px 0", borderRadius: 8, border: `1.5px solid ${colors.error}30`, background: `${colors.error}06`, fontSize: 11, fontWeight: 700, color: colors.error, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                    <Trash2 size={12} /> Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Delete Confirmation */}
      {showDeleteConfirm && (
        <ConfirmDialog
          title="Delete Workout Set"
          message="This will permanently remove this workout plan and unassign it from all trainees. This cannot be undone."
          onConfirm={() => deleteSet(showDeleteConfirm)}
          onCancel={() => setShowDeleteConfirm(null)}
        />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// COACH NUTRITION LIST
// ═══════════════════════════════════════════════════════

function CoachNutritionList({ sets, onSetUpdate, onCreate, onNavigate, onShowToast }) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [nutritionTab, setNutritionTab] = useState("active");

  const deleteSet = (id) => {
    onSetUpdate(prev => prev.filter(s => s.id !== id));
    setShowDeleteConfirm(null);
    onShowToastr("Nutrition plan deleted");
  };

  const filteredSets = sets.filter(s => {
    if (nutritionTab === "active") return s.status === "active";
    if (nutritionTab === "drafts") return s.status === "draft";
    return true;
  });

  return (
    <div>
      {/* Header */}
      <div style={{ padding: "0 20px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={() => onNavigate("home")} style={{ background: colors.surface, border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <ChevronLeft size={20} color={colors.textPrimary} />
        </button>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: colors.textPrimary }}>{tr("Nutrition Plans")}</h2>
          <span style={{ fontSize: 11, color: colors.textSecondary }}>{filteredSets.length} plan{filteredSets.length !== 1 ? "s" : ""}</span>
        </div>
        <button onClick={onCreate} style={{
          padding: "8px 14px", borderRadius: 10, border: "none",
          background: colors.primary, color: "#fff",
          fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 4
        }}>
          <Plus size={14} /> Create
        </button>
      </div>

      {/* Tabs */}
      <div style={{ padding: "0 20px 12px", display: "flex", gap: 8 }}>
        {[
          { key: "active", label: "Active Plans" },
          { key: "drafts", label: "Drafts" }
        ].map(tab => (
          <button key={tab.key} onClick={() => setNutritionTab(tab.key)} style={{
            flex: 1, padding: "8px 12px", borderRadius: 8, border: "none", fontSize: 12, fontWeight: 600,
            background: nutritionTab === tab.key ? colors.primary : colors.surface,
            color: nutritionTab === tab.key ? "#000" : colors.textSecondary, cursor: "pointer", transition: "all 0.2s"
          }}>{tab.label}</button>
        ))}
      </div>

      {/* Nutrition Plan Cards */}
      <div style={{ padding: "0 20px" }}>
        {filteredSets.map((s, i) => (
          <div key={s.id} style={{
            background: colors.card, borderRadius: 16, border: `1px solid ${colors.border}`,
            marginBottom: 10, overflow: "hidden", animation: `slideUp 0.3s ease ${i * 0.05}s both`,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
          }}>
            <div onClick={() => setExpandedId(expandedId === s.id ? null : s.id)} style={{
              padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer"
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: s.status === "active" ? `${colors.primary}10` : `${colors.warning}10`,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <Apple size={18} color={s.status === "active" ? colors.primary : colors.warning} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{s.name}</div>
                <div style={{ fontSize: 11, color: colors.textSecondary }}>{s.meals} meals · {s.calories} kcal · {s.trainees.length} trainee{s.trainees.length !== 1 ? "s" : ""}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{
                  padding: "3px 8px", borderRadius: 6, fontSize: 9, fontWeight: 700, textTransform: "uppercase",
                  background: s.status === "active" ? colors.successLight : colors.warningLight,
                  color: s.status === "active" ? colors.success : colors.warning
                }}>{s.status}</span>
                <ChevronDown size={16} color={colors.textMuted} style={{ transform: expandedId === s.id ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
              </div>
            </div>
            {expandedId === s.id && (
              <div style={{ padding: "0 16px 14px", borderTop: `1px solid ${colors.border}30`, paddingTop: 12, animation: "slideUp 0.2s ease" }}>
                <div style={{ fontSize: 11, color: colors.textMuted, marginBottom: 8 }}>Assigned to: {s.trainees.join(", ")}</div>
                <div style={{ fontSize: 10, color: colors.textMuted, marginBottom: 12 }}>Created {s.created}</div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => onNavigate("nutrition-builder")} style={{ flex: 1, padding: "8px 0", borderRadius: 8, border: `1.5px solid ${colors.primary}30`, background: `${colors.primary}06`, fontSize: 11, fontWeight: 700, color: colors.primary, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                    <Edit3 size={12} /> Edit
                  </button>
                  <button onClick={() => setShowDeleteConfirm(s.id)} style={{ flex: 1, padding: "8px 0", borderRadius: 8, border: `1.5px solid ${colors.error}30`, background: `${colors.error}06`, fontSize: 11, fontWeight: 700, color: colors.error, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                    <Trash2 size={12} /> Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {showDeleteConfirm && (
        <ConfirmDialog
          title="Delete Nutrition Plan"
          message="This will permanently remove this plan. This cannot be undone."
          onConfirm={() => deleteSet(showDeleteConfirm)}
          onCancel={() => setShowDeleteConfirm(null)}
        />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// LOGIN / ROLE SELECTION SCREEN
// ═══════════════════════════════════════════════════════

function LoginScreen({ onLogin, onLanguageChange, currentLanguage = "English" }) {
  const [authScreen, setAuthScreen] = useState("role-select"); // role-select | coach-login | coach-signup | trainee-login
  const [selectedRole, setSelectedRole] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Coach Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginShowPw, setLoginShowPw] = useState(false);
  const [loginErrors, setLoginErrors] = useState({});
  const [loginServerError, setLoginServerError] = useState("");

  // Coach Signup state
  const [signupData, setSignupData] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPw: "", gym: "", gender: "" });
  const [signupShowPw, setSignupShowPw] = useState(false);
  const [signupShowConfirm, setSignupShowConfirm] = useState(false);
  const [signupErrors, setSignupErrors] = useState({});
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [signupServerError, setSignupServerError] = useState("");

  // Trainee Login state
  const [traineeEmail, setTraineeEmail] = useState("");
  const [traineePassword, setTraineePassword] = useState("");
  const [traineeShowPw, setTraineeShowPw] = useState(false);
  const [traineeErrors, setTraineeErrors] = useState({});
  const [traineeServerError, setTraineeServerError] = useState("");

  // Forgot password
  const [showForgotPw, setShowForgotPw] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSent, setForgotSent] = useState(false);

  // Validation helpers
  const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  const passwordStrength = (pw) => {
    if (!pw) return { level: 0, label: "", color: "transparent", pct: 0 };
    let score = 0;
    if (pw.length >= 6) score++;
    if (pw.length >= 10) score++;
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
    if (/\d/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    if (score <= 1) return { level: 1, label: "Weak", color: colors.error, pct: 25 };
    if (score <= 2) return { level: 2, label: "Fair", color: colors.warning, pct: 50 };
    if (score <= 3) return { level: 3, label: "Good", color: "#F59E0B", pct: 75 };
    return { level: 4, label: "Strong", color: colors.success, pct: 100 };
  };

  // Shared input style
  const inputStyle = (hasError) => ({
    width: "100%", height: 48, borderRadius: 12, fontSize: 14, outline: "none", boxSizing: "border-box",
    padding: "0 14px", background: "rgba(255,255,255,0.08)", color: "#fff",
    border: `1.5px solid ${hasError ? "#F87171" : "rgba(255,255,255,0.15)"}`,
    transition: "all 0.2s", backdropFilter: "blur(8px)",
    "::placeholder": { color: "rgba(255,255,255,0.4)" }
  });

  const labelStyle = { fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 };
  const errorStyle = { fontSize: 11, color: "#F87171", marginTop: 4, display: "flex", alignItems: "center", gap: 4 };

  // ── Coach Login Handler ──
  const handleCoachLogin = () => {
    const errs = {};
    if (!loginEmail.trim()) errs.email = "Email is required";
    else if (!isValidEmail(loginEmail)) errs.email = "Invalid email format";
    if (!loginPassword) errs.password = "Password is required";
    else if (loginPassword.length < 6) errs.password = "Password must be at least 6 characters";
    setLoginErrors(errs);
    setLoginServerError("");
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLogin("coach");
    }, 1200);
  };

  // ── Coach Signup Handler ──
  const handleCoachSignup = () => {
    const d = signupData;
    const errs = {};
    if (!d.firstName.trim()) errs.firstName = "First name is required";
    if (!d.lastName.trim()) errs.lastName = "Last name is required";
    if (!d.email.trim()) errs.email = "Email is required";
    else if (!isValidEmail(d.email)) errs.email = "Invalid email format";
    if (!d.password) errs.password = "Password is required";
    else if (d.password.length < 8) errs.password = "Minimum 8 characters";
    if (!d.confirmPw) errs.confirmPw = "Please confirm your password";
    else if (d.confirmPw !== d.password) errs.confirmPw = "Passwords do not match";
    if (!agreedTerms) errs.terms = "You must accept the Terms & Conditions";
    setSignupErrors(errs);
    setSignupServerError("");
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLogin("coach");
    }, 1500);
  };

  // ── Trainee Login Handler ──
  const handleTraineeLogin = () => {
    const errs = {};
    if (!traineeEmail.trim()) errs.email = "Email is required";
    else if (!isValidEmail(traineeEmail)) errs.email = "Invalid email format";
    if (!traineePassword) errs.password = "Password is required";
    else if (traineePassword.length < 6) errs.password = "Password must be at least 6 characters";
    setTraineeErrors(errs);
    setTraineeServerError("");
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLogin("trainee");
    }, 1200);
  };

  // ── Forgot Password Handler ──
  const handleForgotPw = () => {
    if (!forgotEmail.trim() || !isValidEmail(forgotEmail)) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setForgotSent(true);
    }, 1000);
  };

  // ── Shared Logo Header ──
  const LogoHeader = ({ subtitle }) => (
    <div style={{ textAlign: "center", marginBottom: 28 }}>
      <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 4, letterSpacing: -0.5 }}><span style={{ color: "#fff" }}>guider<span style={{ color: "#34D399" }}>.</span></span></h1>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{subtitle}</p>
    </div>
  );

  // ── Shared Password Input ──
  const PasswordInput = ({ value, onChange, show, onToggle, placeholder, error }) => (
    <div style={{ position: "relative" }}>
      <input
        type={show ? "text" : "password"} value={value} onChange={onChange}
        placeholder={placeholder || "Enter password"}
        style={{ ...inputStyle(!!error), paddingRight: 42 }}
        onKeyDown={e => e.key === "Enter" && e.target.blur()}
      />
      <button onClick={onToggle} style={{
        position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
        background: "none", border: "none", cursor: "pointer", padding: 4
      }}>
        {show ? <EyeOff size={16} color="rgba(255,255,255,0.5)" /> : <Eye size={16} color="rgba(255,255,255,0.5)" />}
      </button>
    </div>
  );

  // ── Submit Button ──
  const SubmitButton = ({ onClick, label, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled || isSubmitting}
      style={{
        width: "100%", padding: "16px 0", borderRadius: 14, border: "none",
        background: (disabled || isSubmitting) ? "rgba(255,255,255,0.15)" : "#fff",
        color: (disabled || isSubmitting) ? "rgba(255,255,255,0.3)" : colors.primary,
        fontSize: 15, fontWeight: 700, cursor: (disabled || isSubmitting) ? "not-allowed" : "pointer",
        transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        boxShadow: (disabled || isSubmitting) ? "none" : "0 4px 20px rgba(0,0,0,0.15)"
      }}
    >
      {isSubmitting ? (
        <>
          <div style={{ width: 16, height: 16, border: "2.5px solid rgba(52,211,153,0.3)", borderTopColor: colors.primary, borderRadius: "50%", animation: "spin 0.6s linear infinite" }} />
          Processing...
        </>
      ) : label}
    </button>
  );

  // ── Forgot Password Modal ──
  if (showForgotPw) {
    return (
      <div style={{ height: "100%", background: gradients.onboarding, display: "flex", flexDirection: "column", justifyContent: "center", padding: 28 }}>
        <button onClick={() => { setShowForgotPw(false); setForgotSent(false); setForgotEmail(""); }} style={{
          position: "absolute", top: 20, left: 20, background: "rgba(255,255,255,0.1)", border: "none",
          borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
        }}>
          <ChevronLeft size={18} color="#fff" />
        </button>

        <LogoHeader subtitle={tr("Reset your password")} />

        {forgotSent ? (
          <div style={{ textAlign: "center", animation: "fadeScale 0.3s ease" }}>
            <div style={{
              width: 64, height: 64, borderRadius: "50%", background: "rgba(16,185,129,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px"
            }}>
              <Mail size={28} color="#10B981" />
            </div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 6 }}>{tr("Check your email")}</h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: 24 }}>
              We sent a password reset link to <strong style={{ color: "#fff" }}>{forgotEmail}</strong>. Please check your inbox.
            </p>
            <button onClick={() => { setShowForgotPw(false); setForgotSent(false); setForgotEmail(""); }} style={{
              width: "100%", padding: "14px 0", borderRadius: 14, border: "none",
              background: "#fff", color: colors.primary, fontSize: 14, fontWeight: 700, cursor: "pointer"
            }}>
              Back to Login
            </button>
          </div>
        ) : (
          <div style={{ animation: "slideUp 0.3s ease" }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: 20, textAlign: "center" }}>
              Enter the email address associated with your account and we'll send a reset link.
            </p>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>{tr("Email Address")}</label>
              <div style={{ position: "relative" }}>
                <Mail size={16} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 14, top: 16 }} />
                <input
                  type="email" value={forgotEmail} onChange={e => setForgotEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={{ ...inputStyle(false), paddingLeft: 38 }}
                  onKeyDown={e => e.key === "Enter" && handleForgotPw()}
                />
              </div>
            </div>
            <SubmitButton onClick={handleForgotPw} label="Send Reset Link" disabled={!forgotEmail.trim()} />
          </div>
        )}
      </div>
    );
  }

  // ═══════════════════════════════════════════
  // SCREEN 1: ROLE SELECTION
  // ═══════════════════════════════════════════
  if (authScreen === "role-select") {
    return (
      <div style={{ height: "100%", background: gradients.onboarding, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 28, textAlign: "center" }}>
        <LogoHeader subtitle={tr("Train smarter. Together.")} />

        {/* Language Toggle */}
        <div style={{ display: "flex", gap: 6, marginBottom: 24, background: "rgba(255,255,255,0.08)", borderRadius: 16, padding: 5, width: "100%" }}>
          {[{ key: "English", label: "🇺🇸 English" }, { key: "Arabic", label: "🇸🇦 العربية" }].map(lang => (
            <button key={lang.key}
              onClick={() => { if (onLanguageChange) onLanguageChange(lang.key); }}
              style={{
                flex: 1, padding: "12px 0", borderRadius: 12, border: "none",
                background: currentLanguage === lang.key ? "rgba(255,255,255,0.22)" : "transparent",
                color: currentLanguage === lang.key ? "#fff" : "rgba(255,255,255,0.45)",
                fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
                boxShadow: currentLanguage === lang.key ? "0 3px 12px rgba(0,0,0,0.2)" : "none",
                letterSpacing: 0.2
              }}>
              {lang.label}
            </button>
          ))}
        </div>

        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
          {[
            { key: "coach", icon: Users, title: tr("I'm a Coach"), desc: tr("Manage clients, create plans & track progress"), gradient: "linear-gradient(135deg, #34D399, #0A3D22)" },
            { key: "trainee", icon: Dumbbell, title: tr("I'm a Trainee"), desc: tr("Follow plans, log workouts & hit your goals"), gradient: "linear-gradient(135deg, #0A3D22, #34D399)" }
          ].map(r => (
            <button key={r.key} onClick={() => setSelectedRole(r.key)} style={{
              width: "100%", padding: "18px 16px", borderRadius: 16,
              border: `2px solid ${selectedRole === r.key ? "#fff" : "rgba(255,255,255,0.12)"}`,
              background: selectedRole === r.key ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
              color: "#fff", textAlign: "left", cursor: "pointer", backdropFilter: "blur(10px)",
              transition: "all 0.2s", display: "flex", alignItems: "center", gap: 14,
              animation: "slideUp 0.3s ease"
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, background: selectedRole === r.key ? r.gradient : "rgba(255,255,255,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.3s"
              }}>
                <r.icon size={22} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{r.title}</div>
                <div style={{ fontSize: 11, opacity: 0.6, marginTop: 2, lineHeight: 1.4 }}>{r.desc}</div>
              </div>
              {/* Checkmark */}
              {selectedRole === r.key && (
                <div style={{ marginLeft: "auto", width: 24, height: 24, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", animation: "bounce 0.3s ease" }}>
                  <Check size={14} color={colors.primary} strokeWidth={3} />
                </div>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            if (selectedRole === "coach") setAuthScreen("coach-login");
            else if (selectedRole === "trainee") setAuthScreen("trainee-login");
          }}
          disabled={!selectedRole}
          style={{
            width: "100%", padding: "16px 0", borderRadius: 14, border: "none",
            background: selectedRole ? "#fff" : "rgba(255,255,255,0.15)",
            color: selectedRole ? colors.primary : "rgba(255,255,255,0.3)",
            fontSize: 15, fontWeight: 700, cursor: selectedRole ? "pointer" : "not-allowed",
            transition: "all 0.2s", boxShadow: selectedRole ? "0 4px 20px rgba(0,0,0,0.15)" : "none"
          }}
        >
          {tr("Continue")} →
        </button>
      </div>
    );
  }

  // ═══════════════════════════════════════════
  // SCREEN 2: COACH LOGIN
  // ═══════════════════════════════════════════
  if (authScreen === "coach-login") {
    return (
      <div style={{ height: "100%", background: gradients.onboarding, display: "flex", flexDirection: "column", justifyContent: "center", padding: 28, overflowY: "auto" }}>
        {/* Back button */}
        <button onClick={() => { setAuthScreen("role-select"); setLoginErrors({}); setLoginServerError(""); }} style={{
          position: "absolute", top: 20, left: 20, background: "rgba(255,255,255,0.1)", border: "none",
          borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
        }}>
          <ChevronLeft size={18} color="#fff" />
        </button>

        <LogoHeader subtitle={tr("Welcome back, Coach")} />

        <div style={{ animation: "slideUp 0.3s ease" }}>
          {/* Server Error */}
          {loginServerError && (
            <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(248,113,113,0.15)", border: "1px solid rgba(248,113,113,0.3)", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <AlertTriangle size={16} color="#F87171" />
              <span style={{ fontSize: 12, color: "#F87171", fontWeight: 600 }}>{loginServerError}</span>
            </div>
          )}

          {/* Email */}
          <div style={{ marginBottom: 14 }}>
            <label style={labelStyle}>{tr("Email Address")}</label>
            <div style={{ position: "relative" }}>
              <Mail size={16} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 14, top: 16 }} />
              <input
                type="email" value={loginEmail} onChange={e => { setLoginEmail(e.target.value); setLoginErrors(p => ({ ...p, email: "" })); }}
                placeholder="you@example.com"
                style={{ ...inputStyle(!!loginErrors.email), paddingLeft: 38 }}
                onKeyDown={e => e.key === "Enter" && document.getElementById("coach-login-pw")?.focus()}
              />
            </div>
            {loginErrors.email && <div style={errorStyle}><AlertTriangle size={10} /> {loginErrors.email}</div>}
          </div>

          {/* Password */}
          <div style={{ marginBottom: 6 }}>
            <label style={labelStyle}>{tr("Password")}</label>
            <PasswordInput
              value={loginPassword} onChange={e => { setLoginPassword(e.target.value); setLoginErrors(p => ({ ...p, password: "" })); }}
              show={loginShowPw} onToggle={() => setLoginShowPw(!loginShowPw)}
              placeholder="Enter your password" error={loginErrors.password}
            />
            {loginErrors.password && <div style={errorStyle}><AlertTriangle size={10} /> {loginErrors.password}</div>}
          </div>

          {/* Forgot Password */}
          <div style={{ textAlign: "right", marginBottom: 20 }}>
            <button onClick={() => setShowForgotPw(true)} style={{
              background: "none", border: "none", color: "rgba(255,255,255,0.5)",
              fontSize: 12, fontWeight: 600, cursor: "pointer", textDecoration: "underline"
            }}>
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <SubmitButton onClick={handleCoachLogin} label="Login" disabled={!loginEmail || !loginPassword} />

          {/* Sign up link */}
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{tr("Don't have an account? ")}</span>
            <button onClick={() => { setAuthScreen("coach-signup"); setLoginErrors({}); }} style={{
              background: "none", border: "none", color: "#fff", fontSize: 13, fontWeight: 700,
              cursor: "pointer", textDecoration: "underline"
            }}>
              Sign up here
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════
  // SCREEN 3: COACH SIGNUP
  // ═══════════════════════════════════════════
  if (authScreen === "coach-signup") {
    const pwStr = passwordStrength(signupData.password);
    const updateSignup = (key, val) => {
      setSignupData(p => ({ ...p, [key]: val }));
      setSignupErrors(p => ({ ...p, [key]: "" }));
    };

    return (
      <div style={{ height: "100%", background: gradients.onboarding, display: "flex", flexDirection: "column", padding: 28, overflowY: "auto" }}>
        {/* Back button */}
        <button onClick={() => { setAuthScreen("coach-login"); setSignupErrors({}); setSignupServerError(""); }} style={{
          background: "rgba(255,255,255,0.1)", border: "none",
          borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          flexShrink: 0, marginBottom: 8
        }}>
          <ChevronLeft size={18} color="#fff" />
        </button>

        <LogoHeader subtitle="Create your coach account" />

        <div style={{ animation: "slideUp 0.3s ease", flex: 1 }}>
          {/* Server Error */}
          {signupServerError && (
            <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(248,113,113,0.15)", border: "1px solid rgba(248,113,113,0.3)", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <AlertTriangle size={16} color="#F87171" />
              <span style={{ fontSize: 12, color: "#F87171", fontWeight: 600 }}>{signupServerError}</span>
            </div>
          )}

          {/* Name Row */}
          <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>First Name *</label>
              <input type="text" value={signupData.firstName} onChange={e => updateSignup("firstName", e.target.value)}
                placeholder="John" style={inputStyle(!!signupErrors.firstName)} />
              {signupErrors.firstName && <div style={errorStyle}><AlertTriangle size={10} /> {signupErrors.firstName}</div>}
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Last Name *</label>
              <input type="text" value={signupData.lastName} onChange={e => updateSignup("lastName", e.target.value)}
                placeholder="Smith" style={inputStyle(!!signupErrors.lastName)} />
              {signupErrors.lastName && <div style={errorStyle}><AlertTriangle size={10} /> {signupErrors.lastName}</div>}
            </div>
          </div>


          {/* Gender */}
          <div style={{ marginBottom: 12 }}>
            <label style={labelStyle}>{tr("Gender *")}</label>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { key: "Male",   icon: "♂", label: tr("Male") },
                { key: "Female", icon: "♀", label: tr("Female") },
                { key: "Other",  icon: "⚧", label: tr("Other") },
              ].map(g => (
                <button key={g.key} onClick={() => updateSignup("gender", signupData.gender === g.key ? "" : g.key)}
                  style={{
                    flex: 1, padding: "10px 6px", borderRadius: 12,
                    border: `2px solid ${signupData.gender === g.key ? "#34D399" : "rgba(255,255,255,0.2)"}`,
                    background: signupData.gender === g.key ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.06)",
                    cursor: "pointer", textAlign: "center", transition: "all 0.15s"
                  }}>
                  <div style={{ fontSize: 18, marginBottom: 2 }}>{g.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: signupData.gender === g.key ? "#34D399" : "rgba(255,255,255,0.6)" }}>{g.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: 12 }}>
            <label style={labelStyle}>Email Address *</label>
            <div style={{ position: "relative" }}>
              <Mail size={16} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 14, top: 16 }} />
              <input type="email" value={signupData.email} onChange={e => updateSignup("email", e.target.value)}
                placeholder="you@example.com" style={{ ...inputStyle(!!signupErrors.email), paddingLeft: 38 }} />
            </div>
            {signupErrors.email && <div style={errorStyle}><AlertTriangle size={10} /> {signupErrors.email}</div>}
          </div>

          {/* Password */}
          <div style={{ marginBottom: 12 }}>
            <label style={labelStyle}>Password *</label>
            <PasswordInput
              value={signupData.password} onChange={e => updateSignup("password", e.target.value)}
              show={signupShowPw} onToggle={() => setSignupShowPw(!signupShowPw)}
              placeholder="Minimum 8 characters" error={signupErrors.password}
            />
            {signupErrors.password && <div style={errorStyle}><AlertTriangle size={10} /> {signupErrors.password}</div>}
            {/* Strength Meter */}
            {signupData.password && (
              <div style={{ marginTop: 6 }}>
                <div style={{ display: "flex", gap: 3 }}>
                  {[1,2,3,4].map(i => (
                    <div key={i} style={{
                      flex: 1, height: 3, borderRadius: 2,
                      background: pwStr.level >= i ? pwStr.color : "rgba(255,255,255,0.1)",
                      transition: "all 0.3s"
                    }} />
                  ))}
                </div>
                <span style={{ fontSize: 10, color: pwStr.color, marginTop: 3, display: "block", fontWeight: 600 }}>{pwStr.label}</span>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div style={{ marginBottom: 12 }}>
            <label style={labelStyle}>Confirm Password *</label>
            <PasswordInput
              value={signupData.confirmPw} onChange={e => updateSignup("confirmPw", e.target.value)}
              show={signupShowConfirm} onToggle={() => setSignupShowConfirm(!signupShowConfirm)}
              placeholder="Re-enter password" error={signupErrors.confirmPw}
            />
            {signupErrors.confirmPw && <div style={errorStyle}><AlertTriangle size={10} /> {signupErrors.confirmPw}</div>}
          </div>

          {/* Gym / Studio Name (optional) */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>{tr("Gym / Studio Name ")}<span style={{ opacity: 0.5 }}>(optional)</span></label>
            <input type="text" value={signupData.gym} onChange={e => updateSignup("gym", e.target.value)}
              placeholder="FitFactory, Gold's Gym..." style={inputStyle(false)} />
          </div>

          {/* Terms & Conditions */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 20 }}>
            <button onClick={() => { setAgreedTerms(!agreedTerms); setSignupErrors(p => ({ ...p, terms: "" })); }} style={{
              width: 22, height: 22, borderRadius: 6, flexShrink: 0, cursor: "pointer",
              border: `2px solid ${signupErrors.terms ? "#F87171" : agreedTerms ? "#10B981" : "rgba(255,255,255,0.3)"}`,
              background: agreedTerms ? "rgba(16,185,129,0.2)" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", marginTop: 1
            }}>
              {agreedTerms && <Check size={14} color="#10B981" strokeWidth={3} />}
            </button>
            <div>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                I agree to the <button style={{ background: "none", border: "none", color: "#fff", fontSize: 12, fontWeight: 700, cursor: "pointer", textDecoration: "underline", padding: 0 }}>{tr("Terms & Conditions")}</button> and <button style={{ background: "none", border: "none", color: "#fff", fontSize: 12, fontWeight: 700, cursor: "pointer", textDecoration: "underline", padding: 0 }}>{tr("Privacy Policy")}</button>
              </span>
              {signupErrors.terms && <div style={{ ...errorStyle, marginTop: 2 }}><AlertTriangle size={10} /> {signupErrors.terms}</div>}
            </div>
          </div>

          {/* Signup Button */}
          <SubmitButton onClick={handleCoachSignup} label="Create Account" disabled={false} />

          {/* Login link */}
          <div style={{ textAlign: "center", marginTop: 16, paddingBottom: 20 }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{tr("Already have an account? ")}</span>
            <button onClick={() => { setAuthScreen("coach-login"); setSignupErrors({}); }} style={{
              background: "none", border: "none", color: "#fff", fontSize: 13, fontWeight: 700,
              cursor: "pointer", textDecoration: "underline"
            }}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════
  // SCREEN 4: TRAINEE LOGIN
  // ═══════════════════════════════════════════
  if (authScreen === "trainee-login") {
    return (
      <div style={{ height: "100%", background: gradients.onboarding, display: "flex", flexDirection: "column", justifyContent: "center", padding: 28, overflowY: "auto" }}>
        {/* Back button */}
        <button onClick={() => { setAuthScreen("role-select"); setTraineeErrors({}); setTraineeServerError(""); }} style={{
          position: "absolute", top: 20, left: 20, background: "rgba(255,255,255,0.1)", border: "none",
          borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
        }}>
          <ChevronLeft size={18} color="#fff" />
        </button>

        <LogoHeader subtitle="Welcome back" />

        {/* Info Banner — No signup */}
        <div style={{
          padding: "10px 14px", borderRadius: 10, background: "rgba(79,70,229,0.12)", border: "1px solid rgba(52,211,153,0.2)",
          marginBottom: 18, display: "flex", alignItems: "center", gap: 8, animation: "slideUp 0.3s ease"
        }}>
          <HelpCircle size={16} color="rgba(255,255,255,0.6)" />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
            Trainee accounts are created by your coach. Contact your coach if you don't have login credentials.
          </span>
        </div>

        <div style={{ animation: "slideUp 0.3s ease" }}>
          {/* Server Error */}
          {traineeServerError && (
            <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(248,113,113,0.15)", border: "1px solid rgba(248,113,113,0.3)", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <AlertTriangle size={16} color="#F87171" />
              <span style={{ fontSize: 12, color: "#F87171", fontWeight: 600 }}>{traineeServerError}</span>
            </div>
          )}

          {/* Email */}
          <div style={{ marginBottom: 14 }}>
            <label style={labelStyle}>{tr("Email Address")}</label>
            <div style={{ position: "relative" }}>
              <Mail size={16} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 14, top: 16 }} />
              <input
                type="email" value={traineeEmail} onChange={e => { setTraineeEmail(e.target.value); setTraineeErrors(p => ({ ...p, email: "" })); }}
                placeholder="you@example.com"
                style={{ ...inputStyle(!!traineeErrors.email), paddingLeft: 38 }}
                onKeyDown={e => e.key === "Enter" && document.getElementById("trainee-pw")?.focus()}
              />
            </div>
            {traineeErrors.email && <div style={errorStyle}><AlertTriangle size={10} /> {traineeErrors.email}</div>}
          </div>

          {/* Password */}
          <div style={{ marginBottom: 6 }}>
            <label style={labelStyle}>{tr("Password")}</label>
            <PasswordInput
              value={traineePassword} onChange={e => { setTraineePassword(e.target.value); setTraineeErrors(p => ({ ...p, password: "" })); }}
              show={traineeShowPw} onToggle={() => setTraineeShowPw(!traineeShowPw)}
              placeholder="Enter your password" error={traineeErrors.password}
            />
            {traineeErrors.password && <div style={errorStyle}><AlertTriangle size={10} /> {traineeErrors.password}</div>}
          </div>

          {/* Forgot Password */}
          <div style={{ textAlign: "right", marginBottom: 20 }}>
            <button onClick={() => setShowForgotPw(true)} style={{
              background: "none", border: "none", color: "rgba(255,255,255,0.5)",
              fontSize: 12, fontWeight: 600, cursor: "pointer", textDecoration: "underline"
            }}>
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <SubmitButton onClick={handleTraineeLogin} label="Login" disabled={!traineeEmail || !traineePassword} />

          {/* Help text */}
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
              Need help? Ask your coach for access.
            </span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// ═══════════════════════════════════════════════════════
// COACH SETTINGS
// ═══════════════════════════════════════════════════════

function TraineeSettings({ onShowToast, onNavigate, onLogout, onLanguageChange, currentLanguage = "English" }) {
  const [activeSection, setActiveSection] = useState(null);
  const [profile, setProfile] = useState({
    name: "Sarah M.", email: "sarah.m@email.com", phone: "+1 (555) 987-6543", bio: "Fitness enthusiast, working towards my goal weight!", avatar: null
  });
  const [editField, setEditField] = useState(null);
  const [editValue, setEditValue] = useState("");

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwords, setPasswords] = useState({ current: "", newPass: "", confirm: "" });
  const [showPassCurrent, setShowPassCurrent] = useState(false);
  const [showPassNew, setShowPassNew] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

  const [notifications, setNotifications] = useState({
    pushMaster: true, emailMaster: false,
    workoutReminders: true, nutritionReminders: true, messages: true,
    weeklyReport: true, coachUpdates: true, achievements: true,
    dndEnabled: false, dndStart: "22:00", dndEnd: "07:00"
  });

  const [preferences, setPreferences] = useState({
    theme: "light", units: "metric", language: currentLanguage, weightUnit: "kg"
  });

  const [twoFactor, setTwoFactor] = useState(false);
  const [showDevices, setShowDevices] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const toggleNotif = (key) => setNotifications(p => ({ ...p, [key]: !p[key] }));

  const profileCompletion = () => {
    let filled = 0;
    if (profile.name) filled++;
    if (profile.email) filled++;
    if (profile.phone) filled++;
    if (profile.bio) filled++;
    if (profile.avatar) filled++;
    return Math.round((filled / 5) * 100);
  };

  const passwordStrength = (pass) => {
    if (!pass) return { label: "", color: colors.border, pct: 0 };
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    if (pass.length >= 12) score++;
    const levels = [
      { label: "Too short", color: colors.error, pct: 20 },
      { label: "Weak", color: colors.error, pct: 35 },
      { label: "Fair", color: colors.warning, pct: 55 },
      { label: "Good", color: "#3B82F6", pct: 75 },
      { label: "Strong", color: colors.success, pct: 100 },
    ];
    return levels[Math.min(score, 4)];
  };

  const startEdit = (field) => { setEditField(field); setEditValue(profile[field]); };
  const saveEdit = () => {
    if (editValue.trim()) {
      setProfile(p => ({ ...p, [editField]: editValue.trim() }));
      onShowToast(`${editField.charAt(0).toUpperCase() + editField.slice(1)} updated`, "success");
    }
    setEditField(null);
  };

  const handlePasswordSave = () => {
    if (!passwords.current) { onShowToast("Enter current password", "error"); return; }
    if (passwords.newPass.length < 8) { onShowToast("Password must be at least 8 characters", "error"); return; }
    if (passwords.newPass !== passwords.confirm) { onShowToast("Passwords do not match", "error"); return; }
    onShowToast("Password updated successfully", "success");
    setPasswords({ current: "", newPass: "", confirm: "" });
    setShowPasswordForm(false);
  };

  const devices = [
    { name: "iPhone 13 Pro Max", browser: "Safari", location: "Cairo, EG", lastActive: "Active now", current: true },
    { name: "MacBook Air", browser: "Chrome 120", location: "Cairo, EG", lastActive: "2 hours ago", current: false },
  ];

  const pCompletion = profileCompletion();
  const pStrength = passwordStrength(passwords.newPass);

  const ToggleSwitch = ({ on, onToggle }) => (
    <button onClick={onToggle} style={{
      width: 46, height: 26, borderRadius: 13, border: "none",
      background: on ? colors.primary : colors.border,
      position: "relative", cursor: "pointer", transition: "background 0.2s", flexShrink: 0
    }}>
      <div style={{
        width: 20, height: 20, borderRadius: 10, background: "#fff",
        position: "absolute", top: 3, left: on ? 23 : 3,
        transition: "left 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.15)"
      }} />
    </button>
  );

  const SectionHeader = ({ icon: Icon, iconColor, title, subtitle, isOpen, onToggle }) => (
    <button onClick={onToggle} style={{
      width: "100%", background: colors.card, borderRadius: 16, padding: "16px 18px",
      border: `1px solid ${isOpen ? colors.primary : colors.border}`,
      display: "flex", alignItems: "center", gap: 14, cursor: "pointer",
      boxShadow: isOpen ? "0 2px 12px rgba(52,211,153,0.1)" : "0 1px 3px rgba(0,0,0,0.04)",
      transition: "all 0.2s"
    }}>
      <div style={{
        width: 42, height: 42, borderRadius: 12,
        background: isOpen ? `${iconColor}15` : colors.surface,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
      }}>
        <Icon size={20} color={isOpen ? iconColor : colors.textMuted} />
      </div>
      <div style={{ flex: 1, textAlign: "left" }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: colors.textPrimary }}>{title}</div>
        <div style={{ fontSize: 12, color: colors.textSecondary, marginTop: 1 }}>{subtitle}</div>
      </div>
      {isOpen ? <ChevronUp size={18} color={colors.primary} /> : <ChevronDown size={18} color={colors.textMuted} />}
    </button>
  );

  const sections = [
    { id: "account",       icon: User,     iconColor: colors.primary, title: tr("Account"),       subtitle: tr("Profile, email, password") },
    { id: "notifications", icon: Bell,     iconColor: "#F59E0B",       title: tr("Notifications"), subtitle: tr("Push, email, Do Not Disturb") },
    { id: "preferences",   icon: Settings, iconColor: "#8B5CF6",       title: tr("App Preferences"), subtitle: tr("Theme, units, language") },
    { id: "security",      icon: Shield,   iconColor: colors.error,    title: tr("Security & Privacy"), subtitle: tr("2FA, devices, data") },
  ];

  return (
    <div style={{ padding: "0 20px 20px" }}>
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: colors.textPrimary, letterSpacing: -0.5, marginBottom: 4 }}>{tr("Settings")}</h1>
        <p style={{ fontSize: 14, color: colors.textSecondary }}>{tr("Manage your account & preferences")}</p>
      </div>

      {/* Profile Quick Card */}
      <div style={{ background: colors.card, borderRadius: 18, padding: 18, border: `1px solid ${colors.border}`, marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: gradients.workout, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 800, color: "#fff", position: "relative" }}>
            {profile.avatar ? <img src={profile.avatar} alt="" style={{ width: "100%", height: "100%", borderRadius: 16, objectFit: "cover" }} /> : profile.name.split(" ").map(w => w[0]).join("")}
            <div style={{ position: "absolute", bottom: -2, right: -2, width: 20, height: 20, borderRadius: "50%", background: colors.primary, border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Camera size={10} color="#fff" />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: colors.textPrimary }}>{profile.name}</div>
            <div style={{ fontSize: 13, color: colors.textSecondary }}>{profile.email}</div>
            <div style={{ fontSize: 11, color: colors.textMuted, marginTop: 3 }}>Member since Feb 2026</div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: colors.textSecondary }}>{tr("Profile Completion")}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: pCompletion === 100 ? colors.success : colors.primary }}>{pCompletion}%</span>
          </div>
          <div style={{ background: colors.surface, borderRadius: 4, height: 6, overflow: "hidden" }}>
            <div style={{ width: `${pCompletion}%`, height: "100%", background: pCompletion === 100 ? colors.success : colors.primary, borderRadius: 4, transition: "width 0.5s ease" }} />
          </div>
          {pCompletion < 100 && <p style={{ fontSize: 11, color: colors.textMuted, marginTop: 4 }}>Add a profile photo to reach 100%</p>}
        </div>
      </div>

      {/* Settings Sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {sections.map(sec => (
          <div key={sec.id}>
            <SectionHeader icon={sec.icon} iconColor={sec.iconColor} title={sec.title} subtitle={sec.subtitle}
              isOpen={activeSection === sec.id} onToggle={() => setActiveSection(activeSection === sec.id ? null : sec.id)} />

            {/* ── ACCOUNT ── */}
            {activeSection === sec.id && sec.id === "account" && (
              <div style={{ background: colors.card, borderRadius: "0 0 16px 16px", padding: "8px 18px 18px", marginTop: -8, border: `1px solid ${colors.border}`, borderTop: "none" }}>
                {[
                  { field: "name", label: tr("Full Name"), icon: User, iconColor: colors.primary },
                  { field: "email", label: tr("Email"), icon: Mail, iconColor: "#3B82F6" },
                  { field: "phone", label: tr("Phone"), icon: Phone, iconColor: colors.success },
                ].map(({ field, label, icon: Icon, iconColor }) => (
                  <div key={field}>
                    {editField === field ? (
                      <div style={{ padding: "10px 0", borderBottom: `1px solid ${colors.surface}` }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <input autoFocus value={editValue} onChange={e => setEditValue(e.target.value)}
                            style={{ flex: 1, height: 40, borderRadius: 10, border: `1.5px solid ${colors.primary}`, padding: "0 12px", fontSize: 14, outline: "none", color: colors.textPrimary, background: colors.background }} />
                          <button onClick={saveEdit} style={{ padding: "0 16px", height: 40, borderRadius: 10, border: "none", background: colors.primary, color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>{tr("Save")}</button>
                          <button onClick={() => setEditField(null)} style={{ padding: "0 12px", height: 40, borderRadius: 10, border: `1px solid ${colors.border}`, background: "#fff", color: colors.textSecondary, fontSize: 13, cursor: "pointer" }}>{tr("Cancel")}</button>
                        </div>
                      </div>
                    ) : (
                      <button onClick={() => startEdit(field)} style={{ width: "100%", padding: "13px 0", display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", borderBottom: `1px solid ${colors.surface}`, cursor: "pointer" }}>
                        <div style={{ width: 32, height: 32, borderRadius: 9, background: `${iconColor}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Icon size={15} color={iconColor} />
                        </div>
                        <div style={{ flex: 1, textAlign: "left" }}>
                          <div style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.4 }}>{label}</div>
                          <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary, marginTop: 1 }}>{profile[field] || <span style={{ color: colors.textMuted, fontStyle: "italic" }}>Not set</span>}</div>
                        </div>
                        <Edit3 size={14} color={colors.textMuted} />
                      </button>
                    )}
                  </div>
                ))}

                {/* Change Password */}
                <div style={{ marginTop: 10 }}>
                  <button onClick={() => setShowPasswordForm(!showPasswordForm)} style={{ width: "100%", padding: "13px 0", display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", borderBottom: `1px solid ${colors.surface}`, cursor: "pointer" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 9, background: `${colors.warning}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Lock size={15} color={colors.warning} />
                    </div>
                    <div style={{ flex: 1, textAlign: "left" }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>{tr("Change Password")}</div>
                    </div>
                    {showPasswordForm ? <ChevronUp size={16} color={colors.textMuted} /> : <ChevronRight size={16} color={colors.textMuted} />}
                  </button>

                  {showPasswordForm && (
                    <div style={{ padding: "14px 0", display: "flex", flexDirection: "column", gap: 10 }}>
                      {[
                        { key: "current", label: "Current Password", show: showPassCurrent, setShow: setShowPassCurrent },
                        { key: "newPass", label: "New Password", show: showPassNew, setShow: setShowPassNew },
                        { key: "confirm", label: "Confirm New Password", show: showPassConfirm, setShow: setShowPassConfirm },
                      ].map(({ key, label, show, setShow }) => (
                        <div key={key}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.4 }}>{label}</div>
                          <div style={{ position: "relative" }}>
                            <input type={show ? "text" : "password"} value={passwords[key]}
                              onChange={e => setPasswords(p => ({ ...p, [key]: e.target.value }))}
                              style={{ width: "100%", height: 44, borderRadius: 10, border: `1.5px solid ${colors.border}`, padding: "0 44px 0 14px", fontSize: 14, outline: "none", background: colors.background, color: colors.textPrimary, boxSizing: "border-box" }} />
                            <button onClick={() => setShow(!show)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                              {show ? <EyeOff size={16} color={colors.textMuted} /> : <Eye size={16} color={colors.textMuted} />}
                            </button>
                          </div>
                          {key === "newPass" && passwords.newPass && (
                            <div style={{ marginTop: 6 }}>
                              <div style={{ height: 4, borderRadius: 2, background: colors.surface, overflow: "hidden" }}>
                                <div style={{ width: `${pStrength.pct}%`, height: "100%", background: pStrength.color, transition: "all 0.3s" }} />
                              </div>
                              <span style={{ fontSize: 11, color: pStrength.color, fontWeight: 600 }}>{pStrength.label}</span>
                            </div>
                          )}
                        </div>
                      ))}
                      <button onClick={handlePasswordSave}
                        style={{ width: "100%", padding: "12px 0", borderRadius: 12, border: "none", background: colors.primary, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", marginTop: 4 }}>
                        {tr("Update Password")}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ── NOTIFICATIONS ── */}
            {activeSection === sec.id && sec.id === "notifications" && (
              <div style={{ background: colors.card, borderRadius: "0 0 16px 16px", padding: "8px 18px 18px", marginTop: -8, border: `1px solid ${colors.border}`, borderTop: "none" }}>
                {/* Master toggles */}
                <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
                  {[{ key: "pushMaster", label: "Push", icon: Bell }, { key: "emailMaster", label: "Email", icon: Mail }].map(t => (
                    <button key={t.key} onClick={() => toggleNotif(t.key)} style={{
                      flex: 1, padding: "12px 14px", borderRadius: 12,
                      border: `1.5px solid ${notifications[t.key] ? colors.primary : colors.border}`,
                      background: notifications[t.key] ? colors.primaryLight : "#fff",
                      display: "flex", alignItems: "center", gap: 8, cursor: "pointer"
                    }}>
                      <t.icon size={16} color={notifications[t.key] ? colors.primary : colors.textMuted} />
                      <span style={{ fontSize: 13, fontWeight: 600, color: notifications[t.key] ? colors.primary : colors.textSecondary }}>{t.label}</span>
                      <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 700, color: notifications[t.key] ? colors.success : colors.textMuted }}>{notifications[t.key] ? "ON" : "OFF"}</span>
                    </button>
                  ))}
                </div>

                <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 10 }}>Categories</div>
                {[
                  { key: "workoutReminders",  icon: Dumbbell,      iconColor: colors.primary, label: tr("Workout Reminders"),  desc: tr("Session starts & reminders") },
                  { key: "nutritionReminders", icon: Apple,         iconColor: colors.success,  label: tr("Nutrition Reminders"), desc: tr("Meal logging reminders") },
                  { key: "messages",           icon: MessageSquare, iconColor: "#8B5CF6",       label: tr("Coach Messages"),      desc: tr("Messages from your coach") },
                  { key: "coachUpdates",       icon: Bell,          iconColor: "#F59E0B",       label: tr("Plan Updates"),        desc: tr("When coach updates your plan") },
                  { key: "achievements",       icon: Award,         iconColor: colors.warning,  label: tr("Achievements"),        desc: tr("Badges and milestones") },
                ].map(item => (
                  <div key={item.key} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: `1px solid ${colors.surface}` }}>
                    <div style={{ width: 34, height: 34, borderRadius: 9, background: `${item.iconColor}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <item.icon size={16} color={item.iconColor} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>{item.label}</div>
                      <div style={{ fontSize: 11, color: colors.textSecondary, marginTop: 1 }}>{item.desc}</div>
                    </div>
                    <ToggleSwitch on={notifications[item.key]} onToggle={() => toggleNotif(item.key)} />
                  </div>
                ))}

                {/* Do Not Disturb */}
                <div style={{ marginTop: 14, padding: 14, background: colors.surface, borderRadius: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: notifications.dndEnabled ? 12 : 0 }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>Do Not Disturb</div>
                      <div style={{ fontSize: 11, color: colors.textSecondary, marginTop: 1 }}>Silence all notifications</div>
                    </div>
                    <ToggleSwitch on={notifications.dndEnabled} onToggle={() => toggleNotif("dndEnabled")} />
                  </div>
                  {notifications.dndEnabled && (
                    <div style={{ display: "flex", gap: 10 }}>
                      {[{ label: "From", key: "dndStart" }, { label: "To", key: "dndEnd" }].map(({ label, key }) => (
                        <div key={key} style={{ flex: 1 }}>
                          <div style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, marginBottom: 5 }}>{label}</div>
                          <input type="time" value={notifications[key]} onChange={e => setNotifications(p => ({ ...p, [key]: e.target.value }))}
                            style={{ width: "100%", height: 38, borderRadius: 8, border: `1.5px solid ${colors.border}`, padding: "0 10px", fontSize: 13, outline: "none", background: "#fff", color: colors.textPrimary, boxSizing: "border-box" }} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ── APP PREFERENCES ── */}
            {activeSection === sec.id && sec.id === "preferences" && (
              <div style={{ background: colors.card, borderRadius: "0 0 16px 16px", padding: "8px 18px 18px", marginTop: -8, border: `1px solid ${colors.border}`, borderTop: "none" }}>
                {/* Theme */}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 10 }}>{tr("Theme")}</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[{ key: "light", icon: Sun, label: tr("Light") }, { key: "dark", icon: Moon, label: tr("Dark") }].map(t => (
                      <button key={t.key} onClick={() => setPreferences(p => ({ ...p, theme: t.key }))} style={{
                        flex: 1, padding: "10px 0", borderRadius: 12,
                        border: `2px solid ${preferences.theme === t.key ? colors.primary : colors.border}`,
                        background: preferences.theme === t.key ? colors.primaryLight : "#fff",
                        display: "flex", flexDirection: "column", alignItems: "center", gap: 5, cursor: "pointer"
                      }}>
                        <t.icon size={18} color={preferences.theme === t.key ? colors.primary : colors.textMuted} />
                        <span style={{ fontSize: 11, fontWeight: 600, color: preferences.theme === t.key ? colors.primary : colors.textSecondary }}>{t.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Units */}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 10 }}>{tr("Units")}</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[{ key: "metric", label: tr("Metric"), sub: tr("kg / km / °C") }, { key: "imperial", label: tr("Imperial"), sub: tr("lbs / mi / °F") }].map(u => (
                      <button key={u.key} onClick={() => setPreferences(p => ({ ...p, units: u.key }))} style={{
                        flex: 1, padding: "12px 10px", borderRadius: 12,
                        border: `2px solid ${preferences.units === u.key ? colors.primary : colors.border}`,
                        background: preferences.units === u.key ? colors.primaryLight : "#fff",
                        cursor: "pointer", textAlign: "center"
                      }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: preferences.units === u.key ? colors.primary : colors.textPrimary }}>{u.label}</div>
                        <div style={{ fontSize: 10, color: colors.textMuted, marginTop: 2 }}>{u.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Language */}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 10 }}>{tr("Language")}</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[{ key: "English", label: "🇺🇸 English" }, { key: "Arabic", label: "🇸🇦 العربية" }].map(lang => (
                      <button key={lang.key} onClick={() => { setPreferences(p => ({ ...p, language: lang.key })); onLanguageChange && onLanguageChange(lang.key); onShowToast(lang.key === "Arabic" ? tr("Language changed to Arabic") : tr("Language changed to English"), "success"); }} style={{
                        flex: 1, padding: "12px 10px", borderRadius: 12,
                        border: `2px solid ${preferences.language === lang.key ? colors.primary : colors.border}`,
                        background: preferences.language === lang.key ? colors.primaryLight : "#fff",
                        cursor: "pointer", fontSize: 13, fontWeight: 600,
                        color: preferences.language === lang.key ? colors.primary : colors.textPrimary
                      }}>
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── SECURITY & PRIVACY ── */}
            {activeSection === sec.id && sec.id === "security" && (
              <div style={{ background: colors.card, borderRadius: "0 0 16px 16px", padding: "8px 18px 18px", marginTop: -8, border: `1px solid ${colors.border}`, borderTop: "none" }}>
                {/* 2FA */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 0", borderBottom: `1px solid ${colors.surface}` }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: `${colors.success}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Shield size={16} color={colors.success} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>Two-Factor Authentication</div>
                    <div style={{ fontSize: 11, color: twoFactor ? colors.success : colors.textMuted, marginTop: 1 }}>{twoFactor ? "Enabled — your account is protected" : "Add an extra layer of security"}</div>
                  </div>
                  <ToggleSwitch on={twoFactor} onToggle={() => { setTwoFactor(!twoFactor); onShowToast(twoFactor ? "2FA disabled" : "2FA enabled", twoFactor ? "error" : "success"); }} />
                </div>

                {/* Delete Account */}
                <button onClick={() => setShowDeleteConfirm(true)} style={{ width: "100%", padding: "14px 0", display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: `${colors.error}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Trash2 size={16} color={colors.error} />
                  </div>
                  <div style={{ flex: 1, textAlign: "left" }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: colors.error }}>Delete Account</div>
                    <div style={{ fontSize: 11, color: colors.textSecondary, marginTop: 1 }}>Permanently remove your account and data</div>
                  </div>
                  <ChevronRight size={16} color={colors.error} />
                </button>

                {showDeleteConfirm && (
                  <div style={{ marginTop: 12, padding: 16, background: `${colors.error}08`, borderRadius: 12, border: `1px solid ${colors.error}25` }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: colors.error, marginBottom: 6 }}>Are you sure?</div>
                    <div style={{ fontSize: 12, color: colors.textSecondary, marginBottom: 14 }}>This action is permanent and cannot be undone. All your data will be deleted.</div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => setShowDeleteConfirm(false)} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: `1px solid ${colors.border}`, background: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Cancel</button>
                      <button onClick={() => { onShowToast("Account deleted", "error"); onLogout(); }} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: "none", background: colors.error, color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Delete</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Logout */}
      <button onClick={onLogout} style={{ width: "100%", marginTop: 20, padding: "14px 0", borderRadius: 14, border: `1.5px solid ${colors.error}30`, background: `${colors.error}06`, fontSize: 14, fontWeight: 700, color: colors.error, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <LogOut size={16} /> {tr("Log Out")}
      </button>
      <div style={{ textAlign: "center", marginTop: 16, fontSize: 11, color: colors.textMuted }}>guider. v2.4.1 · Made with ❤️</div>
    </div>
  );
}

function CoachSettings({ onShowToast, onNavigate, onLogout, onLanguageChange, currentLanguage = "English" }) {
  const [activeSection, setActiveSection] = useState(null);
  const [profile, setProfile] = useState({
    name: "Coach Mike", email: "mike@fitcoach.pro", phone: "+1 (555) 123-4567",
    bio: "Certified PT with 8+ years experience in strength & conditioning.",
    avatar: null
  });
  const [editField, setEditField] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Credentials (certification, champions, transformations)
  const [certifications, setCertifications] = useState([
    { id: 1, title: "NASM Certified Personal Trainer", year: "2018", image: null },
    { id: 2, title: "CrossFit Level 2 Trainer", year: "2020", image: null },
  ]);
  const [champions, setChampions] = useState([
    { id: 1, title: "Regional Bodybuilding 1st Place", year: "2019", image: null },
  ]);
  const [transformations, setTransformations] = useState([
    { id: 1, title: "Client lost 30kg in 6 months", image: null },
    { id: 2, title: "Client gained 12kg muscle in 8 months", image: null },
  ]);
  const [showAddCredential, setShowAddCredential] = useState(null); // "cert" | "champ" | "transform" | null
  const [newCredTitle, setNewCredTitle] = useState("");
  const [newCredYear, setNewCredYear] = useState("");

  const addCredential = (type) => {
    if (!newCredTitle.trim()) return;
    const item = { id: Date.now(), title: newCredTitle.trim(), year: newCredYear.trim(), image: null };
    if (type === "cert") setCertifications(p => [...p, item]);
    else if (type === "champ") setChampions(p => [...p, item]);
    else setTransformations(p => [...p, item]);
    setNewCredTitle(""); setNewCredYear(""); setShowAddCredential(null);
    onShowToast("Added successfully", "success");
  };

  const removeCredential = (type, id) => {
    if (type === "cert") setCertifications(p => p.filter(c => c.id !== id));
    else if (type === "champ") setChampions(p => p.filter(c => c.id !== id));
    else setTransformations(p => p.filter(c => c.id !== id));
  };

  // Password
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwords, setPasswords] = useState({ current: "", newPass: "", confirm: "" });
  const [showPassCurrent, setShowPassCurrent] = useState(false);
  const [showPassNew, setShowPassNew] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

  // Notifications
  const [notifications, setNotifications] = useState({
    pushMaster: true, emailMaster: true,
    workoutReminders: true, messages: true, scheduleChanges: true,
    systemUpdates: true, marketing: false,
    dndEnabled: false, dndStart: "22:00", dndEnd: "07:00"
  });

  // Preferences
  const [preferences, setPreferences] = useState({
    theme: "light", units: "metric", language: currentLanguage, calendarStart: "Monday", defaultView: "dashboard"
  });

  // Subscription
  const [showBillingHistory, setShowBillingHistory] = useState(false);

  // Security
  const [twoFactor, setTwoFactor] = useState(false);
  const [showDevices, setShowDevices] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showExportConfirm, setShowExportConfirm] = useState(false);

  const profileCompletion = () => {
    let filled = 0;
    if (profile.name) filled++;
    if (profile.email) filled++;
    if (profile.phone) filled++;
    if (profile.bio) filled++;
    if (profile.avatar) filled++;
    return Math.round((filled / 5) * 100);
  };

  const toggleNotif = (key) => setNotifications(p => ({ ...p, [key]: !p[key] }));

  const ToggleSwitch = ({ on, onToggle }) => (
    <button onClick={onToggle} style={{
      width: 48, height: 28, borderRadius: 14, border: "none",
      background: on ? colors.primary : colors.border,
      position: "relative", cursor: "pointer", transition: "background 0.2s", flexShrink: 0
    }}>
      <div style={{
        width: 22, height: 22, borderRadius: 11, background: "#fff",
        position: "absolute", top: 3, left: on ? 23 : 3,
        transition: "left 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.15)"
      }} />
    </button>
  );

  const SectionHeader = ({ icon: Icon, iconColor, title, subtitle, isOpen, onToggle }) => (
    <button onClick={onToggle} style={{
      width: "100%", background: colors.card, borderRadius: 16, padding: "16px 18px",
      border: `1px solid ${isOpen ? colors.primary : colors.border}`,
      display: "flex", alignItems: "center", gap: 14, cursor: "pointer",
      boxShadow: isOpen ? "0 2px 12px rgba(79,70,229,0.1)" : "0 1px 3px rgba(0,0,0,0.04)",
      transition: "all 0.2s"
    }}>
      <div style={{
        width: 42, height: 42, borderRadius: 12,
        background: isOpen ? `${iconColor}15` : colors.surface,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
      }}>
        <Icon size={20} color={isOpen ? iconColor : colors.textMuted} />
      </div>
      <div style={{ flex: 1, textAlign: "left" }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: colors.textPrimary }}>{title}</div>
        <div style={{ fontSize: 12, color: colors.textSecondary, marginTop: 1 }}>{subtitle}</div>
      </div>
      {isOpen ? <ChevronUp size={18} color={colors.primary} /> : <ChevronDown size={18} color={colors.textMuted} />}
    </button>
  );

  const SettingRow = ({ icon: Icon, iconColor, label, value, onClick, rightElement }) => (
    <button onClick={onClick} style={{
      width: "100%", padding: "14px 0", display: "flex", alignItems: "center", gap: 12,
      background: "none", border: "none", borderBottom: `1px solid ${colors.surface}`,
      cursor: onClick ? "pointer" : "default", textAlign: "left"
    }}>
      <div style={{ width: 34, height: 34, borderRadius: 9, background: `${iconColor || colors.primary}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={16} color={iconColor || colors.primary} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>{label}</div>
        {value && <div style={{ fontSize: 12, color: colors.textSecondary, marginTop: 1 }}>{value}</div>}
      </div>
      {rightElement || (onClick && <ChevronRight size={16} color={colors.textMuted} />)}
    </button>
  );

  const sections = [
    { id: "account", icon: User, iconColor: colors.primary, title: tr("Account Information"), subtitle: tr("Profile, email, password") },
    { id: "notifications", icon: Bell, iconColor: "#F59E0B", title: tr("Notifications"), subtitle: tr("Push, email, Do Not Disturb") },
    { id: "preferences", icon: Settings, iconColor: "#8B5CF6", title: tr("App Preferences"), subtitle: tr("Theme, units, language") },
    { id: "subscription", icon: CreditCard, iconColor: colors.success, title: tr("Subscription & Billing"), subtitle: tr("Pro Plan · Renews Mar 15") },
    { id: "security", icon: Shield, iconColor: colors.error, title: tr("Security & Privacy"), subtitle: tr("2FA, devices, data") },
  ];

  const billingHistory = [
    { date: "Feb 1, 2026", amount: "$29.99", status: "Paid", desc: "Pro Plan - Monthly" },
    { date: "Jan 1, 2026", amount: "$29.99", status: "Paid", desc: "Pro Plan - Monthly" },
    { date: "Dec 1, 2025", amount: "$29.99", status: "Paid", desc: "Pro Plan - Monthly" },
    { date: "Nov 1, 2025", amount: "$29.99", status: "Paid", desc: "Pro Plan - Monthly" },
  ];

  const devices = [
    { name: "iPhone 15 Pro", browser: "Safari", location: "New York, US", lastActive: "Active now", current: true },
    { name: "MacBook Pro", browser: "Chrome 120", location: "New York, US", lastActive: "2 hours ago", current: false },
    { name: "iPad Air", browser: "Safari", location: "New York, US", lastActive: "3 days ago", current: false },
  ];

  const passwordStrength = (pass) => {
    if (!pass) return { label: "", color: colors.border, pct: 0 };
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    if (pass.length >= 12) score++;
    if (score <= 1) return { label: "Weak", color: colors.error, pct: 20 };
    if (score <= 2) return { label: "Fair", color: colors.warning, pct: 40 };
    if (score <= 3) return { label: "Good", color: "#F59E0B", pct: 60 };
    if (score <= 4) return { label: "Strong", color: colors.success, pct: 80 };
    return { label: "Very Strong", color: colors.success, pct: 100 };
  };

  const startEdit = (field) => {
    setEditField(field);
    setEditValue(profile[field]);
  };

  const saveEdit = () => {
    if (editValue.trim()) {
      setProfile(p => ({ ...p, [editField]: editValue.trim() }));
      onShowToast(`${editField.charAt(0).toUpperCase() + editField.slice(1)} updated`, "success");
    }
    setEditField(null);
  };

  const handlePasswordSave = () => {
    if (!passwords.current) { onShowToast("Enter current password", "error"); return; }
    if (passwords.newPass.length < 8) { onShowToast("Password must be at least 8 characters", "error"); return; }
    if (passwords.newPass !== passwords.confirm) { onShowToast("Passwords do not match", "error"); return; }
    onShowToast("Password updated successfully", "success");
    setPasswords({ current: "", newPass: "", confirm: "" });
    setShowPasswordForm(false);
  };

  const pCompletion = profileCompletion();
  const pStrength = passwordStrength(passwords.newPass);

  return (
    <div style={{ padding: "0 20px 20px" }}>
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: colors.textPrimary, letterSpacing: -0.5, marginBottom: 4 }}>{tr("Settings")}</h1>
        <p style={{ fontSize: 14, color: colors.textSecondary }}>{tr("Manage your account & preferences")}</p>
      </div>

      {/* Profile Quick Card */}
      <div style={{ background: colors.card, borderRadius: 18, padding: 18, border: `1px solid ${colors.border}`, marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 16, background: gradients.workout,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, fontWeight: 800, color: "#fff", position: "relative"
          }}>
            {profile.avatar ? <img src={profile.avatar} alt="" style={{ width: "100%", height: "100%", borderRadius: 16, objectFit: "cover" }} /> : profile.name.split(" ").map(w => w[0]).join("")}
            <div style={{
              position: "absolute", bottom: -2, right: -2, width: 20, height: 20,
              borderRadius: "50%", background: colors.primary, border: "2px solid #fff",
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
            }}>
              <Camera size={10} color="#fff" />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: colors.textPrimary }}>{profile.name}</div>
            <div style={{ fontSize: 13, color: colors.textSecondary }}>{profile.email}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: colors.success, background: colors.successLight, padding: "2px 8px", borderRadius: 6 }}>Pro Plan</div>
            </div>
          </div>
        </div>
        {/* Profile Completion */}
        <div style={{ marginTop: 4 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: colors.textSecondary }}>{tr("Profile Completion")}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: pCompletion === 100 ? colors.success : colors.primary }}>{pCompletion}%</span>
          </div>
          <div style={{ background: colors.surface, borderRadius: 4, height: 6, overflow: "hidden" }}>
            <div style={{ width: `${pCompletion}%`, height: "100%", background: pCompletion === 100 ? colors.success : colors.primary, borderRadius: 4, transition: "width 0.5s ease" }} />
          </div>
          {pCompletion < 100 && <p style={{ fontSize: 11, color: colors.textMuted, marginTop: 4 }}>Add a profile photo to reach 100%</p>}
        </div>
      </div>

      {/* Settings Sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {sections.map(sec => (
          <div key={sec.id}>
            <SectionHeader
              icon={sec.icon} iconColor={sec.iconColor}
              title={sec.title} subtitle={sec.subtitle}
              isOpen={activeSection === sec.id}
              onToggle={() => setActiveSection(activeSection === sec.id ? null : sec.id)}
            />

            {/* ── ACCOUNT INFORMATION ── */}
            {activeSection === sec.id && sec.id === "account" && (
              <div style={{ background: colors.card, borderRadius: "0 0 16px 16px", padding: "4px 18px 18px", marginTop: -8, border: `1px solid ${colors.border}`, borderTop: "none" }}>
                {/* Editable Fields */}
                {[
                  { key: "name", icon: User, label: "Full Name" },
                  { key: "email", icon: Mail, label: "Email Address" },
                  { key: "phone", icon: Smartphone, label: "Phone Number" },
                  { key: "bio", icon: FileText, label: "Bio" },
                ].map(f => (
                  <div key={f.key} style={{ padding: "12px 0", borderBottom: `1px solid ${colors.surface}` }}>
                    {editField === f.key ? (
                      <div>
                        <label style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.5 }}>{f.label}</label>
                        <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                          {f.key === "bio" ? (
                            <textarea
                              value={editValue} onChange={e => setEditValue(e.target.value)}
                              rows={3}
                              style={{ flex: 1, padding: "10px 14px", borderRadius: 10, border: `1.5px solid ${colors.primary}`, fontSize: 14, fontFamily: "inherit", resize: "none", outline: "none" }}
                            />
                          ) : (
                            <input
                              type={f.key === "email" ? "email" : "text"} value={editValue}
                              onChange={e => setEditValue(e.target.value)}
                              style={{ flex: 1, padding: "10px 14px", borderRadius: 10, border: `1.5px solid ${colors.primary}`, fontSize: 14, outline: "none" }}
                              autoFocus
                            />
                          )}
                          <button onClick={saveEdit} style={{ padding: "0 14px", borderRadius: 10, background: colors.primary, border: "none", color: "#fff", cursor: "pointer" }}>
                            <Check size={16} />
                          </button>
                          <button onClick={() => setEditField(null)} style={{ padding: "0 14px", borderRadius: 10, background: colors.surface, border: "none", cursor: "pointer" }}>
                            <X size={16} color={colors.textMuted} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 34, height: 34, borderRadius: 9, background: `${colors.primary}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <f.icon size={16} color={colors.primary} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.5 }}>{f.label}</div>
                          <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary, marginTop: 1 }}>{profile[f.key]}</div>
                        </div>
                        <button onClick={() => startEdit(f.key)} style={{ background: colors.surface, border: "none", borderRadius: 8, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                          <Edit3 size={14} color={colors.textSecondary} />
                        </button>
                      </div>
                    )}
                  </div>
                ))}

                {/* Change Password */}
                <div style={{ marginTop: 16 }}>
                  <button onClick={() => setShowPasswordForm(!showPasswordForm)} style={{
                    width: "100%", padding: "12px 16px", borderRadius: 12,
                    border: `1.5px solid ${showPasswordForm ? colors.primary : colors.border}`,
                    background: showPasswordForm ? colors.primaryLight : "#fff",
                    display: "flex", alignItems: "center", gap: 10, cursor: "pointer",
                    fontSize: 14, fontWeight: 600, color: colors.textPrimary
                  }}>
                    <Lock size={16} color={colors.primary} />
                    Change Password
                    <span style={{ marginLeft: "auto" }}>
                      {showPasswordForm ? <ChevronUp size={16} color={colors.primary} /> : <ChevronDown size={16} color={colors.textMuted} />}
                    </span>
                  </button>

                  {showPasswordForm && (
                    <div style={{ padding: "16px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
                      {/* Current Password */}
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 600, color: colors.textSecondary, display: "block", marginBottom: 4 }}>{tr("Current Password")}</label>
                        <div style={{ position: "relative" }}>
                          <input
                            type={showPassCurrent ? "text" : "password"}
                            value={passwords.current} onChange={e => setPasswords(p => ({ ...p, current: e.target.value }))}
                            placeholder="Enter current password"
                            style={{ width: "100%", padding: "10px 42px 10px 14px", borderRadius: 10, border: `1.5px solid ${colors.border}`, fontSize: 14, outline: "none", boxSizing: "border-box" }}
                          />
                          <button onClick={() => setShowPassCurrent(!showPassCurrent)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                            {showPassCurrent ? <EyeOff size={16} color={colors.textMuted} /> : <Eye size={16} color={colors.textMuted} />}
                          </button>
                        </div>
                      </div>
                      {/* New Password */}
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 600, color: colors.textSecondary, display: "block", marginBottom: 4 }}>{tr("New Password")}</label>
                        <div style={{ position: "relative" }}>
                          <input
                            type={showPassNew ? "text" : "password"}
                            value={passwords.newPass} onChange={e => setPasswords(p => ({ ...p, newPass: e.target.value }))}
                            placeholder="At least 8 characters"
                            style={{ width: "100%", padding: "10px 42px 10px 14px", borderRadius: 10, border: `1.5px solid ${colors.border}`, fontSize: 14, outline: "none", boxSizing: "border-box" }}
                          />
                          <button onClick={() => setShowPassNew(!showPassNew)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                            {showPassNew ? <EyeOff size={16} color={colors.textMuted} /> : <Eye size={16} color={colors.textMuted} />}
                          </button>
                        </div>
                        {/* Strength Meter */}
                        {passwords.newPass && (
                          <div style={{ marginTop: 6 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                              <span style={{ fontSize: 11, color: colors.textMuted }}>{tr("Password Strength")}</span>
                              <span style={{ fontSize: 11, fontWeight: 700, color: pStrength.color }}>{pStrength.label}</span>
                            </div>
                            <div style={{ background: colors.surface, borderRadius: 3, height: 4, overflow: "hidden" }}>
                              <div style={{ width: `${pStrength.pct}%`, height: "100%", background: pStrength.color, borderRadius: 3, transition: "all 0.3s ease" }} />
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Confirm Password */}
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 600, color: colors.textSecondary, display: "block", marginBottom: 4 }}>{tr("Confirm New Password")}</label>
                        <div style={{ position: "relative" }}>
                          <input
                            type={showPassConfirm ? "text" : "password"}
                            value={passwords.confirm} onChange={e => setPasswords(p => ({ ...p, confirm: e.target.value }))}
                            placeholder="Re-enter new password"
                            style={{
                              width: "100%", padding: "10px 42px 10px 14px", borderRadius: 10, fontSize: 14, outline: "none", boxSizing: "border-box",
                              border: `1.5px solid ${passwords.confirm && passwords.confirm !== passwords.newPass ? colors.error : colors.border}`
                            }}
                          />
                          <button onClick={() => setShowPassConfirm(!showPassConfirm)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                            {showPassConfirm ? <EyeOff size={16} color={colors.textMuted} /> : <Eye size={16} color={colors.textMuted} />}
                          </button>
                        </div>
                        {passwords.confirm && passwords.confirm !== passwords.newPass && (
                          <p style={{ fontSize: 11, color: colors.error, marginTop: 4 }}>{tr("Passwords do not match")}</p>
                        )}
                      </div>
                      {/* Save Button */}
                      <button onClick={handlePasswordSave} style={{
                        width: "100%", padding: "12px 0", borderRadius: 12, border: "none",
                        background: colors.primary, color: "#fff", fontSize: 14, fontWeight: 700,
                        cursor: "pointer", marginTop: 4, boxShadow: "0 4px 14px rgba(52,211,153,0.25)"
                      }}>
                        Update Password
                      </button>
                    </div>
                  )}
                </div>

                {/* ── Credentials: Certification, Champions, Transformations ── */}
                <div style={{ marginTop: 20, borderTop: `1px solid ${colors.border}`, paddingTop: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary, marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                    <Award size={15} color={colors.primary} /> Professional Credentials
                  </div>

                  {[
                    { type: "cert", label: "Certifications", icon: Shield, items: certifications, color: "#34D399" },
                    { type: "champ", label: "Championships & Awards", icon: Award, items: champions, color: "#F59E0B" },
                    { type: "transform", label: "Proven Transformations", icon: TrendingUp, items: transformations, color: "#10B981" },
                  ].map(section => (
                    <div key={section.type} style={{ marginBottom: 16 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <section.icon size={13} color={section.color} />
                          <span style={{ fontSize: 12, fontWeight: 700, color: colors.textSecondary }}>{section.label}</span>
                          <span style={{ fontSize: 10, background: colors.surface, padding: "1px 6px", borderRadius: 5, fontWeight: 600, color: colors.textMuted }}>{section.items.length}</span>
                        </div>
                        <button onClick={() => { setShowAddCredential(showAddCredential === section.type ? null : section.type); setNewCredTitle(""); setNewCredYear(""); }}
                          style={{ fontSize: 11, fontWeight: 700, color: section.color, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 3 }}>
                          <Plus size={13} /> Add
                        </button>
                      </div>

                      {section.items.map(item => (
                        <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: colors.surface, borderRadius: 10, marginBottom: 6, border: `1px solid ${colors.border}` }}>
                          <div style={{ width: 40, height: 40, borderRadius: 8, background: item.image ? "transparent" : `${section.color}12`, display: "flex", alignItems: "center", justifyContent: "center", border: `1.5px dashed ${section.color}40`, cursor: "pointer", flexShrink: 0, overflow: "hidden", position: "relative" }}>
                            {item.image ? (
                              <img src={item.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            ) : (
                              <Upload size={14} color={section.color} />
                            )}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 12, fontWeight: 600, color: colors.textPrimary }}>{item.title}</div>
                            {item.year && <div style={{ fontSize: 10, color: colors.textMuted }}>{item.year}</div>}
                          </div>
                          <button onClick={() => removeCredential(section.type, item.id)}
                            style={{ width: 24, height: 24, borderRadius: 6, background: colors.errorLight, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <X size={12} color={colors.error} />
                          </button>
                        </div>
                      ))}

                      {showAddCredential === section.type && (
                        <div style={{ padding: 12, background: `${section.color}06`, borderRadius: 10, border: `1px solid ${section.color}20`, marginTop: 6 }}>
                          <input value={newCredTitle} onChange={e => setNewCredTitle(e.target.value)}
                            placeholder={section.type === "cert" ? "Certification name..." : section.type === "champ" ? "Championship / Award title..." : "Transformation description..."}
                            style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: `1.5px solid ${section.color}30`, fontSize: 12, outline: "none", marginBottom: 6, boxSizing: "border-box" }} />
                          {section.type !== "transform" && (
                            <input value={newCredYear} onChange={e => setNewCredYear(e.target.value)}
                              placeholder="Year (e.g., 2023)"
                              style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: `1.5px solid ${section.color}30`, fontSize: 12, outline: "none", marginBottom: 8, boxSizing: "border-box" }} />
                          )}
                          <div style={{ display: "flex", gap: 8 }}>
                            <button style={{ flex: 1, padding: "8px 0", borderRadius: 8, border: `1.5px dashed ${section.color}40`, background: "transparent", fontSize: 11, fontWeight: 600, color: section.color, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                              <Upload size={12} /> Upload Photo
                            </button>
                            <button onClick={() => addCredential(section.type)}
                              style={{ flex: 1, padding: "8px 0", borderRadius: 8, border: "none", background: section.color, color: "#fff", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                              Save
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── NOTIFICATIONS ── */}
            {activeSection === sec.id && sec.id === "notifications" && (
              <div style={{ background: colors.card, borderRadius: "0 0 16px 16px", padding: "8px 18px 18px", marginTop: -8, border: `1px solid ${colors.border}`, borderTop: "none" }}>
                {/* Master Toggles */}
                <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
                  {[
                    { key: "pushMaster", label: "Push", icon: Bell },
                    { key: "emailMaster", label: "Email", icon: Mail },
                  ].map(t => (
                    <button key={t.key} onClick={() => toggleNotif(t.key)} style={{
                      flex: 1, padding: "12px 14px", borderRadius: 12,
                      border: `1.5px solid ${notifications[t.key] ? colors.primary : colors.border}`,
                      background: notifications[t.key] ? colors.primaryLight : "#fff",
                      display: "flex", alignItems: "center", gap: 8, cursor: "pointer"
                    }}>
                      <t.icon size={16} color={notifications[t.key] ? colors.primary : colors.textMuted} />
                      <span style={{ fontSize: 13, fontWeight: 600, color: notifications[t.key] ? colors.primary : colors.textSecondary }}>{t.label}</span>
                      <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 700, color: notifications[t.key] ? colors.success : colors.textMuted }}>
                        {notifications[t.key] ? "ON" : "OFF"}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Category Toggles */}
                <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 10 }}>Notification Categories</div>
                {[
                  { key: "workoutReminders", icon: Dumbbell, iconColor: colors.primary, label: "Workout Reminders", desc: "Session starts, plan completions" },
                  { key: "messages", icon: MessageSquare, iconColor: "#8B5CF6", label: "Messages", desc: "New messages from trainees" },
                  { key: "scheduleChanges", icon: Calendar, iconColor: colors.warning, label: "Schedule Changes", desc: "Cancellations, reschedules" },
                  { key: "systemUpdates", icon: RefreshCw, iconColor: colors.success, label: "System Updates", desc: "App updates, maintenance" },
                  { key: "marketing", icon: Star, iconColor: "#F97316", label: "Tips & Promotions", desc: "Coach tips, feature announcements" },
                ].map(n => (
                  <div key={n.key} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: `1px solid ${colors.surface}` }}>
                    <div style={{ width: 34, height: 34, borderRadius: 9, background: `${n.iconColor}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <n.icon size={16} color={n.iconColor} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>{n.label}</div>
                      <div style={{ fontSize: 11, color: colors.textSecondary }}>{n.desc}</div>
                    </div>
                    <ToggleSwitch on={notifications[n.key]} onToggle={() => toggleNotif(n.key)} />
                  </div>
                ))}

                {/* Do Not Disturb */}
                <div style={{ marginTop: 16, padding: 14, background: colors.surface, borderRadius: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: notifications.dndEnabled ? 12 : 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <Moon size={16} color="#8B5CF6" />
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>{tr("Do Not Disturb")}</div>
                        <div style={{ fontSize: 11, color: colors.textSecondary }}>Silence all notifications</div>
                      </div>
                    </div>
                    <ToggleSwitch on={notifications.dndEnabled} onToggle={() => toggleNotif("dndEnabled")} />
                  </div>
                  {notifications.dndEnabled && (
                    <div style={{ display: "flex", gap: 10 }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, display: "block", marginBottom: 4 }}>From</label>
                        <input type="time" value={notifications.dndStart}
                          onChange={e => setNotifications(p => ({ ...p, dndStart: e.target.value }))}
                          style={{ width: "100%", padding: "8px 10px", borderRadius: 8, border: `1px solid ${colors.border}`, fontSize: 13, boxSizing: "border-box" }}
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, display: "block", marginBottom: 4 }}>To</label>
                        <input type="time" value={notifications.dndEnd}
                          onChange={e => setNotifications(p => ({ ...p, dndEnd: e.target.value }))}
                          style={{ width: "100%", padding: "8px 10px", borderRadius: 8, border: `1px solid ${colors.border}`, fontSize: 13, boxSizing: "border-box" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ── APP PREFERENCES ── */}
            {activeSection === sec.id && sec.id === "preferences" && (
              <div style={{ background: colors.card, borderRadius: "0 0 16px 16px", padding: "8px 18px 18px", marginTop: -8, border: `1px solid ${colors.border}`, borderTop: "none" }}>
                {/* Theme */}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 10 }}>{tr("Theme")}</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[{ key: "light", icon: Sun, label: tr("Light") }, { key: "dark", icon: Moon, label: tr("Dark") }].map(t => (
                      <button key={t.key} onClick={() => setPreferences(p => ({ ...p, theme: t.key }))} style={{
                        flex: 1, padding: "10px 0", borderRadius: 12,
                        border: `2px solid ${preferences.theme === t.key ? colors.primary : colors.border}`,
                        background: preferences.theme === t.key ? colors.primaryLight : "#fff",
                        display: "flex", flexDirection: "column", alignItems: "center", gap: 5, cursor: "pointer"
                      }}>
                        <t.icon size={18} color={preferences.theme === t.key ? colors.primary : colors.textMuted} />
                        <span style={{ fontSize: 11, fontWeight: 600, color: preferences.theme === t.key ? colors.primary : colors.textSecondary }}>{t.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Units */}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 10 }}>{tr("Units")}</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[{ key: "metric", label: tr("Metric"), sub: tr("kg / km / °C") }, { key: "imperial", label: tr("Imperial"), sub: tr("lbs / mi / °F") }].map(u => (
                      <button key={u.key} onClick={() => setPreferences(p => ({ ...p, units: u.key }))} style={{
                        flex: 1, padding: "12px 10px", borderRadius: 12,
                        border: `2px solid ${preferences.units === u.key ? colors.primary : colors.border}`,
                        background: preferences.units === u.key ? colors.primaryLight : "#fff",
                        cursor: "pointer", textAlign: "center"
                      }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: preferences.units === u.key ? colors.primary : colors.textPrimary }}>{u.label}</div>
                        <div style={{ fontSize: 10, color: colors.textMuted, marginTop: 2 }}>{u.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Language */}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 10 }}>{tr("Language")}</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[{ key: "English", label: "🇺🇸 English" }, { key: "Arabic", label: "🇸🇦 العربية" }].map(lang => (
                      <button key={lang.key} onClick={() => { setPreferences(p => ({ ...p, language: lang.key })); onLanguageChange && onLanguageChange(lang.key); onShowToast(lang.key === "Arabic" ? tr("Language changed to Arabic") : tr("Language changed to English"), "success"); }} style={{
                        flex: 1, padding: "12px 10px", borderRadius: 12,
                        border: `2px solid ${preferences.language === lang.key ? colors.primary : colors.border}`,
                        background: preferences.language === lang.key ? colors.primaryLight : "#fff",
                        cursor: "pointer", fontSize: 13, fontWeight: 600,
                        color: preferences.language === lang.key ? colors.primary : colors.textPrimary
                      }}>
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── SUBSCRIPTION & BILLING ── */}
            {activeSection === sec.id && sec.id === "subscription" && (
              <div style={{ background: colors.card, borderRadius: "0 0 16px 16px", padding: "8px 18px 18px", marginTop: -8, border: `1px solid ${colors.border}`, borderTop: "none" }}>
                {/* Current Plan */}
                <div style={{
                  background: gradients.workout, borderRadius: 14, padding: 18, marginBottom: 16,
                  position: "relative", overflow: "hidden"
                }}>
                  <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
                  <div style={{ position: "absolute", bottom: -30, left: -10, width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <Star size={18} color="#FFD700" fill="#FFD700" />
                    <span style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>Pro Plan</span>
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 4 }}>$29.99<span style={{ fontSize: 14, fontWeight: 500, opacity: 0.7 }}>/month</span></div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>Next billing: March 15, 2026</div>
                </div>

                {/* Plan Features */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 10 }}>Your Plan Includes</div>
                  {[
                    "Unlimited trainees",
                    "Advanced analytics & reports",
                    "Custom workout templates",
                    "Priority chat support",
                    "Export data (CSV, PDF)",
                    "White-label branding"
                  ].map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
                      <CheckCircle2 size={16} color={colors.success} />
                      <span style={{ fontSize: 13, fontWeight: 500, color: colors.textPrimary }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Payment Method */}
                <div style={{ padding: 14, background: colors.surface, borderRadius: 12, marginBottom: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 40, height: 28, borderRadius: 6, background: "#1A1F71", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "#fff", fontSize: 10, fontWeight: 800, letterSpacing: 1 }}>VISA</span>
                      </div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>•••• •••• •••• 4242</div>
                        <div style={{ fontSize: 11, color: colors.textSecondary }}>Expires 08/2028</div>
                      </div>
                    </div>
                    <button style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
                      <Edit3 size={14} color={colors.primary} />
                    </button>
                  </div>
                </div>

                {/* Billing History Toggle */}
                <button onClick={() => setShowBillingHistory(!showBillingHistory)} style={{
                  width: "100%", padding: "12px 16px", borderRadius: 12,
                  border: `1.5px solid ${colors.border}`, background: "#fff",
                  display: "flex", alignItems: "center", gap: 10, cursor: "pointer",
                  fontSize: 14, fontWeight: 600, color: colors.textPrimary
                }}>
                  <FileText size={16} color={colors.primary} />
                  Billing History
                  <span style={{ marginLeft: "auto" }}>
                    {showBillingHistory ? <ChevronUp size={16} color={colors.primary} /> : <ChevronDown size={16} color={colors.textMuted} />}
                  </span>
                </button>

                {showBillingHistory && (
                  <div style={{ marginTop: 8 }}>
                    {billingHistory.map((b, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: i < billingHistory.length - 1 ? `1px solid ${colors.surface}` : "none" }}>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{b.desc}</div>
                          <div style={{ fontSize: 11, color: colors.textSecondary }}>{tr(b.date)}</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{b.amount}</div>
                          <div style={{ fontSize: 10, fontWeight: 600, color: colors.success, background: colors.successLight, padding: "1px 6px", borderRadius: 4 }}>{b.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Manage Subscription Buttons */}
                <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                  <button style={{
                    flex: 1, padding: "10px 0", borderRadius: 10, border: `1.5px solid ${colors.primary}`,
                    background: "#fff", fontSize: 13, fontWeight: 600, color: colors.primary, cursor: "pointer"
                  }}>
                    Change Plan
                  </button>
                  <button style={{
                    flex: 1, padding: "10px 0", borderRadius: 10, border: `1.5px solid ${colors.border}`,
                    background: "#fff", fontSize: 13, fontWeight: 600, color: colors.textSecondary, cursor: "pointer"
                  }}>
                    Cancel Plan
                  </button>
                </div>
              </div>
            )}

            {/* ── SECURITY & PRIVACY ── */}
            {activeSection === sec.id && sec.id === "security" && (
              <div style={{ background: colors.card, borderRadius: "0 0 16px 16px", padding: "8px 18px 18px", marginTop: -8, border: `1px solid ${colors.border}`, borderTop: "none" }}>
                {/* Two-Factor Authentication */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 0", borderBottom: `1px solid ${colors.surface}` }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: twoFactor ? `${colors.success}15` : `${colors.warning}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Key size={18} color={twoFactor ? colors.success : colors.warning} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>{tr("Two-Factor Authentication")}</div>
                    <div style={{ fontSize: 12, color: twoFactor ? colors.success : colors.warning, fontWeight: 600 }}>
                      {twoFactor ? "Enabled — Authenticator app" : "Not enabled — Recommended"}
                    </div>
                  </div>
                  <ToggleSwitch on={twoFactor} onToggle={() => {
                    setTwoFactor(!twoFactor);
                    onShowToast(twoFactor ? "2FA disabled" : "2FA enabled", twoFactor ? "warning" : "success");
                  }} />
                </div>

                {/* Connected Devices */}
                <div style={{ padding: "14px 0", borderBottom: `1px solid ${colors.surface}` }}>
                  <button onClick={() => setShowDevices(!showDevices)} style={{
                    width: "100%", display: "flex", alignItems: "center", gap: 12,
                    background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0
                  }}>
                    <div style={{ width: 42, height: 42, borderRadius: 11, background: `${colors.primary}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Smartphone size={18} color={colors.primary} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>Connected Devices</div>
                      <div style={{ fontSize: 12, color: colors.textSecondary }}>{devices.length} devices</div>
                    </div>
                    {showDevices ? <ChevronUp size={16} color={colors.primary} /> : <ChevronDown size={16} color={colors.textMuted} />}
                  </button>

                  {showDevices && (
                    <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                      {devices.map((d, i) => (
                        <div key={i} style={{
                          padding: 12, borderRadius: 10, background: colors.surface,
                          border: d.current ? `1.5px solid ${colors.primary}` : "none",
                          display: "flex", alignItems: "center", gap: 12
                        }}>
                          <div style={{ width: 36, height: 36, borderRadius: 9, background: d.current ? colors.primaryLight : "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Smartphone size={16} color={d.current ? colors.primary : colors.textMuted} />
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                              <span style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{d.name}</span>
                              {d.current && <span style={{ fontSize: 9, fontWeight: 700, color: colors.primary, background: colors.primaryLight, padding: "1px 6px", borderRadius: 4 }}>THIS DEVICE</span>}
                            </div>
                            <div style={{ fontSize: 11, color: colors.textSecondary }}>{d.browser} · {d.location}</div>
                            <div style={{ fontSize: 10, color: d.lastActive === "Active now" ? colors.success : colors.textMuted, fontWeight: 600 }}>{d.lastActive}</div>
                          </div>
                          {!d.current && (
                            <button onClick={() => onShowToast("Device removed", "success")} style={{
                              background: `${colors.error}10`, border: "none", borderRadius: 8,
                              padding: "6px 10px", cursor: "pointer", fontSize: 11, fontWeight: 600, color: colors.error
                            }}>
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Active Sessions */}
                <SettingRow icon={Activity} iconColor="#8B5CF6" label="Active Sessions" value="3 sessions" onClick={() => onShowToast("Sessions management opened", "success")} />

                {/* Data Export */}
                <SettingRow icon={Download} iconColor={colors.success} label="Export My Data" value="Download your data as CSV or PDF"
                  onClick={() => setShowExportConfirm(true)} />

                {/* Privacy Policy & ToS */}
                <SettingRow icon={FileText} iconColor={colors.textSecondary} label="Privacy Policy" onClick={() => onShowToast("Privacy policy opened", "success")} />
                <SettingRow icon={FileText} iconColor={colors.textSecondary} label="Terms of Service" onClick={() => onShowToast("Terms opened", "success")} />

                {/* Delete Account */}
                <div style={{ marginTop: 16 }}>
                  <button onClick={() => setShowDeleteConfirm(true)} style={{
                    width: "100%", padding: "14px 0", borderRadius: 12,
                    border: `1.5px solid ${colors.error}`, background: `${colors.error}08`,
                    fontSize: 14, fontWeight: 700, color: colors.error, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8
                  }}>
                    <Trash2 size={16} /> Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* App Info & Logout */}
      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Help & Support */}
        <button onClick={() => onShowToast("Help center opened", "success")} style={{
          width: "100%", padding: "14px 18px", borderRadius: 14,
          border: `1px solid ${colors.border}`, background: colors.card,
          display: "flex", alignItems: "center", gap: 12, cursor: "pointer",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
        }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: `${colors.primary}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <HelpCircle size={18} color={colors.primary} />
          </div>
          <div style={{ flex: 1, textAlign: "left" }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary }}>{tr("Help & Support")}</div>
            <div style={{ fontSize: 12, color: colors.textSecondary }}>FAQ, contact us, report a bug</div>
          </div>
          <ChevronRight size={16} color={colors.textMuted} />
        </button>

        {/* Logout */}
        <button onClick={() => onLogout && onLogout()} style={{
          width: "100%", padding: "14px 18px", borderRadius: 14,
          border: `1px solid ${colors.errorLight}`, background: `${colors.error}06`,
          display: "flex", alignItems: "center", gap: 12, cursor: "pointer"
        }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: `${colors.error}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LogOut size={18} color={colors.error} />
          </div>
          <div style={{ flex: 1, textAlign: "left" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: colors.error }}>{tr("Log Out")}</div>
          </div>
        </button>

        {/* App Version */}
        <div style={{ textAlign: "center", padding: "12px 0" }}>
          <div style={{ fontSize: 11, color: colors.textMuted, fontWeight: 600 }}>guider. v2.4.1</div>
          <div style={{ fontSize: 10, color: colors.textMuted, marginTop: 2 }}>Made with love for coaches everywhere</div>
        </div>
      </div>

      {/* ── Dialogs ── */}
      {showDeleteConfirm && (
        <ConfirmDialog
          title="Delete Account?"
          message="This will permanently delete your account, all trainees, plans, and data. This action cannot be undone."
          onConfirm={() => { setShowDeleteConfirm(false); onShowToast("Account deletion requested", "warning"); }}
          onCancel={() => setShowDeleteConfirm(false)}
        />
      )}
      {showExportConfirm && (
        <ConfirmDialog
          title="Export Your Data"
          message="We'll prepare a downloadable file with all your account data, trainee records, and plan history. You'll receive an email when it's ready."
          onConfirm={() => { setShowExportConfirm(false); onShowToast("Data export started — check your email", "success"); }}
          onCancel={() => setShowExportConfirm(false)}
        />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// Icon Helper Functions
// ═══════════════════════════════════════════════════════

const getVideoIcon = (type) => {
  const iconProps = { size: 20, color: "#fff" };
  switch(type) {
    case "legs": return <Activity {...iconProps} />;
    case "chest": return <Dumbbell {...iconProps} />;
    case "back": return <TrendingUp {...iconProps} />;
    case "shoulder": return <Zap {...iconProps} />;
    case "arms": return <Dumbbell {...iconProps} />;
    case "core": return <Target {...iconProps} />;
    case "cardio": return <Activity {...iconProps} />;
    case "recovery": return <Moon {...iconProps} />;
    case "warmup": return <Flame {...iconProps} />;
    default: return <Dumbbell {...iconProps} />;
  }
};

const getNutritionIcon = (type) => {
  const iconProps = { size: 22 };
  switch(type) {
    case "salad": return <Apple {...iconProps} color={colors.success} />;
    case "bicep": return <Dumbbell {...iconProps} color={colors.error} />;
    case "scale": return <Scale {...iconProps} color={colors.primary} />;
    case "leaf": return <Leaf {...iconProps} color="#D97706" />;
    default: return <Apple {...iconProps} color={colors.primary} />;
  }
};

// ─── Modern Badge Icon Component ───
const BADGE_ICON_MAP = {
  fire:     { Icon: Flame,      gradient: "linear-gradient(135deg, #FF6B35, #EF4444)", glow: "rgba(239,68,68,0.40)",     ring: "#FF6B35" },
  bicep:    { Icon: Dumbbell,   gradient: "linear-gradient(135deg, #34D399, #059669)", glow: "rgba(52,211,153,0.38)",    ring: "#34D399" },
  salad:    { Icon: Leaf,       gradient: "linear-gradient(135deg, #22C55E, #16A34A)", glow: "rgba(34,197,94,0.38)",     ring: "#22C55E" },
  target:   { Icon: Target,     gradient: "linear-gradient(135deg, #F59E0B, #D97706)", glow: "rgba(245,158,11,0.40)",    ring: "#F59E0B" },
  droplets: { Icon: Droplets,   gradient: "linear-gradient(135deg, #38BDF8, #2563EB)", glow: "rgba(56,189,248,0.38)",    ring: "#38BDF8" },
  trophy:   { Icon: Trophy,     gradient: "linear-gradient(135deg, #FBBF24, #F59E0B)", glow: "rgba(251,191,36,0.45)",    ring: "#FBBF24" },
  medal:    { Icon: Award,      gradient: "linear-gradient(135deg, #FBBF24, #F97316)", glow: "rgba(251,191,36,0.42)",    ring: "#FBBF24" },
  star:     { Icon: Star,       gradient: "linear-gradient(135deg, #A78BFA, #7C3AED)", glow: "rgba(167,139,250,0.38)",   ring: "#A78BFA" },
  camera:   { Icon: Camera,     gradient: "linear-gradient(135deg, #60A5FA, #7C3AED)", glow: "rgba(96,165,250,0.35)",    ring: "#60A5FA" },
  trend:    { Icon: TrendingUp, gradient: "linear-gradient(135deg, #34D399, #0891B2)", glow: "rgba(52,211,153,0.35)",    ring: "#34D399" },
  zap:      { Icon: Zap,        gradient: "linear-gradient(135deg, #34D399, #059669)", glow: "rgba(52,211,153,0.38)",    ring: "#34D399" },
};

const ModernBadgeIcon = ({ type = "star", size = 36, earned = true, tier = null, style: extraStyle = {} }) => {
  const data = BADGE_ICON_MAP[type] || BADGE_ICON_MAP.zap;
  const { Icon, gradient, glow, ring } = data;
  const iconSize = Math.round(size * 0.48);
  const tierRingColor = tier === "gold" ? "#FBBF24" : tier === "silver" ? "#94A3B8" : tier === "bronze" ? "#CD7F32" : ring;

  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", flexShrink: 0,
      background: earned ? gradient : "linear-gradient(135deg, #94A3B8, #64748B)",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: earned ? `0 4px 16px ${glow}, inset 0 1px 0 rgba(255,255,255,0.28)` : "none",
      filter: earned ? "none" : "grayscale(1)",
      opacity: earned ? 1 : 0.4,
      position: "relative",
      border: (earned && tier) ? `2px solid ${tierRingColor}` : "2px solid transparent",
      transition: "all 0.2s",
      ...extraStyle,
    }}>
      <Icon size={iconSize} color="#fff" strokeWidth={2.2} />
    </div>
  );
};

// ─── Notification Icon Component ───
const NotifIconBadge = ({ iconType, color, size = 32 }) => {
  const iconMap = {
    message:  MessageSquare,
    workout:  Dumbbell,
    checkin:  FileText,
    trophy:   Trophy,
    nutrition: Leaf,
    chart:    TrendingUp,
    bell:     Bell,
    star:     Star,
  };
  const Icon = iconMap[iconType] || Bell;
  return (
    <div style={{
      width: size, height: size, borderRadius: Math.round(size * 0.28),
      background: `${color}18`,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
      border: `1.5px solid ${color}25`,
    }}>
      <Icon size={Math.round(size * 0.5)} color={color} strokeWidth={2} />
    </div>
  );
};

const getAchievementIcon = (type, earned = true, size = 28) => {
  return <ModernBadgeIcon type={type} size={size} earned={earned} />;
};

// TRAINEE ONBOARDING: INTAKE FORM
// ═══════════════════════════════════════════════════════
function TraineeIntakeFlow({ onComplete }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    goal: "", availability: "", experience: "", dietary: "",
    injuries: "", sleep: "", medicalConditions: "", notes: ""
  });

  // Gradient icon badge matching app style
  const GradBadge = ({ icon: Icon, gradient, size = 52 }) => (
    <div style={{
      width: size, height: size, borderRadius: size * 0.28, flexShrink: 0,
      background: gradient, display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: `0 6px 20px ${gradient.includes("F97") ? "rgba(249,115,22,0.4)" : gradient.includes("8B5") ? "rgba(139,92,246,0.4)" : gradient.includes("EF4") ? "rgba(239,68,68,0.35)" : gradient.includes("3B8") ? "rgba(59,130,246,0.4)" : "rgba(52,211,153,0.4)"}`,
    }}>
      <Icon size={size * 0.42} color="#fff" strokeWidth={2.2} />
    </div>
  );

  const questions = [
    {
      key: "goal", type: "chips",
      title: "What's your main goal?", subtitle: "We'll build your entire plan around this.",
      Icon: Target, gradient: "linear-gradient(135deg,#34D399,#10B981)",
      options: [
        { value: "Lose Weight",  Icon: Flame,    gradient: "linear-gradient(135deg,#F97316,#EF4444)", sub: "Burn fat & tone up" },
        { value: "Build Muscle", Icon: Dumbbell, gradient: "linear-gradient(135deg,#34D399,#10B981)", sub: "Gain size & strength" },
        { value: "Get Fit",      Icon: Activity, gradient: "linear-gradient(135deg,#3B82F6,#8B5CF6)", sub: "Improve endurance" },
        { value: "Performance",  Icon: Zap,      gradient: "linear-gradient(135deg,#F59E0B,#F97316)", sub: "Sport & competition" },
      ]
    },
    {
      key: "availability", type: "chips",
      title: "Days per week?", subtitle: "We'll schedule sessions to fit your life.",
      Icon: Calendar, gradient: "linear-gradient(135deg,#3B82F6,#8B5CF6)",
      options: [
        { value: "2 days",  Icon: Circle,    gradient: "linear-gradient(135deg,#94A3B8,#64748B)", sub: "Light schedule" },
        { value: "3 days",  Icon: BarChart2, gradient: "linear-gradient(135deg,#34D399,#10B981)", sub: "Moderate" },
        { value: "4 days",  Icon: TrendingUp,gradient: "linear-gradient(135deg,#3B82F6,#8B5CF6)", sub: "Dedicated" },
        { value: "5+ days", Icon: Zap,       gradient: "linear-gradient(135deg,#F97316,#EF4444)", sub: "High commitment" },
      ]
    },
    {
      key: "experience", type: "chips",
      title: "Training experience?", subtitle: "Helps us dial in the right intensity level.",
      Icon: Dumbbell, gradient: "linear-gradient(135deg,#F97316,#EF4444)",
      options: [
        { value: "Beginner",     Icon: Star,      gradient: "linear-gradient(135deg,#34D399,#10B981)", sub: "Just starting out" },
        { value: "Intermediate", Icon: TrendingUp, gradient: "linear-gradient(135deg,#3B82F6,#8B5CF6)", sub: "1–3 years" },
        { value: "Advanced",     Icon: Award,      gradient: "linear-gradient(135deg,#F97316,#EF4444)", sub: "3+ years" },
        { value: "Athlete",      Icon: Zap,        gradient: "linear-gradient(135deg,#F59E0B,#F97316)", sub: "Competitive level" },
      ]
    },
    {
      key: "dietary", type: "chips",
      title: "Dietary preferences?", subtitle: "Your coach designs meals around your needs.",
      Icon: Apple, gradient: "linear-gradient(135deg,#10B981,#059669)",
      options: [
        { value: "No restrictions", Icon: CheckCircle2, gradient: "linear-gradient(135deg,#34D399,#10B981)", sub: "Everything goes" },
        { value: "Halal",           Icon: Shield,       gradient: "linear-gradient(135deg,#8B5CF6,#6D28D9)", sub: "Halal certified" },
        { value: "Vegetarian",      Icon: Leaf,         gradient: "linear-gradient(135deg,#10B981,#059669)", sub: "Plant-based" },
        { value: "Keto / Low-carb", Icon: Flame,        gradient: "linear-gradient(135deg,#F59E0B,#F97316)", sub: "High fat, low carb" },
      ]
    },
    {
      key: "injuries", type: "text",
      title: "Any injuries?", subtitle: "We'll design around them — nothing will make it worse.",
      Icon: Activity, gradient: "linear-gradient(135deg,#EF4444,#DC2626)",
      placeholder: "e.g. Lower back pain, knee issue, shoulder injury… or type None",
    },
    {
      key: "sleep", type: "chips",
      title: "Sleep per night?", subtitle: "Recovery is 50% of your results.",
      Icon: Moon, gradient: "linear-gradient(135deg,#8B5CF6,#6D28D9)",
      options: [
        { value: "Under 5h",  Icon: AlertTriangle, gradient: "linear-gradient(135deg,#EF4444,#DC2626)", sub: "Very low" },
        { value: "5–6 hours", Icon: Clock,         gradient: "linear-gradient(135deg,#F59E0B,#F97316)", sub: "Below average" },
        { value: "7–8 hours", Icon: CheckCircle2,  gradient: "linear-gradient(135deg,#34D399,#10B981)", sub: "Ideal range" },
        { value: "9+ hours",  Icon: Star,          gradient: "linear-gradient(135deg,#3B82F6,#8B5CF6)", sub: "Great rest" },
      ]
    },
    {
      key: "medicalConditions", type: "text",
      title: "Medical conditions?", subtitle: "Diabetes, hypertension, heart conditions, etc.",
      Icon: Shield, gradient: "linear-gradient(135deg,#F59E0B,#F97316)",
      placeholder: "e.g. Type 2 Diabetes, Hypertension, Asthma… or type None",
    },
    {
      key: "notes", type: "text",
      title: "Anything else?", subtitle: "Your coach reads this before your very first session.",
      Icon: Edit3, gradient: "linear-gradient(135deg,#3B82F6,#8B5CF6)",
      placeholder: "Anything specific you'd like your coach to know…",
      optional: true,
    },
  ];

  const q = questions[step];
  const totalSteps = questions.length;
  const progress = ((step + 1) / totalSteps) * 100;
  const canProceed = q.optional || (data[q.key] && data[q.key].trim());

  const go = (dir) => {
    if (dir === 1 && step < totalSteps - 1) setStep(s => s + 1);
    else if (dir === -1 && step > 0) setStep(s => s - 1);
    else if (dir === 1 && step === totalSteps - 1) onComplete(data);
  };

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 600, background: gradients.onboarding, display: "flex", flexDirection: "column" }}>
      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: "rgba(52,211,153,0.12)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 100, left: -80, width: 260, height: 260, borderRadius: "50%", background: "rgba(139,92,246,0.1)", pointerEvents: "none" }} />

      {/* Header */}
      <div style={{ padding: "36px 24px 0", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
          <span style={{ fontSize: 20, fontWeight: 900, color: "#fff", letterSpacing: -0.5 }}>guider<span style={{ color: "#34D399" }}>.</span></span>

        </div>
        {/* Segmented progress */}
        <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
          {questions.map((_, i) => (
            <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i < step ? "#34D399" : i === step ? "rgba(52,211,153,0.6)" : "rgba(255,255,255,0.15)", transition: "background 0.4s" }} />
          ))}
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: 1, textTransform: "uppercase" }}>Step {step + 1} of {totalSteps}</div>
      </div>

      {/* Question body */}
      <div style={{ flex: 1, padding: "24px 24px 0", overflowY: "auto" }}>
        {/* Icon badge */}
        <div style={{ marginBottom: 18 }}>
          <GradBadge icon={q.Icon} gradient={q.gradient} size={56} />
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: "#fff", lineHeight: 1.25, marginBottom: 6, letterSpacing: -0.5 }}>{q.title}</h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 24, lineHeight: 1.6 }}>{q.subtitle}</p>

        {/* Chip options */}
        {q.type === "chips" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {q.options.map(opt => {
              const selected = data[q.key] === opt.value;
              return (
                <button key={opt.value}
                  onClick={() => { setData(p => ({ ...p, [q.key]: opt.value })); setTimeout(() => go(1), 240); }}
                  style={{
                    padding: "16px 10px 14px", borderRadius: 18,
                    border: `2px solid ${selected ? "#34D399" : "rgba(255,255,255,0.12)"}`,
                    background: selected ? "rgba(52,211,153,0.2)" : "rgba(255,255,255,0.06)",
                    cursor: "pointer", textAlign: "center", transition: "all 0.18s",
                    transform: selected ? "scale(1.04)" : "scale(1)",
                    position: "relative", overflow: "hidden"
                  }}>
                  {selected && <div style={{ position: "absolute", top: 8, right: 8, width: 18, height: 18, borderRadius: "50%", background: "#34D399", display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={10} color="#fff" strokeWidth={3} /></div>}
                  <div style={{
                    width: 40, height: 40, borderRadius: 12, background: opt.gradient,
                    display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px",
                    boxShadow: selected ? "0 4px 14px rgba(0,0,0,0.25)" : "0 2px 8px rgba(0,0,0,0.2)"
                  }}>
                    <opt.Icon size={18} color="#fff" strokeWidth={2.2} />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>{opt.value}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", marginTop: 3 }}>{opt.sub}</div>
                </button>
              );
            })}
          </div>
        )}

        {/* Text input */}
        {q.type === "text" && (
          <div>
            <textarea
              value={data[q.key]}
              onChange={e => setData(p => ({ ...p, [q.key]: e.target.value }))}
              placeholder={q.placeholder}
              rows={4}
              autoFocus
              style={{
                width: "100%", padding: "16px", borderRadius: 16,
                border: `2px solid ${data[q.key] ? "#34D399" : "rgba(255,255,255,0.15)"}`,
                background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: 14,
                outline: "none", resize: "none", fontFamily: "inherit",
                boxSizing: "border-box", lineHeight: 1.6, transition: "border 0.2s",
              }}
            />
            {q.optional && (
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 8 }}>
                <div style={{ width: 14, height: 14, borderRadius: 4, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Star size={8} color="rgba(255,255,255,0.5)" />
                </div>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Optional — you can skip this one</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Nav buttons */}
      <div style={{ padding: "20px 24px 44px", flexShrink: 0, display: "flex", gap: 10 }}>
        {step > 0 && (
          <button onClick={() => go(-1)} style={{ width: 52, height: 54, borderRadius: 16, border: "2px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <ChevronLeft size={20} color="rgba(255,255,255,0.8)" />
          </button>
        )}
        {q.type === "text" && (
          <button onClick={() => go(1)} disabled={!canProceed} style={{
            flex: 1, height: 54, borderRadius: 16, border: "none",
            background: canProceed ? "linear-gradient(135deg,#34D399,#10B981)" : "rgba(255,255,255,0.12)",
            color: canProceed ? "#0A3D22" : "rgba(255,255,255,0.3)",
            fontSize: 15, fontWeight: 800, cursor: canProceed ? "pointer" : "not-allowed",
            transition: "all 0.2s", boxShadow: canProceed ? "0 6px 24px rgba(52,211,153,0.45)" : "none",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8
          }}>
            {step === totalSteps - 1
              ? <><CheckCircle2 size={18} /> Complete Profile</>
              : <>Next <ChevronRight size={16} /></>}
          </button>
        )}
      </div>
    </div>
  );
}

// TRAINEE TOUR GUIDE
// ═══════════════════════════════════════════════════════
function TraineeTourOverlay({ step, steps, onNext, onSkip }) {
  if (!steps[step]) return null;
  const s = steps[step];
  const isLast = step === steps.length - 1;
  const cardAtBottom = s.cardPos !== "top";
  const isDark = colors.background === "#0A0A0F";

  // Lucide icon rendered in gradient pill — matches app badge style
  const TourIcon = ({ icon: Icon, gradient, glow }) => (
    <div style={{
      width: 44, height: 44, borderRadius: 14, flexShrink: 0,
      background: gradient || "linear-gradient(135deg,#34D399,#10B981)",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: `0 4px 16px ${glow || "rgba(52,211,153,0.4)"}`,
    }}>
      <Icon size={20} color="#fff" strokeWidth={2.2} />
    </div>
  );

  const cardBg = "#ffffff";
  const textPrimary = "#0F172A";
  const textSecondary = "#64748B";
  const trackBg = "#E2E8F0";

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 800, pointerEvents: "none" }}>
      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse ${s.spotW || 260}px ${s.spotH || 120}px at ${s.spotX}% ${s.spotY}%, transparent 0%, transparent 55%, rgba(0,0,0,0.85) 100%)`,
        pointerEvents: "all"
      }} onClick={e => e.stopPropagation()} />

      {/* Pulsing highlight ring */}
      <div style={{
        position: "absolute",
        left: `calc(${s.spotX}% - ${(s.spotW || 260) / 2}px)`,
        top: `calc(${s.spotY}% - ${(s.spotH || 120) / 2}px)`,
        width: s.spotW || 260, height: s.spotH || 120,
        borderRadius: s.round ? "50%" : s.radius || 16,
        border: "2.5px solid rgba(52,211,153,0.85)",
        boxShadow: "0 0 0 4px rgba(52,211,153,0.15), inset 0 0 20px rgba(52,211,153,0.05)",
        animation: "tourPulse 2s ease-in-out infinite",
        pointerEvents: "none"
      }} />

      {/* Corner dot accent */}
      <div style={{
        position: "absolute",
        left: `calc(${s.spotX}% + ${(s.spotW || 260) / 2 - 6}px)`,
        top: `calc(${s.spotY}% - ${(s.spotH || 120) / 2 - 6}px)`,
        width: 12, height: 12, borderRadius: "50%",
        background: "#34D399", border: "2px solid #fff",
        boxShadow: "0 2px 8px rgba(52,211,153,0.6)",
        pointerEvents: "none"
      }} />

      {/* Tour card */}
      <div style={{
        position: "absolute",
        ...(cardAtBottom ? { bottom: 84, left: 14, right: 14 } : { top: 60, left: 14, right: 14 }),
        background: cardBg, borderRadius: 22,
        padding: "16px 18px 15px",
        boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.2)",
        pointerEvents: "all", overflow: "hidden"
      }}>
        {/* Green accent strip */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#34D399,#10B981,#8B5CF6)", borderRadius: "22px 22px 0 0" }} />

        {/* Page section label */}
        {s.section && (
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 10, marginTop: 4 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: s.sectionColor || "#34D399" }} />
            <span style={{ fontSize: 9, fontWeight: 800, color: s.sectionColor || "#34D399", textTransform: "uppercase", letterSpacing: 1 }}>{s.section}</span>
          </div>
        )}

        {/* Step progress dots */}
        <div style={{ display: "flex", gap: 3, marginBottom: 12, flexWrap: "wrap" }}>
          {steps.map((_, i) => (
            <div key={i} style={{
              height: 3, flex: 1, minWidth: 4, borderRadius: 2,
              background: i < step ? "#34D399" : i === step ? "#10B981" : trackBg,
              transition: "background 0.3s"
            }} />
          ))}
        </div>

        {/* Icon + text */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
          <TourIcon icon={s.Icon} gradient={s.gradient} glow={s.glow} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 900, color: textPrimary, marginBottom: 4, lineHeight: 1.25, letterSpacing: -0.2 }}>{s.title}</div>
            <div style={{ fontSize: 11.5, color: textSecondary, lineHeight: 1.55 }}>{s.desc}</div>
          </div>
        </div>

        {/* Step counter + buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#94A3B8", minWidth: 32 }}>{step + 1}/{steps.length}</span>
          <button onClick={onSkip} style={{ flex: 1, padding: "9px 0", borderRadius: 10, border: "1.5px solid #E2E8F0", background: "#fff", fontSize: 11, fontWeight: 700, color: "#94A3B8", cursor: "pointer" }}>
            Skip
          </button>
          <button onClick={onNext} style={{
            flex: 2.5, padding: "9px 0", borderRadius: 10, border: "none",
            background: isLast ? "linear-gradient(135deg,#F97316,#EF4444)" : "linear-gradient(135deg,#34D399,#10B981)",
            fontSize: 12, fontWeight: 800, color: "#fff", cursor: "pointer",
            boxShadow: isLast ? "0 4px 14px rgba(249,115,22,0.4)" : "0 4px 14px rgba(52,211,153,0.35)",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6
          }}>
            {isLast ? <><Zap size={14} /> Let's go!</> : <>Next <ChevronRight size={13} /></>}
          </button>
        </div>
      </div>

      {/* Arrow pointer from card to spotlight */}
      {s.arrowDir && (
        <div style={{
          position: "absolute",
          left: `calc(${s.spotX}% - 7px)`,
          top: cardAtBottom
            ? `calc(${s.spotY}% + ${(s.spotH || 120) / 2 + 2}px)`
            : `calc(${s.spotY}% - ${(s.spotH || 120) / 2 + 18}px)`,
          width: 0, height: 0,
          borderLeft: "7px solid transparent", borderRight: "7px solid transparent",
          ...(cardAtBottom
            ? { borderTop: "none", borderBottom: "11px solid rgba(52,211,153,0.9)" }
            : { borderTop: "11px solid rgba(52,211,153,0.9)", borderBottom: "none" }),
          pointerEvents: "none"
        }} />
      )}
    </div>
  );
}

// MAIN APP
// ═══════════════════════════════════════════════════════

export default function FitCoachProPrototype() {
  const [role, setRole] = useState(null);
  const [screen, setScreen] = useState("home");
  const [pendingTraineeId, setPendingTraineeId] = useState(null);
  const [coachTab, setCoachTab] = useState("home");
  const [traineeTab, setTraineeTab] = useState("today");
  const [toast, setToast] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [appLanguage, setAppLanguage] = useState("English");
  const isArabic = appLanguage === "Arabic";
  _lang = appLanguage; // sync global for child components


  // Apply theme based on dark mode state
  colors = isDarkMode ? { ...darkTheme } : { ...lightTheme };

  const [showSplash, setShowSplash] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [showAddTrainee, setShowAddTrainee] = useState(false);
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showNotifDropdown, setShowNotifDropdown] = useState(false);
  const notifItems = [
    { id: 1, iconType: "message",   color: "#8B5CF6", title: "Coach Mike sent a message",  desc: "Great progress this week! Let's adjust your...", time: "10 min ago", unread: true },
    { id: 2, iconType: "workout",   color: "#34D399", title: "Workout reminder",            desc: "Fat Burn — Monday starts in 1 hour",            time: "1h",         unread: true },
    { id: 3, iconType: "checkin",   color: "#F59E0B", title: "Weekly check-in due",         desc: "Log your weight and measurements",              time: "Today",      unread: false },
    { id: 4, iconType: "trophy",    color: "#F97316", title: "New achievement unlocked!",   desc: "You earned the 'Consistency King' badge",       time: "Yesterday",  unread: false },
    { id: 5, iconType: "nutrition", color: "#10B981", title: "Nutrition plan updated",      desc: "Coach adjusted your meal plan for next week",   time: "2 days ago", unread: false },
    { id: 6, iconType: "chart",     color: "#3B82F6", title: "Weekly progress report",      desc: "Your adherence was 85% this week — nice!",     time: "3 days ago", unread: false },
  ];
  const [showProfileSheet, setShowProfileSheet] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [profileData, setProfileData] = useState({ name: "Mahmoud", email: "mahmouuddsalem@gmail.com", phone: "+20 123 456 789" });
  const [profileEditing, setProfileEditing] = useState(false);
  const [pwData, setPwData] = useState({ current: "", newPw: "", confirm: "" });
  const [showPwCurrent, setShowPwCurrent] = useState(false);
  const [showPwNew, setShowPwNew] = useState(false);

  // ── Trainee Onboarding Phase ──
  const [traineePhase, setTraineePhase] = useState("intake"); // "intake" | "tour" | "app"
  const [tourStep, setTourStep] = useState(0);
  const [intakeData, setIntakeData] = useState({
    goal: "", availability: "", experience: "", dietary: "",
    injuries: "", sleep: "", medicalConditions: "", notes: ""
  });

  const tourSteps = [
    // ── TODAY PAGE ──
    { page:"today",    section:"Today",      sectionColor:"#34D399", Icon:Home,         gradient:"linear-gradient(135deg,#34D399,#10B981)", glow:"rgba(52,211,153,0.45)",  title:"Welcome to your Home!",          desc:"This is your daily command centre. Every important thing for today is surfaced right here.",                                   spotX:50, spotY:16,  spotW:370, spotH:72,  cardPos:"bottom", arrowDir:true },
    { page:"today",    section:"Today",      sectionColor:"#34D399", Icon:Flame,        gradient:"linear-gradient(135deg,#F97316,#EF4444)", glow:"rgba(249,115,22,0.45)",   title:"Streak & Badges Banner",         desc:"Your current workout streak and unlocked badges live up here. Keep the streak alive — it motivates you daily!",               spotX:50, spotY:26,  spotW:370, spotH:80,  cardPos:"bottom", arrowDir:true },
    { page:"today",    section:"Today",      sectionColor:"#34D399", Icon:User,         gradient:"linear-gradient(135deg,#8B5CF6,#6D28D9)", glow:"rgba(139,92,246,0.45)",   title:"My Coach",                       desc:"Tap the coach avatar (top right) to view your coach's profile, certifications, and contact info.",                             spotX:88, spotY:5.5, spotW:46,  spotH:46,  round:true, cardPos:"bottom", arrowDir:false },
    { page:"today",    section:"Today",      sectionColor:"#34D399", Icon:Dumbbell,     gradient:"linear-gradient(135deg,#34D399,#10B981)", glow:"rgba(52,211,153,0.45)",   title:"Today's Workout Card",           desc:"Your assigned workout is shown here — name, muscle focus, exercises, and estimated duration. Tap Resume to begin.",            spotX:50, spotY:43,  spotW:370, spotH:88,  cardPos:"bottom", arrowDir:true },
    { page:"today",    section:"Today",      sectionColor:"#34D399", Icon:Apple,        gradient:"linear-gradient(135deg,#10B981,#059669)", glow:"rgba(16,185,129,0.45)",   title:"Nutrition Summary",              desc:"See today's calories and macros at a glance. The coloured rings fill up as you log meals throughout the day.",                  spotX:50, spotY:62,  spotW:370, spotH:100, cardPos:"bottom", arrowDir:true },
    { page:"today",    section:"Today",      sectionColor:"#34D399", Icon:CheckCircle2, gradient:"linear-gradient(135deg,#10B981,#059669)", glow:"rgba(16,185,129,0.45)",   title:"Meal Check Cards",               desc:"Tap Breakfast, Lunch, Dinner, or Snack to mark each meal as logged. Coach Mike tracks this.",                                   spotX:50, spotY:76,  spotW:370, spotH:68,  cardPos:"top",    arrowDir:true },
    { page:"today",    section:"Today",      sectionColor:"#34D399", Icon:Bell,         gradient:"linear-gradient(135deg,#F59E0B,#F97316)", glow:"rgba(245,158,11,0.45)",   title:"Reminders & Schedule",          desc:"Scheduled sessions, supplement reminders, and rest day notes from your coach appear here. Tap + to add your own.",             spotX:50, spotY:88,  spotW:370, spotH:72,  cardPos:"top",    arrowDir:true },
    { page:"today",    section:"Today",      sectionColor:"#34D399", Icon:Target,       gradient:"linear-gradient(135deg,#3B82F6,#8B5CF6)", glow:"rgba(59,130,246,0.45)",   title:"Coach Goals",                   desc:"Your coach's weekly and monthly goals for you. Hit these targets to stay on track for your transformation.",                    spotX:50, spotY:55,  spotW:370, spotH:80,  cardPos:"bottom", arrowDir:true },
    // ── WORKOUT PAGE ──
    { page:"workout",  section:"Workout",    sectionColor:"#34D399", Icon:Dumbbell,     gradient:"linear-gradient(135deg,#34D399,#10B981)", glow:"rgba(52,211,153,0.45)",   title:"Your Workout Plan",              desc:"All exercises assigned by your coach are listed here with sets, reps, rest time, and coaching notes.",                          spotX:50, spotY:30,  spotW:370, spotH:170, cardPos:"bottom", arrowDir:true },
    { page:"workout",  section:"Workout",    sectionColor:"#34D399", Icon:Play,         gradient:"linear-gradient(135deg,#34D399,#10B981)", glow:"rgba(52,211,153,0.45)",   title:"Start Your Session",            desc:"Tap any exercise to expand it — you'll see demo notes, sets progress, and a Start Set button to begin the guided flow.",        spotX:50, spotY:52,  spotW:370, spotH:100, cardPos:"bottom", arrowDir:true },
    { page:"workout",  section:"Workout",    sectionColor:"#34D399", Icon:Activity,     gradient:"linear-gradient(135deg,#F97316,#EF4444)", glow:"rgba(249,115,22,0.45)",   title:"Log Weight & Reps",             desc:"Enter your actual weight and reps for each set. This data is saved and shared with your coach automatically.",                  spotX:50, spotY:68,  spotW:370, spotH:140, cardPos:"top",    arrowDir:true },
    { page:"workout",  section:"Workout",    sectionColor:"#34D399", Icon:Clock,        gradient:"linear-gradient(135deg,#8B5CF6,#6D28D9)", glow:"rgba(139,92,246,0.45)",   title:"Rest Timer",                    desc:"After completing a set, the rest timer starts automatically. You'll see a countdown ring and +/- buttons to adjust it.",        spotX:50, spotY:55,  spotW:280, spotH:240, cardPos:"bottom", arrowDir:true },
    { page:"workout",  section:"Workout",    sectionColor:"#34D399", Icon:RotateCcw,    gradient:"linear-gradient(135deg,#F59E0B,#F97316)", glow:"rgba(245,158,11,0.45)",   title:"Skip & Notes",                  desc:"Can't do an exercise? Tap Skip and leave a reason. Your coach can see which sets or exercises were skipped and why.",           spotX:50, spotY:40,  spotW:370, spotH:90,  cardPos:"bottom", arrowDir:true },
    { page:"workout",  section:"Workout",    sectionColor:"#34D399", Icon:CheckCircle2, gradient:"linear-gradient(135deg,#34D399,#10B981)", glow:"rgba(52,211,153,0.45)",   title:"Workout Complete 🎉",           desc:"Finish all exercises and you'll see a celebration screen with your performance summary, new badges, and coach notification.",    spotX:50, spotY:35,  spotW:370, spotH:120, cardPos:"bottom", arrowDir:true },
    // ── NUTRITION PAGE ──
    { page:"nutrition",section:"Nutrition",  sectionColor:"#10B981", Icon:Apple,        gradient:"linear-gradient(135deg,#10B981,#059669)", glow:"rgba(16,185,129,0.45)",   title:"Your Nutrition Plan",           desc:"Your coach-assigned meal plan lives here. Each meal slot shows what to eat and the calorie and macro targets.",                  spotX:50, spotY:22,  spotW:370, spotH:80,  cardPos:"bottom", arrowDir:true },
    { page:"nutrition",section:"Nutrition",  sectionColor:"#10B981", Icon:BarChart2,    gradient:"linear-gradient(135deg,#3B82F6,#8B5CF6)", glow:"rgba(59,130,246,0.45)",   title:"Macro Rings",                   desc:"Protein, carbs, and fat rings fill up in real time as you log food. Aim to hit all three rings by end of day.",                  spotX:50, spotY:30,  spotW:300, spotH:160, cardPos:"bottom", arrowDir:true },
    { page:"nutrition",section:"Nutrition",  sectionColor:"#10B981", Icon:Plus,         gradient:"linear-gradient(135deg,#34D399,#10B981)", glow:"rgba(52,211,153,0.45)",   title:"Log Your Food",                 desc:"Tap the + button on any meal to search foods, enter custom items, or scan a barcode. It's fast — under 30 seconds per meal.",   spotX:50, spotY:55,  spotW:370, spotH:200, cardPos:"top",    arrowDir:true },
    { page:"nutrition",section:"Nutrition",  sectionColor:"#10B981", Icon:Droplets,     gradient:"linear-gradient(135deg,#3B82F6,#6D28D9)", glow:"rgba(59,130,246,0.4)",    title:"Water Intake",                  desc:"Track your daily hydration here. Tap + or - to update your water intake. Your coach gets notified if you're under target.",      spotX:50, spotY:75,  spotW:370, spotH:80,  cardPos:"top",    arrowDir:true },
    { page:"nutrition",section:"Nutrition",  sectionColor:"#10B981", Icon:MessageSquare,gradient:"linear-gradient(135deg,#F59E0B,#F97316)", glow:"rgba(245,158,11,0.4)",    title:"Coach Nutrition Notes",         desc:"Daily tips, meal reminders, and dietary advice from Coach Mike appear at the bottom. Always worth a read.",                      spotX:50, spotY:87,  spotW:370, spotH:80,  cardPos:"top",    arrowDir:true },
    // ── PROGRESS PAGE ──
    { page:"progress", section:"Progress",   sectionColor:"#8B5CF6", Icon:TrendingUp,   gradient:"linear-gradient(135deg,#8B5CF6,#6D28D9)", glow:"rgba(139,92,246,0.45)",   title:"Progress Overview",             desc:"This is your progress hub. Weight trend, macros, body measurements, photos, and InBody reports all live here.",                  spotX:50, spotY:22,  spotW:370, spotH:80,  cardPos:"bottom", arrowDir:true },
    { page:"progress", section:"Progress",   sectionColor:"#8B5CF6", Icon:Activity,     gradient:"linear-gradient(135deg,#34D399,#10B981)", glow:"rgba(52,211,153,0.45)",   title:"Weight Trend Chart",            desc:"Your weekly weigh-ins are plotted on this chart. Tap any point to see that day's entry and how far you've come.",                spotX:50, spotY:40,  spotW:370, spotH:160, cardPos:"bottom", arrowDir:true },
    { page:"progress", section:"Progress",   sectionColor:"#8B5CF6", Icon:Scale,        gradient:"linear-gradient(135deg,#F97316,#EF4444)", glow:"rgba(249,115,22,0.45)",   title:"Log Your Weight",               desc:"Tap the weight card to log today's weight. Your coach sees this in real time and can adjust your plan based on trends.",          spotX:50, spotY:65,  spotW:370, spotH:80,  cardPos:"top",    arrowDir:true },
    { page:"progress", section:"Progress",   sectionColor:"#8B5CF6", Icon:Camera,       gradient:"linear-gradient(135deg,#3B82F6,#8B5CF6)", glow:"rgba(59,130,246,0.45)",   title:"Progress Photos",               desc:"Upload front, side, and back photos weekly. Side-by-side comparison mode shows you how much your body has transformed.",           spotX:50, spotY:72,  spotW:370, spotH:100, cardPos:"top",    arrowDir:true },
    { page:"progress", section:"Progress",   sectionColor:"#8B5CF6", Icon:BarChart2,    gradient:"linear-gradient(135deg,#8B5CF6,#6D28D9)", glow:"rgba(139,92,246,0.45)",   title:"InBody Reports",                desc:"Upload your InBody scan PDFs here. Your coach uses these to fine-tune muscle vs fat targets in your plan.",                       spotX:50, spotY:82,  spotW:370, spotH:80,  cardPos:"top",    arrowDir:true },
    { page:"progress", section:"Progress",   sectionColor:"#8B5CF6", Icon:Award,        gradient:"linear-gradient(135deg,#F59E0B,#F97316)", glow:"rgba(245,158,11,0.45)",   title:"Achievements & Streak",         desc:"Earn badges for consistency, hitting milestones, and logging streaks. Share them with friends or show your coach!",              spotX:50, spotY:60,  spotW:370, spotH:100, cardPos:"top",    arrowDir:true },
    // ── CHAT PAGE ──
    { page:"chat",     section:"Chat",       sectionColor:"#8B5CF6", Icon:MessageSquare,gradient:"linear-gradient(135deg,#8B5CF6,#6D28D9)", glow:"rgba(139,92,246,0.45)",   title:"Chat With Coach Mike",          desc:"Send messages, questions, progress updates, or just check in. Your coach typically replies within a few hours.",                  spotX:50, spotY:45,  spotW:370, spotH:280, cardPos:"bottom", arrowDir:false },
    { page:"chat",     section:"Chat",       sectionColor:"#8B5CF6", Icon:Send,         gradient:"linear-gradient(135deg,#34D399,#10B981)", glow:"rgba(52,211,153,0.45)",   title:"Send a Message",                desc:"Type your message in the bar at the bottom, or use Quick Replies to send common check-in messages with one tap.",                 spotX:50, spotY:90,  spotW:370, spotH:70,  cardPos:"top",    arrowDir:true },
    // ── SETTINGS ──
    { page:"settings", section:"Settings",   sectionColor:"#64748B", Icon:User,         gradient:"linear-gradient(135deg,#34D399,#10B981)", glow:"rgba(52,211,153,0.45)",   title:"Account & Profile",             desc:"Update your name, email, and phone here. Your coach sees your profile info to personalise your plan even further.",              spotX:50, spotY:28,  spotW:370, spotH:120, cardPos:"bottom", arrowDir:true },
    { page:"settings", section:"Settings",   sectionColor:"#64748B", Icon:Bell,         gradient:"linear-gradient(135deg,#F59E0B,#F97316)", glow:"rgba(245,158,11,0.45)",   title:"Notification Controls",         desc:"Toggle workout reminders, coach messages, plan updates, and achievements on or off. You control your own noise level.",          spotX:50, spotY:50,  spotW:370, spotH:90,  cardPos:"bottom", arrowDir:true },
    { page:"settings", section:"Settings",   sectionColor:"#64748B", Icon:Settings,     gradient:"linear-gradient(135deg,#8B5CF6,#6D28D9)", glow:"rgba(139,92,246,0.45)",   title:"App Preferences",               desc:"Switch between Light and Dark theme, change units (metric or imperial), and set your preferred language.",                       spotX:50, spotY:68,  spotW:370, spotH:90,  cardPos:"top",    arrowDir:true },
    { page:"settings", section:"Settings",   sectionColor:"#64748B", Icon:Shield,       gradient:"linear-gradient(135deg,#EF4444,#DC2626)", glow:"rgba(239,68,68,0.4)",     title:"Security & Privacy",            desc:"Enable two-factor authentication to keep your account safe. You can also delete your account here if needed.",                   spotX:50, spotY:82,  spotW:370, spotH:80,  cardPos:"top",    arrowDir:true },
    // ── BOTTOM NAV ──
    { page:"today",    section:"Navigation", sectionColor:"#34D399", Icon:Home,         gradient:"linear-gradient(135deg,#34D399,#10B981)", glow:"rgba(52,211,153,0.45)",   title:"Bottom Navigation",             desc:"These 5 tabs get you anywhere in the app instantly — Today, Workout, Nutrition, Progress, and Chat. You're all set!",            spotX:50, spotY:95,  spotW:400, spotH:56,  radius:0, cardPos:"top", arrowDir:true },
  ];

  // ── Coach Profile Popup (for trainee home) ──
  const [showCoachProfile, setShowCoachProfile] = useState(false);
  const coachProfileData = {
    name: "Coach Mike",
    avatar: null,
    bio: tr("Certified PT with 8+ years experience in strength & conditioning. Specialized in body transformations and competition prep."),
    certifications: [
      { title: tr("NASM Certified Personal Trainer"), year: "2018" },
      { title: tr("CrossFit Level 2 Trainer"), year: "2020" },
      { title: tr("Precision Nutrition Level 1"), year: "2021" },
    ],
    champions: [
      { title: tr("Regional Bodybuilding 1st Place"), year: "2019" },
      { title: tr("National Fitness Challenge Winner"), year: "2022" },
    ],
    transformations: [
      { title: tr("Client lost 30kg in 6 months"), before: "110kg", after: "80kg" },
      { title: tr("Client gained 12kg muscle in 8 months"), before: "65kg", after: "77kg" },
      { title: tr("Post-pregnancy body transformation"), before: "85kg", after: "62kg" },
    ],
  };

  // ── Freemium State (client/trainee limit only) ──
  const CLIENT_FREE_LIMIT = 3;
  const [isPremium, setIsPremium] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [clientCount, setClientCount] = useState(allTraineesData.length);
  const [workoutSets, setWorkoutSets] = useState([
    { id: 1, name: "Upper Body Strength", trainees: ["Ahmed K.", "Sara M."], exercises: 8, created: "Feb 10", status: "active" },
    { id: 2, name: "HIIT Cardio Blast", trainees: ["Omar R."], exercises: 6, created: "Feb 12", status: "active" },
    { id: 3, name: "Lower Body Power", trainees: ["Layla A.", "Ahmed K.", "Nour S."], exercises: 10, created: "Feb 14", status: "draft" },
  ]);
  const [nutritionSets, setNutritionSets] = useState([
    { id: 1, name: "High Protein Cut", trainees: ["Ahmed K."], meals: 5, calories: 2100, created: "Feb 8", status: "active" },
    { id: 2, name: "Lean Bulk Plan", trainees: ["Omar R.", "Nour S."], meals: 6, calories: 2800, created: "Feb 11", status: "active" },
  ]);

  const canAddClient = isPremium || clientCount < CLIENT_FREE_LIMIT;

  // ── Shared Chat State (unified between coach & trainee) ──
  const [sharedThreads, setSharedThreads] = useState(chatThreads);
  const [sharedConversations, setSharedConversations] = useState(chatConversations);

  // ── Shared Activity Feed (events from both sides) ──
  const [activityFeed, setActivityFeed] = useState([]);

  // Push event to activity feed + optionally to chat as system message
  const pushEvent = useCallback((event) => {
    setActivityFeed(prev => [{ id: Date.now(), time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }), ...event }, ...prev].slice(0, 20));
    // Auto-post system message to relevant chat thread
    if (event.chatConvoId && event.chatText) {
      setSharedThreads(prev => ({
        ...prev,
        [event.chatConvoId]: [...(prev[event.chatConvoId] || []), {
          id: Date.now(), from: "system", text: event.chatText, time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }), date: "Today", type: event.chatType || "text"
        }]
      }));
    }
  }, []);

  // ── Shared Trainee Adherence (live updates from trainee actions) ──
  const [traineeAdherence, setTraineeAdherence] = useState({
    workoutsDone: 4, workoutsTotal: 5,
    mealsDone: 3, mealsTotal: 5,
    currentWeight: 74.5
  });

  // ── Active Assigned Workout for Trainee (from coach builder) ──
  const [assignedWorkout, setAssignedWorkout] = useState(null);
  const [assignedNutrition, setAssignedNutrition] = useState(null);

  // Callback: Coach creates workout via builder → assign to trainee
  const onWorkoutCreated = useCallback((plan) => {
    const newSet = { id: Date.now(), name: plan.name, trainees: plan.trainees || [], exercises: plan.exercises?.length || 0, created: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }), status: "active" };
    setWorkoutSets(prev => [...prev, newSet]);
    if (plan.exercises?.length > 0) {
      setAssignedWorkout({ name: plan.name, exercises: plan.exercises, schedule: plan.schedule });
    }
    pushEvent({ type: "plan_assigned", text: `Workout "${plan.name}" assigned`, icon: "Dumbbell", color: colors.primary, chatConvoId: 1, chatText: `Workout plan "${plan.name}" assigned`, chatType: "plan_assigned" });
  }, [pushEvent]);

  // Callback: Coach creates nutrition plan → assign to trainee
  const onNutritionCreated = useCallback((plan) => {
    const newSet = { id: Date.now(), name: plan.name, trainees: plan.trainees || [], meals: plan.meals?.length || 0, calories: plan.targetCal || 2100, created: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }), status: "active" };
    setNutritionSets(prev => [...prev, newSet]);
    if (plan.meals?.length > 0) {
      setAssignedNutrition({ name: plan.name, meals: plan.meals, targetCal: plan.targetCal, proteinG: plan.proteinG, carbsG: plan.carbsG, fatG: plan.fatG });
    }
    pushEvent({ type: "plan_assigned", text: `Nutrition "${plan.name}" assigned`, icon: "Apple", color: colors.success, chatConvoId: 1, chatText: `Nutrition plan "${plan.name}" assigned`, chatType: "plan_assigned" });
  }, [pushEvent]);

  // Callback: Trainee completes workout
  const onWorkoutCompleted = useCallback((summary) => {
    setTraineeAdherence(prev => ({ ...prev, workoutsDone: Math.min(prev.workoutsDone + 1, prev.workoutsTotal) }));
    pushEvent({ type: "workout_done", text: `${summary?.name || "Workout"} completed (${summary?.exercisesDone || 0} exercises)`, icon: "CheckCircle2", color: colors.success, chatConvoId: 1, chatText: `Workout completed — ${summary?.exercisesDone || 0} exercises, ${summary?.duration || "N/A"}`, chatType: "workout_done" });
  }, [pushEvent]);

  // Callback: Trainee logs meal
  const onMealLogged = useCallback((mealName) => {
    setTraineeAdherence(prev => ({ ...prev, mealsDone: Math.min(prev.mealsDone + 1, prev.mealsTotal) }));
    pushEvent({ type: "meal_logged", text: `${mealName} logged`, icon: "Apple", color: colors.success });
  }, [pushEvent]);

  const showToast = (msg, type) => setToast({ msg, type });

  const coachScreens = {
    home: <CoachDashboard onNavigate={s => setScreen(s)} onShowToast={showToast} freemium={{ isPremium, clientCount, CLIENT_FREE_LIMIT, canAddClient, workoutSets, nutritionSets, onUpgrade: () => setShowUpgradeModal(true) }} onOpenTrainee={(id) => { setPendingTraineeId(id); setScreen("coach-trainees"); }} />,
    "coach-trainees": <CoachTraineesTab onNavigate={s => setScreen(s)} onShowToast={showToast} freemium={{ isPremium, clientCount, CLIENT_FREE_LIMIT, canAddClient, onUpgrade: () => setShowUpgradeModal(true), onClientCountChange: setClientCount }} initialTraineeId={pendingTraineeId} />,
    "trainee-detail": <TraineeDetail onBack={() => setScreen("home")} onNavigate={s => setScreen(s)} onShowToast={showToast} />,
    "workout-builder": <WorkoutBuilder onBack={() => setScreen("coach-workouts")} onShowToast={showToast} />,
    "nutrition-builder": <NutritionPlanBuilder onBack={() => setScreen("coach-nutrition")} onShowToast={showToast} />,
    "coach-workouts": <CoachWorkoutsList sets={workoutSets} onSetUpdate={setWorkoutSets} onCreate={() => { setShowCreateMenu(false); setScreen("workout-builder"); }} onNavigate={s => setScreen(s)} onShowToast={showToast} />,
    "coach-nutrition": <CoachNutritionList sets={nutritionSets} onSetUpdate={setNutritionSets} onCreate={() => { setShowCreateMenu(false); setScreen("nutrition-builder"); }} onNavigate={s => setScreen(s)} onShowToast={showToast} />,
    "coach-chat": <CoachChatSystem onShowToast={showToast} onNavigate={s => setScreen(s)} />,
    "coach-settings": <CoachSettings onShowToast={showToast} onNavigate={s => setScreen(s)} onLogout={() => setShowLogoutConfirm(true)} onLanguageChange={setAppLanguage} currentLanguage={appLanguage} />,
  };

  const traineeScreens = {
    today: <TraineeToday onNavigate={s => setScreen(s)} onShowToast={showToast} onShowCoachProfile={() => setShowCoachProfile(true)} />,
    workout: <TraineeWorkout onBack={() => setScreen("today")} onShowToast={showToast} />,
    nutrition: <TraineeNutrition onBack={() => setScreen("today")} onShowToast={showToast} />,
    progress: <TraineeProgress onBack={() => setScreen("today")} onShowToast={showToast} />,
    chat: <TraineeChat onBack={() => setScreen("today")} onShowToast={showToast} />,
    settings: <TraineeSettings onShowToast={showToast} onNavigate={s => setScreen(s)} onLogout={() => setShowLogoutConfirm(true)} onLanguageChange={setAppLanguage} currentLanguage={appLanguage} />,
  };

  // Show splash animation before anything else (g. → guider.)
  if (showSplash) {
    return (
      <div style={{ width: "100%", minHeight: "100vh", background: "#1A1A2E", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif" }}>
        <div style={{ width: 428, height: 926, borderRadius: 44, overflow: "hidden", boxShadow: "0 25px 80px rgba(0,0,0,0.5)", position: "relative", background: "#0A0A0F" }}>
          <SplashScreen onComplete={() => setShowSplash(false)} />
        </div>
      </div>
    );
  }

  if (!role) {
    return (
      <div style={{ width: "100%", minHeight: "100vh", background: "#1A1A2E", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif" }}>
        <div style={{ width: 428, height: 926, borderRadius: 44, overflow: "hidden", boxShadow: "0 25px 80px rgba(0,0,0,0.5)", position: "relative" }}>
          <LoginScreen onLogin={(r) => { setRole(r); setScreen(r === "coach" ? "home" : "today"); if (r === "trainee") { setTraineePhase("intake"); } if (!hasCompletedOnboarding) setShowOnboarding(true); }} onLanguageChange={setAppLanguage} currentLanguage={appLanguage} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#1A1A2E", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif" }}>
      <div style={{ width: 428, height: 926, borderRadius: 44, overflow: "hidden", boxShadow: "0 25px 80px rgba(0,0,0,0.5)", position: "relative", background: colors.background, display: "flex", flexDirection: "column" }}>

        {/* Splash Screen */}
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

        {/* Trainee Intake Flow — full screen */}
        {role === "trainee" && traineePhase === "intake" && (
          <TraineeIntakeFlow onComplete={(d) => {
            setIntakeData(d);
            setTraineePhase("tour");
            setTourStep(0);
            setScreen("today");
            showToast("Profile saved! Let's show you around 🎉", "success");
          }} />
        )}

        {/* Trainee Tour Guide Overlay */}
        {role === "trainee" && traineePhase === "tour" && (
          <TraineeTourOverlay
            step={tourStep}
            steps={tourSteps}
            onNext={() => {
              const next = tourStep + 1;
              if (next >= tourSteps.length) {
                setTraineePhase("app");
              } else {
                const nextPage = tourSteps[next].page;
                setScreen(nextPage);
                setTraineeTab(nextPage);
                setTourStep(next);
              }
            }}
            onSkip={() => setTraineePhase("app")}
          />
        )}

        {/* Status Bar */}
        <div style={{ height: 50, background: colors.card, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", flexShrink: 0, borderBottom: `1px solid ${colors.border}` }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: colors.textPrimary }}>guider.</span>
          {isArabic && <span style={{ fontSize: 10, fontWeight: 700, color: colors.primary, background: colors.primaryLight, padding: "2px 6px", borderRadius: 5 }}>AR</span>}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={() => setIsDarkMode(!isDarkMode)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
              {isDarkMode ? <Sun size={18} color={colors.textSecondary} /> : <Moon size={18} color={colors.textSecondary} />}
            </button>
            <div style={{ position: "relative" }}>
              <button onClick={() => { setShowNotifDropdown(!showNotifDropdown); setShowSettingsMenu(false); }}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0, position: "relative" }}>
                <Bell size={18} color={showNotifDropdown ? colors.primary : colors.textSecondary} />
                <div style={{ position: "absolute", top: -4, right: -4, width: 16, height: 16, borderRadius: "50%", background: colors.error, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#fff", fontWeight: 700 }}>{notifItems.filter(n => n.unread).length}</div>
              </button>
              {showNotifDropdown && (
                <div style={{ position: "absolute", top: 30, right: -60, width: 300, background: colors.card, borderRadius: 16, boxShadow: "0 12px 40px rgba(0,0,0,0.2)", border: `1px solid ${colors.border}`, zIndex: 300, overflow: "hidden", animation: "fadeScale 0.2s ease" }}>
                  <div style={{ padding: "14px 16px 10px", borderBottom: `1px solid ${colors.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: colors.textPrimary }}>{tr("Notifications")}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: colors.primary, cursor: "pointer" }}>{tr("Mark all read")}</span>
                  </div>
                  <div style={{ maxHeight: 320, overflowY: "scroll", WebkitOverflowScrolling: "touch", scrollbarWidth: "thin", scrollbarColor: `${colors.border} transparent` }}>
                    {notifItems.map(n => (
                      <div key={n.id} style={{ display: "flex", gap: 10, padding: "12px 16px", borderBottom: `1px solid ${colors.surface}`, background: n.unread ? `${n.color}06` : "transparent", cursor: "pointer", transition: "background 0.15s" }}>
                        <NotifIconBadge iconType={n.iconType} color={n.color} size={32} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ fontSize: 12, fontWeight: n.unread ? 700 : 500, color: colors.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{n.title}</span>
                            {n.unread && <div style={{ width: 6, height: 6, borderRadius: "50%", background: n.color, flexShrink: 0 }} />}
                          </div>
                          <p style={{ fontSize: 11, color: colors.textMuted, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{n.desc}</p>
                          <span style={{ fontSize: 10, color: colors.textMuted }}>{n.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Scroll fade hint */}
                  <div style={{ height: 20, background: `linear-gradient(transparent, ${colors.card})`, marginTop: -20, position: "relative", zIndex: 1, pointerEvents: "none", borderRadius: "0 0 16px 16px" }} />
                </div>
              )}
            </div>
            {/* Settings Gear Icon — trainee only */}
            {role === "trainee" && <div style={{ position: "relative" }}>
              <button
                onClick={() => { setScreen("settings"); setTraineeTab("settings"); setShowNotifDropdown(false); }}
                style={{
                  width: 34, height: 34, borderRadius: "50%",
                  background: screen === "settings" ? `${colors.primary}15` : colors.primaryLight,
                  display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                  border: screen === "settings" ? `2px solid ${colors.primary}` : "2px solid transparent",
                  transition: "all 0.2s"
                }}
              >
                <Settings size={16} color={colors.primary} style={{ transition: "transform 0.3s", transform: screen === "settings" ? "rotate(90deg)" : "rotate(0)" }} />
              </button>
            </div>}
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflow: "auto", paddingTop: 20, paddingBottom: 80, direction: isArabic ? "rtl" : "ltr", fontFamily: isArabic ? "'Noto Sans Arabic', -apple-system, sans-serif" : undefined }}>
          {role === "coach" ? coachScreens[screen] || coachScreens.home : traineeScreens[screen] || traineeScreens.today}
        </div>

        {/* Bottom Nav */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 68, background: colors.card, borderTop: `1px solid ${colors.border}`, display: "flex", alignItems: "center", justifyContent: "space-around", padding: "0 8px" }}>
          {role === "coach" ? (
            <>
              <button onClick={() => { setScreen("home"); setCoachTab("home"); setPendingTraineeId(null); }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer", padding: "4px 12px" }}>
                <Home size={20} color={coachTab === "home" ? colors.primary : colors.textMuted} />
                <span style={{ fontSize: 10, fontWeight: 600, color: coachTab === "home" ? colors.primary : colors.textMuted }}>{tr("Home")}</span>
              </button>
              <button onClick={() => { setScreen("coach-trainees"); setCoachTab("trainees"); setPendingTraineeId(null); }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer", padding: "4px 12px" }}>
                <Users size={20} color={coachTab === "trainees" ? colors.primary : colors.textMuted} />
                <span style={{ fontSize: 10, fontWeight: 600, color: coachTab === "trainees" ? colors.primary : colors.textMuted }}>{tr("Trainees")}</span>
              </button>
              <div style={{ position: "relative" }}>
                <button onClick={() => setShowCreateMenu(!showCreateMenu)} style={{ width: 52, height: 52, borderRadius: 16, background: colors.primary, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 14px rgba(79,70,229,0.4)", transform: "translateY(-8px)" }}>
                  <Plus size={24} color="#fff" />
                </button>
                <span style={{ fontSize: 10, fontWeight: 500, color: colors.textMuted, position: "absolute", bottom: -14, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}>{tr("Create")}</span>
                {showCreateMenu && (
                  <div style={{ position: "absolute", bottom: 64, left: "50%", transform: "translateX(-50%)", background: colors.card, borderRadius: 14, boxShadow: "0 8px 32px rgba(0,0,0,0.18)", padding: 8, width: 200, zIndex: 100, animation: "fadeScale 0.15s ease" }}>
                    {[
                      { label: tr("Workout Plan"), icon: Dumbbell, color: colors.primary, action: () => { setShowCreateMenu(false); setScreen("workout-builder"); } },
                      { label: tr("Nutrition Plan"), icon: Apple, color: colors.success, action: () => { setShowCreateMenu(false); setScreen("nutrition-builder"); } }
                    ].map(item => (
                      <button key={item.label} onClick={item.action} style={{ width: "100%", padding: "12px 14px", display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", borderRadius: 10, fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>
                        <item.icon size={18} color={item.color} />
                        <span style={{ flex: 1 }}>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button onClick={() => { setCoachTab("chat"); setScreen("coach-chat"); }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer", padding: "4px 12px", position: "relative" }}>
                <MessageSquare size={20} color={coachTab === "chat" ? colors.primary : colors.textMuted} />
                <span style={{ fontSize: 10, fontWeight: 600, color: coachTab === "chat" ? colors.primary : colors.textMuted }}>{tr("Chat")}</span>
                <div style={{ position: "absolute", top: 0, right: 8, width: 8, height: 8, borderRadius: "50%", background: colors.error }} />
              </button>
              <button onClick={() => { setCoachTab("more"); setScreen("coach-settings"); }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer", padding: "4px 12px" }}>
                <Settings size={20} color={coachTab === "more" ? colors.primary : colors.textMuted} />
                <span style={{ fontSize: 10, fontWeight: 600, color: coachTab === "more" ? colors.primary : colors.textMuted }}>{tr("More")}</span>
              </button>
            </>
          ) : (
            <>
              {[
                { icon: Home, label: "Today", labelKey: "Today", key: "today" },
                { icon: Dumbbell, label: "Workout", labelKey: "Workout", key: "workout" },
                { icon: Apple, label: "Nutrition", labelKey: "Nutrition", key: "nutrition" },
                { icon: TrendingUp, label: "Progress", labelKey: "Progress", key: "progress" },
                { icon: MessageSquare, label: "Chat", labelKey: "Chat", key: "chat" },
              ].map(({ icon: Icon, label, labelKey, key }) => (
                <button key={label} onClick={() => { setScreen(key); setTraineeTab(label.toLowerCase()); }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer", padding: "4px 8px" }}>
                  <Icon size={20} color={traineeTab === label.toLowerCase() ? colors.primary : colors.textMuted} />
                  <span style={{ fontSize: 10, fontWeight: 600, color: traineeTab === label.toLowerCase() ? colors.primary : colors.textMuted }}>{tr(labelKey || label)}</span>
                </button>
              ))}
            </>
          )}
        </div>

        {/* Toast */}
        {toast && <Toast message={toast.msg} type={toast.type} onDismiss={() => setToast(null)} />}

        {/* Add Trainee Sheet */}
        {showAddTrainee && (
          <BottomSheet title="Add New Trainee" onClose={() => setShowAddTrainee(false)}>
            {[["Full Name *", "text", "Enter full name"], ["Email Address *", "email", "trainee@email.com"]].map(([label, type, placeholder], i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: colors.textMuted, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>{label}</div>
                <input type={type} placeholder={placeholder} style={{ width: "100%", height: 48, borderRadius: 12, border: `1.5px solid ${colors.border}`, padding: "0 14px", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
              </div>
            ))}
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setShowAddTrainee(false)} style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 14, fontWeight: 600, color: colors.textSecondary, cursor: "pointer" }}>{tr("Cancel")}</button>
              <button onClick={() => { setShowAddTrainee(false); showToastr("Invite sent!"); }} style={{ flex: 1, padding: "14px 0", borderRadius: 14, border: "none", background: colors.primary, color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Send Invite →</button>
            </div>
          </BottomSheet>
        )}

        {/* ═══ Settings: Profile Sheet ═══ */}
        {showProfileSheet && (
          <BottomSheet title="Profile" onClose={() => { setShowProfileSheet(false); setProfileEditing(false); }}>
            {/* Avatar */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 20 }}>
              <div style={{
                width: 72, height: 72, borderRadius: "50%", background: gradients.workout,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 8, position: "relative"
              }}>
                {profileData.name.charAt(0)}
                <div style={{
                  position: "absolute", bottom: 0, right: 0, width: 24, height: 24, borderRadius: "50%",
                  background: colors.card, border: `2px solid ${colors.border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
                }}>
                  <Camera size={12} color={colors.textSecondary} />
                </div>
              </div>
              <span style={{ fontSize: 10, color: colors.textMuted }}>Tap to change photo</span>
            </div>
            {/* Fields */}
            {[
              { label: "Full Name", key: "name", type: "text" },
              { label: "Email Address", key: "email", type: "email" },
              { label: "Phone", key: "phone", type: "tel" },
            ].map(f => (
              <div key={f.key} style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5 }}>{f.label}</label>
                <input
                  type={f.type} value={profileData[f.key]}
                  readOnly={!profileEditing}
                  onChange={e => setProfileData(p => ({ ...p, [f.key]: e.target.value }))}
                  style={{
                    width: "100%", height: 44, borderRadius: 10, border: `1.5px solid ${profileEditing ? colors.primary : colors.border}`,
                    padding: "0 14px", fontSize: 14, outline: "none", boxSizing: "border-box",
                    background: profileEditing ? "#fff" : colors.surface, color: colors.textPrimary,
                    transition: "all 0.2s"
                  }}
                />
              </div>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              {profileEditing ? (
                <>
                  <button onClick={() => setProfileEditing(false)} style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 13, fontWeight: 600, color: colors.textSecondary, cursor: "pointer" }}>{tr("Cancel")}</button>
                  <button onClick={() => { setProfileEditing(false); showToast("Profile saved!", "success"); }} style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: "none", background: colors.primary, color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>{tr("Save Changes")}</button>
                </>
              ) : (
                <button onClick={() => setProfileEditing(true)} style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: "none", background: colors.primary, color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  <Edit3 size={14} /> Edit Profile
                </button>
              )}
            </div>
          </BottomSheet>
        )}

        {/* ═══ Settings: Change Password Sheet ═══ */}
        {showChangePassword && (
          <BottomSheet title="Change Password" onClose={() => { setShowChangePassword(false); setPwData({ current: "", newPw: "", confirm: "" }); }}>
            {/* Current Password */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5 }}>{tr("Current Password")}</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPwCurrent ? "text" : "password"} value={pwData.current}
                  onChange={e => setPwData(p => ({ ...p, current: e.target.value }))}
                  placeholder="Enter current password"
                  style={{ width: "100%", height: 44, borderRadius: 10, border: `1.5px solid ${colors.border}`, padding: "0 42px 0 14px", fontSize: 14, outline: "none", boxSizing: "border-box" }}
                />
                <button onClick={() => setShowPwCurrent(!showPwCurrent)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer" }}>
                  {showPwCurrent ? <EyeOff size={16} color={colors.textMuted} /> : <Eye size={16} color={colors.textMuted} />}
                </button>
              </div>
            </div>
            {/* New Password */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5 }}>{tr("New Password")}</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPwNew ? "text" : "password"} value={pwData.newPw}
                  onChange={e => setPwData(p => ({ ...p, newPw: e.target.value }))}
                  placeholder="At least 8 characters"
                  style={{ width: "100%", height: 44, borderRadius: 10, border: `1.5px solid ${colors.border}`, padding: "0 42px 0 14px", fontSize: 14, outline: "none", boxSizing: "border-box" }}
                />
                <button onClick={() => setShowPwNew(!showPwNew)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer" }}>
                  {showPwNew ? <EyeOff size={16} color={colors.textMuted} /> : <Eye size={16} color={colors.textMuted} />}
                </button>
              </div>
              {/* Strength indicator */}
              {pwData.newPw && (
                <div style={{ marginTop: 6 }}>
                  <div style={{ display: "flex", gap: 3 }}>
                    {[1,2,3,4].map(i => (
                      <div key={i} style={{
                        flex: 1, height: 3, borderRadius: 2,
                        background: pwData.newPw.length >= i * 3 ? (pwData.newPw.length >= 10 ? colors.success : pwData.newPw.length >= 6 ? colors.warning : colors.error) : colors.surface
                      }} />
                    ))}
                  </div>
                  <span style={{ fontSize: 10, color: pwData.newPw.length >= 10 ? colors.success : pwData.newPw.length >= 6 ? colors.warning : colors.error, marginTop: 3, display: "block" }}>
                    {pwData.newPw.length >= 10 ? "Strong" : pwData.newPw.length >= 6 ? "Medium" : "Weak"}
                  </span>
                </div>
              )}
            </div>
            {/* Confirm Password */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5 }}>{tr("Confirm New Password")}</label>
              <input
                type="password" value={pwData.confirm}
                onChange={e => setPwData(p => ({ ...p, confirm: e.target.value }))}
                placeholder="Re-enter new password"
                style={{
                  width: "100%", height: 44, borderRadius: 10, fontSize: 14, outline: "none", boxSizing: "border-box", padding: "0 14px",
                  border: `1.5px solid ${pwData.confirm && pwData.confirm !== pwData.newPw ? colors.error : colors.border}`
                }}
              />
              {pwData.confirm && pwData.confirm !== pwData.newPw && (
                <span style={{ fontSize: 11, color: colors.error, marginTop: 4, display: "block" }}>{tr("Passwords do not match")}</span>
              )}
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              <button onClick={() => { setShowChangePassword(false); setPwData({ current: "", newPw: "", confirm: "" }); }} style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: `1.5px solid ${colors.border}`, background: "#fff", fontSize: 13, fontWeight: 600, color: colors.textSecondary, cursor: "pointer" }}>{tr("Cancel")}</button>
              <button
                onClick={() => {
                  if (!pwData.current || !pwData.newPw || !pwData.confirm) { showToast("Please fill all fields", "error"); return; }
                  if (pwData.newPw !== pwData.confirm) { showToast("Passwords don't match", "error"); return; }
                  if (pwData.newPw.length < 6) { showToast("Password too short", "error"); return; }
                  setShowChangePassword(false); setPwData({ current: "", newPw: "", confirm: "" }); showToast("Password updated!", "success");
                }}
                style={{ flex: 1, padding: "12px 0", borderRadius: 12, border: "none", background: colors.primary, color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
              >{tr("Update Password")}</button>
            </div>
          </BottomSheet>
        )}

        {/* ═══ Settings: Logout Confirmation ═══ */}
        {showLogoutConfirm && (
          <ConfirmDialog
            title="Logout"
            message="Are you sure you want to logout? You'll need to sign in again to access your account."
            onConfirm={() => { setShowLogoutConfirm(false); setRole(null); setScreen("home"); setCoachTab("home"); setTraineeTab("today"); showToastr("Logged out successfully"); }}
            onCancel={() => setShowLogoutConfirm(false)}
          />
        )}

        {/* ═══ Upgrade Modal ═══ */}
        {showUpgradeModal && (
          <UpgradeModal
            onClose={() => setShowUpgradeModal(false)}
            onUpgrade={() => { setIsPremium(true); showToast("Welcome to Pro! Unlimited clients unlocked.", "success"); }}
          />
        )}

        {/* ═══ Coach Profile Popup (Trainee Home) ═══ */}
        {showCoachProfile && (
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
            onClick={e => { if (e.target === e.currentTarget) setShowCoachProfile(false); }}>
            <div style={{ width: "100%", maxHeight: "85%", background: colors.card, borderRadius: 24, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
              {/* Header */}
              <div style={{ padding: "20px 20px 16px", borderBottom: `1px solid ${colors.border}`, flexShrink: 0, textAlign: "center", position: "relative" }}>
                <button onClick={() => setShowCoachProfile(false)} style={{ position: "absolute", top: 16, right: 16, width: 30, height: 30, borderRadius: "50%", background: colors.surface, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <X size={16} color={colors.textMuted} />
                </button>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: `linear-gradient(135deg, ${colors.primary}, #8B5CF6)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", boxShadow: "0 4px 16px rgba(52,211,153,0.3)" }}>
                  <User size={28} color="#fff" />
                </div>
                <div style={{ fontSize: 18, fontWeight: 800, color: colors.textPrimary }}>{coachProfileData.name}</div>
                <div style={{ fontSize: 12, color: colors.textSecondary, marginTop: 4, lineHeight: 1.5 }}>{coachProfileData.bio}</div>
              </div>

              {/* Scrollable Content */}
              <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", WebkitOverflowScrolling: "touch" }}>
                {/* Certifications */}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                    <Shield size={14} color="#34D399" />
                    <span style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("Certifications")}</span>
                  </div>
                  {coachProfileData.certifications.map((c, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: "#EDE9FE", borderRadius: 10, marginBottom: 6, border: "1px solid #DDD6FE" }}>
                      <Award size={14} color="#34D399" />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, fontWeight: 600, color: colors.textPrimary }}>{c.title}</div>
                        <div style={{ fontSize: 10, color: colors.textMuted }}>{c.year}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Championships */}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                    <Award size={14} color="#F59E0B" />
                    <span style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("Championships & Awards")}</span>
                  </div>
                  {coachProfileData.champions.map((c, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: "#FEF3C7", borderRadius: 10, marginBottom: 6, border: "1px solid #FDE68A" }}>
                      <Star size={14} color="#F59E0B" />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, fontWeight: 600, color: colors.textPrimary }}>{c.title}</div>
                        <div style={{ fontSize: 10, color: colors.textMuted }}>{c.year}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Transformations */}
                <div style={{ marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                    <TrendingUp size={14} color="#10B981" />
                    <span style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>{tr("Proven Transformations")}</span>
                  </div>
                  {coachProfileData.transformations.map((t, i) => (
                    <div key={i} style={{ padding: "12px", background: "#D1FAE5", borderRadius: 10, marginBottom: 6, border: "1px solid #A7F3D0" }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: colors.textPrimary, marginBottom: 4 }}>{t.title}</div>
                      <div style={{ display: "flex", gap: 12 }}>
                        <span style={{ fontSize: 11, color: "#EF4444", fontWeight: 600 }}>{tr("Before:")} {t.before}</span>
                        <span style={{ fontSize: 11, color: "#10B981", fontWeight: 600 }}>{tr("After:")} {t.after}</span>
                      </div>
                      <div style={{ width: "100%", height: 60, background: "#A7F3D0", borderRadius: 8, marginTop: 8, display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed #6EE7B7" }}>
                        <Camera size={16} color="#10B981" />
                        <span style={{ fontSize: 10, color: "#10B981", fontWeight: 600, marginLeft: 4 }}>{tr("Before/After Photo")}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Global CSS Animations */}
      <style>{`
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fadeScale { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes bounce { 0% { transform: scale(0.3); } 50% { transform: scale(1.1); } 70% { transform: scale(0.95); } 100% { transform: scale(1); } }
        @keyframes typingDot { 0%, 100% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1); } }
        @keyframes tourPulse { 0%, 100% { opacity: 0.7; transform: scale(1); box-shadow: 0 0 0 0 rgba(52,211,153,0.4); } 50% { opacity: 1; transform: scale(1.02); box-shadow: 0 0 0 8px rgba(52,211,153,0); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes confettiFall { 0% { transform: translateY(-10px) rotate(0deg); opacity: 1; } 100% { transform: translateY(100vh) rotate(720deg); opacity: 0; } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 0; }
        input:focus { border-color: ${colors.primary} !important; box-shadow: 0 0 0 3px ${colors.primaryGhost} !important; }
        button:active { transform: scale(0.97); }
      `}</style>
    </div>
  );
}
