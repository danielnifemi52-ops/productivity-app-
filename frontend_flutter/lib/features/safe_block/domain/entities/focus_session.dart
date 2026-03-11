class FocusSession {
  final DateTime startAt;
  final DateTime endAt;
  final bool emergencyBreakAllowed;

  const FocusSession({
    required this.startAt,
    required this.endAt,
    required this.emergencyBreakAllowed,
  });
}
