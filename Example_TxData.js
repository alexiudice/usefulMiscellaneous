{
  "createdNodes" : {
    "grn:gg:movie:newHashCode" : {
      "action" : "ADDED"
    }
  },
  "removedRelationshipProperties" : {
    "byUid" : {
      "grn:gg:acted_in:e2dc4c71-723f-44f1-a6be-a4091fc8d1ed" : [
        {
          "key" : "roles",
          "oldValue" : [
            "Neo"
          ],
          "type" : null,
          "value" : null,
          "action" : "REMOVED"
        },
        {
          "key" : "grn",
          "oldValue" : "grn:gg:acted_in:e2dc4c71-723f-44f1-a6be-a4091fc8d1ed",
          "type" : null,
          "value" : null,
          "action" : "REMOVED"
        }
      ],
      "grn:gg:acted_in:hashCode" : [
        {
          "key" : "extraneousProperty",
          "oldValue" : "bar",
          "type" : null,
          "value" : null,
          "action" : "REMOVED"
        }
      ]
    },
    "byKey" : {
      "grn" : [
        "grn:gg:acted_in:e2dc4c71-723f-44f1-a6be-a4091fc8d1ed"
      ],
      "extraneousProperty" : [
        "grn:gg:acted_in:hashCode"
      ],
      "roles" : [
        "grn:gg:acted_in:e2dc4c71-723f-44f1-a6be-a4091fc8d1ed"
      ]
    },
    "byType" : {
      "ACTED_IN" : {
        "grn:gg:acted_in:e2dc4c71-723f-44f1-a6be-a4091fc8d1ed" : [
          {
            "key" : "roles",
            "oldValue" : [
              "Neo"
            ],
            "type" : null,
            "value" : null,
            "action" : "REMOVED"
          },
          {
            "key" : "grn",
            "oldValue" : "grn:gg:acted_in:e2dc4c71-723f-44f1-a6be-a4091fc8d1ed",
            "type" : null,
            "value" : null,
            "action" : "REMOVED"
          }
        ],
        "grn:gg:acted_in:hashCode" : [
          {
            "key" : "extraneousProperty",
            "oldValue" : "bar",
            "type" : null,
            "value" : null,
            "action" : "REMOVED"
          }
        ]
      }
    }
  },
  "deletedNodes" : {
    "grn:gg:movie:63048e8f-9900-49f7-98b2-caf00f94b0f7" : {
      "action" : "REMOVED"
    }
  },
  "removedLabels" : {
    "byLabel" : {
      "Movie" : [
        {
          "nodeUid" : "grn:gg:movie:63048e8f-9900-49f7-98b2-caf00f94b0f7",
          "action" : "REMOVED"
        },
        {
          "nodeUid" : "grn:gg:person:4e435473-3260-4b85-86b3-cd75cebadc14",
          "action" : "REMOVED"
        }
      ]
    },
    "byUid" : {
      "grn:gg:person:4e435473-3260-4b85-86b3-cd75cebadc14" : [
        "Movie"
      ],
      "grn:gg:movie:63048e8f-9900-49f7-98b2-caf00f94b0f7" : [
        "Movie"
      ]
    }
  },
  "removedNodeProperties" : {
    "byLabel" : {
      "Movie" : {
        "grn:gg:movie:63048e8f-9900-49f7-98b2-caf00f94b0f7" : [
          {
            "key" : "tagline",
            "oldValue" : "Welcome to the Real World",
            "type" : null,
            "value" : null,
            "action" : "REMOVED"
          },
          {
            "key" : "title",
            "oldValue" : "The Matrix",
            "type" : null,
            "value" : null,
            "action" : "REMOVED"
          },
          {
            "key" : "grn",
            "oldValue" : "grn:gg:movie:63048e8f-9900-49f7-98b2-caf00f94b0f7",
            "type" : null,
            "value" : null,
            "action" : "REMOVED"
          },
          {
            "key" : "released",
            "oldValue" : "1999",
            "type" : null,
            "value" : null,
            "action" : "REMOVED"
          }
        ]
      },
      "Actor" : {
        "grn:gg:person:4e435473-3260-4b85-86b3-cd75cebadc14" : [
          {
            "key" : "extraneousProperty",
            "oldValue" : "foo",
            "type" : null,
            "value" : null,
            "action" : "REMOVED"
          }
        ]
      },
      "Person" : {
        "grn:gg:person:4e435473-3260-4b85-86b3-cd75cebadc14" : [
          {
            "key" : "extraneousProperty",
            "oldValue" : "foo",
            "type" : null,
            "value" : null,
            "action" : "REMOVED"
          }
        ]
      }
    },
    "byUid" : {
      "grn:gg:person:4e435473-3260-4b85-86b3-cd75cebadc14" : [
        {
          "key" : "extraneousProperty",
          "oldValue" : "foo",
          "type" : null,
          "value" : null,
          "action" : "REMOVED"
        }
      ],
      "grn:gg:movie:63048e8f-9900-49f7-98b2-caf00f94b0f7" : [
        {
          "key" : "tagline",
          "oldValue" : "Welcome to the Real World",
          "type" : null,
          "value" : null,
          "action" : "REMOVED"
        },
        {
          "key" : "title",
          "oldValue" : "The Matrix",
          "type" : null,
          "value" : null,
          "action" : "REMOVED"
        },
        {
          "key" : "grn",
          "oldValue" : "grn:gg:movie:63048e8f-9900-49f7-98b2-caf00f94b0f7",
          "type" : null,
          "value" : null,
          "action" : "REMOVED"
        },
        {
          "key" : "released",
          "oldValue" : "1999",
          "type" : null,
          "value" : null,
          "action" : "REMOVED"
        }
      ]
    },
    "byKey" : {
      "tagline" : [
        "grn:gg:movie:63048e8f-9900-49f7-98b2-caf00f94b0f7"
      ],
      "released" : [
        "grn:gg:movie:63048e8f-9900-49f7-98b2-caf00f94b0f7"
      ],
      "extraneousProperty" : [
        "grn:gg:person:4e435473-3260-4b85-86b3-cd75cebadc14"
      ],
      "grn" : [
        "grn:gg:movie:63048e8f-9900-49f7-98b2-caf00f94b0f7"
      ],
      "title" : [
        "grn:gg:movie:63048e8f-9900-49f7-98b2-caf00f94b0f7"
      ]
    }
  },
  "assignedNodeProperties" : {
    "byLabel" : {
      "Movie" : {
        "grn:gg:movie:hashCode" : [
          {
            "key" : "released",
            "oldValue" : null,
            "type" : "Long",
            "value" : 1966,
            "action" : "ADDED"
          }
        ],
        "grn:gg:movie:newHashCode" : [
          {
            "key" : "title",
            "oldValue" : null,
            "type" : "String",
            "value" : "John Wick",
            "action" : "ADDED"
          },
          {
            "key" : "grn",
            "oldValue" : null,
            "type" : "String",
            "value" : "grn:gg:movie:newHashCode",
            "action" : "ADDED"
          },
          {
            "key" : "tagline",
            "oldValue" : null,
            "type" : "String",
            "value" : "Just Let John Retire Already",
            "action" : "ADDED"
          },
          {
            "key" : "released",
            "oldValue" : null,
            "type" : "Long",
            "value" : 2014,
            "action" : "ADDED"
          }
        ]
      },
      "Actor" : {
        "grn:gg:person:4e435473-3260-4b85-86b3-cd75cebadc14" : [
          {
            "key" : "born",
            "oldValue" : "1963",
            "type" : "String",
            "value" : "1964",
            "action" : "ADDED"
          }
        ],
        "grn:gg:person:hashCode" : [
          {
            "key" : "born",
            "oldValue" : null,
            "type" : "Long",
            "value" : 1930,
            "action" : "ADDED"
          }
        ]
      },
      "Person" : {
        "grn:gg:person:4e435473-3260-4b85-86b3-cd75cebadc14" : [
          {
            "key" : "born",
            "oldValue" : "1963",
            "type" : "Long",
            "value" : 1964,
            "action" : "ADDED"
          }
        ],
        "grn:gg:person:hashCode" : [
          {
            "key" : "born",
            "oldValue" : null,
            "type" : "Long",
            "value" : 1930,
            "action" : "ADDED"
          }
        ]
      }
    },
    "byUid" : {
      "grn:gg:person:4e435473-3260-4b85-86b3-cd75cebadc14" : [
        {
          "key" : "born",
          "oldValue" : "1963",
          "type" : "Long",
          "value" : 1964,
          "action" : "ADDED"
        }
      ],
      "grn:gg:movie:hashCode" : [
        {
          "key" : "released",
          "oldValue" : null,
          "type" : "Long",
          "value" : 1966,
          "action" : "ADDED"
        }
      ],
      "grn:gg:movie:newHashCode" : [
        {
          "key" : "title",
          "oldValue" : null,
          "type" : "String",
          "value" : "John Wick",
          "action" : "ADDED"
        },
        {
          "key" : "grn",
          "oldValue" : null,
          "type" : "String",
          "value" : "grn:gg:movie:newHashCode",
          "action" : "ADDED"
        },
        {
          "key" : "tagline",
          "oldValue" : null,
          "type" : "String",
          "value" : "Just Let John Retire Already",
          "action" : "ADDED"
        },
        {
          "key" : "released",
          "oldValue" : null,
          "type" : "Long",
          "value" : 2014,
          "action" : "ADDED"
        }
      ],
      "grn:gg:person:hashCode" : [
        {
          "key" : "born",
          "oldValue" : null,
          "type" : "Long",
          "value" : 1930,
          "action" : "ADDED"
        }
      ]
    },
    "byKey" : {
      "tagline" : [
        "grn:gg:movie:newHashCode"
      ],
      "released" : [
        "grn:gg:movie:hashCode",
        "grn:gg:movie:newHashCode"
      ],
      "grn" : [
        "grn:gg:movie:newHashCode"
      ],
      "title" : [
        "grn:gg:movie:newHashCode"
      ],
      "born" : [
        "grn:gg:person:hashCode",
        "grn:gg:person:4e435473-3260-4b85-86b3-cd75cebadc14"
      ]
    }
  },
  "commitTime" : 1551104920495,
  "deletedRelationships" : {
    "grn:gg:acted_in:e2dc4c71-723f-44f1-a6be-a4091fc8d1ed" : {
      "uidOfStartNode" : "grn:gg:person:4e435473-3260-4b85-86b3-cd75cebadc14",
      "uidOfEndNode" : "grn:gg:movie:63048e8f-9900-49f7-98b2-caf00f94b0f7",
      "type" : "ACTED_IN",
      "action" : "REMOVED"
    }
  },
  "assignedRelationshipProperties" : {
    "byUid" : {
      "grn:gg:acted_in:hashCode" : [
        {
          "key" : "newProp",
          "oldValue" : null,
          "type" : "String",
          "value" : "baz",
          "action" : "ADDED"
        },
        {
          "key" : "roles",
          "oldValue" : [
            "Man With no Name"
          ],
          "type" : "Array.String",
          "value" : [
            "Blondie"
          ],
          "action" : "ADDED"
        }
      ],
      "grn:gg:acted_in_newHashCode" : [
        {
          "key" : "roles",
          "oldValue" : null,
          "type" : "Array.String",
          "value" : [
            "John Wick"
          ],
          "action" : "ADDED"
        },
        {
          "key" : "grn",
          "oldValue" : null,
          "type" : "String",
          "value" : "grn:gg:acted_in_newHashCode",
          "action" : "ADDED"
        }
      ]
    },
    "byKey" : {
      "grn" : [
        "grn:gg:acted_in_newHashCode"
      ],
      "roles" : [
        "grn:gg:acted_in:hashCode",
        "grn:gg:acted_in_newHashCode"
      ],
      "newProp" : [
        "grn:gg:acted_in:hashCode"
      ]
    },
    "byType" : {
      "ACTED_IN" : {
        "grn:gg:acted_in:hashCode" : [
          {
            "key" : "newProp",
            "oldValue" : null,
            "type" : "String",
            "value" : "baz",
            "action" : "ADDED"
          },
          {
            "key" : "roles",
            "oldValue" : [
              "Man With no Name"
            ],
            "type" : "Array.String",
            "value" : [
              "Blondie"
            ],
            "action" : "ADDED"
          }
        ],
        "grn:gg:acted_in_newHashCode" : [
          {
            "key" : "roles",
            "oldValue" : null,
            "type" : "Array.String",
            "value" : [
              "John Wick"
            ],
            "action" : "ADDED"
          },
          {
            "key" : "grn",
            "oldValue" : null,
            "type" : "String",
            "value" : "grn:gg:acted_in_newHashCode",
            "action" : "ADDED"
          }
        ]
      }
    }
  },
  "transactionId" : 31,
  "createdRelationships" : {
    "grn:gg:acted_in_newHashCode" : {
      "uidOfStartNode" : "grn:gg:person:4e435473-3260-4b85-86b3-cd75cebadc14",
      "uidOfEndNode" : "grn:gg:movie:newHashCode",
      "type" : "ACTED_IN",
      "action" : "ADDED"
    }
  },
  "assignedLabels" : {
    "byLabel" : {
      "Movie" : [
        {
          "nodeUid" : "grn:gg:movie:newHashCode",
          "action" : "ADDED"
        }
      ],
      "Actor" : [
        {
          "nodeUid" : "grn:gg:person:hashCode",
          "action" : "ADDED"
        },
        {
          "nodeUid" : "grn:gg:person:4e435473-3260-4b85-86b3-cd75cebadc14",
          "action" : "ADDED"
        }
      ]
    },
    "byUid" : {
      "grn:gg:person:4e435473-3260-4b85-86b3-cd75cebadc14" : [
        "Actor"
      ],
      "grn:gg:movie:newHashCode" : [
        "Movie"
      ],
      "grn:gg:person:hashCode" : [
        "Actor"
      ]
    }
  }
}